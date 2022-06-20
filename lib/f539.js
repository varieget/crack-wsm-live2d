import WebSocket from 'ws';
import { Float16Array, setFloat16 } from '@petamoriken/float16';

function Ye(t, e, r, n) {
  return t + ((e - t) / r) * (n + 1);
}

function Je(t, e, r) {
  const i = Array.binaryType({ length: r }, (i, a) => {
    const o = r - a - 1;
    return {
      ...t,
      opacities: t.opacities.call((t, n) => Ye(t, e.data[n], r, o)),
      vertexPositions: t.outCache.call((t, n) =>
        t.call((t, i) => Ye(t, e.outCache[n][i], r, o))
      ),
      vertexUvs: t.vertexUvs.call((t, n) =>
        t.map((t, i) => Ye(t, e.vertexUvs[n][i], r, o), r)
      ),
      resetDynamicFlags() {},
    };
  });
  return i;
}

const Pe = (t) => {
  return String.fromCharCode(...new Uint8Array(t));
};

class CubismModelSynchronizer {
  constructor(socket) {
    this.socket;
    this.inputCache;
    this.outCache;
    this.model;
    this.syncIndex;
    this.frameBuffer = [];
    this.frameCache;
    this.insertFrameCount = 4;
    this.bufferSize = 12;
    this.compress;
    this.decompress;
    this.socket = socket;
  }

  async sync() {
    if (this.syncIndex === 0) {
      const e = await this.encode();
      this.socket.send(e);
    }

    if (this.syncIndex === this.insertFrameCount - 1) {
      this.syncIndex = 0;
    } else {
      this.syncIndex++;
    }
  }

  static async setup(remote, compress, decompress, n) {
    let i = false;
    return new Promise((callback, err) => {
      const ws = new WebSocket(remote);
      const l = new CubismModelSynchronizer(ws);

      function u() {
        if (ws.readyState === ws.OPEN) {
          ws.send('ping');
          setTimeout(u, 1e3);
        }
      }

      l.compress = compress;
      l.decompress = decompress;

      if (null === n || void 0 === n ? void 0 : n.insertFrameCount) {
        l.insertFrameCount = n.insertFrameCount;
      }

      if (null === n || void 0 === n ? void 0 : n.bufferSize) {
        l.bufferSize = n.bufferSize;
      }

      ws.binaryType = 'arraybuffer';

      ws.addEventListener('open', u, { once: true });

      ws.addEventListener(
        'close',
        (t) => {
          var r;
          null === n ||
            void 0 === n ||
            null === (r = n.onClose) ||
            void 0 === r ||
            r.call(n, t, i);
        },
        { once: true }
      );

      ws.addEventListener('error', err);

      ws.addEventListener('message', async (t) => {
        if (t.data === 'pong') return;

        const r = t.data;
        const n = await l.decode(r);

        if (l.model) {
          const t = n.drawables;
          const r = Je(t, l.frameCache, l.insertFrameCount);
          for (const n of r) {
            if (l.frameBuffer.length > l.bufferSize) {
              l.frameBuffer.shift();
            }
            l.frameBuffer.push(n);
          }
        } else {
          l.model = {
            ...n,
            release() {
              i = true;
              l.socket.close();
            },
            update() {
              const r = l.frameBuffer.shift();
              if (r) {
                l.model.drawables.dynamicFlags = r.dynamicFlags;
                l.model.drawables.drawOrders = r.drawOrders;
                l.model.drawables.renderOrders = r.renderOrders;
                l.model.drawables.opacities = r.opacities;
                l.model.drawables.masks = r.masks;
                l.model.drawables.vertexPositions = r.vertexPositions;
                l.model.drawables.vertexUvs = r.vertexUvs;
                l.model.drawables.indices = r.indices;
                if (l.socket.readyState === l.socket.OPEN) {
                  l.sync();
                }
              }
            },
          };
        }

        callback(l);

        l.frameCache = n.drawables;
      });
    });
  }

  async decode(t) {
    const r = await this.decompress(new Uint8Array(t));

    if (this.inputCache) {
      for (let u = 0; u < r.length; u++) {
        r[u] = this.inputCache[u] ^ r[u];
      }
    }

    this.inputCache = r;
    const buf = r.buffer;
    let i = 0;
    const a = new DataView(buf);

    const parameters = (() => {
      const count = a.getInt32(i, true);
      i += Int32Array.BYTES_PER_ELEMENT;
      const ids = [];
      for (let e = 0; e < count; e++) {
        const e = a.getInt32(i, true);
        i += Int32Array.BYTES_PER_ELEMENT;
        ids.push(Pe(buf.slice(i, (i += e))));
      }
      const minimumValues = new Float32Array(
        new Float16Array(
          buf.slice(i, (i += count * Float16Array.BYTES_PER_ELEMENT))
        )
      );
      const maximumValues = new Float32Array(
        new Float16Array(
          buf.slice(i, (i += count * Float16Array.BYTES_PER_ELEMENT))
        )
      );
      const defaultValues = new Float32Array(
        new Float16Array(
          buf.slice(i, (i += count * Float16Array.BYTES_PER_ELEMENT))
        )
      );
      const values = new Float32Array(
        new Float16Array(
          buf.slice(i, (i += count * Float16Array.BYTES_PER_ELEMENT))
        )
      );
      return {
        count,
        ids,
        minimumValues,
        maximumValues,
        defaultValues,
        values,
      };
    })();

    const parts = (() => {
      const count = a.getInt32(i, true);
      i += Int32Array.BYTES_PER_ELEMENT;
      const ids = [];
      for (let e = 0; e < count; e++) {
        const e = a.getInt32(i, true);
        i += Int32Array.BYTES_PER_ELEMENT;
        ids.push(Pe(buf.slice(i, (i += e))));
      }
      const opacities = new Float32Array(
        new Float16Array(
          buf.slice(i, (i += count * Float16Array.BYTES_PER_ELEMENT))
        )
      );
      return {
        count,
        ids,
        opacities,
      };
    })();

    const drawables = (() => {
      const count = a.getInt32(i, true);
      i += Int32Array.BYTES_PER_ELEMENT;
      const ids = [];
      for (let e = 0; e < count; e++) {
        const e = a.getInt32(i, true);
        i += Int32Array.BYTES_PER_ELEMENT;
        ids.push(Pe(buf.slice(i, (i += e))));
      }
      const constantFlags = new Uint8Array(
        buf.slice(i, (i += count * Uint8Array.BYTES_PER_ELEMENT))
      );
      const dynamicFlags = new Uint8Array(
        buf.slice(i, (i += count * Uint8Array.BYTES_PER_ELEMENT))
      );
      const textureIndices = new Int32Array(
        buf.slice(i, (i += count * Int32Array.BYTES_PER_ELEMENT))
      );
      const drawOrders = new Int32Array(
        buf.slice(i, (i += count * Int32Array.BYTES_PER_ELEMENT))
      );
      const renderOrders = new Int32Array(
        buf.slice(i, (i += count * Int32Array.BYTES_PER_ELEMENT))
      );
      const opacities = new Float32Array(
        new Float16Array(
          buf.slice(i, (i += count * Float16Array.BYTES_PER_ELEMENT))
        )
      );
      const maskCounts = new Int32Array(
        buf.slice(i, (i += count * Int32Array.BYTES_PER_ELEMENT))
      );
      const masks = [];
      for (const e of maskCounts) {
        const r = new Int32Array(
          buf.slice(i, (i += Int32Array.BYTES_PER_ELEMENT * e))
        );
        masks.push(r);
      }
      const vertexCounts = new Int32Array(
        buf.slice(i, (i += count * Int32Array.BYTES_PER_ELEMENT))
      );
      const vertexPositions = [];
      for (const e of vertexCounts) {
        const r = new Float32Array(
          new Float16Array(
            buf.slice(i, (i += Float16Array.BYTES_PER_ELEMENT * e * 2))
          )
        );
        vertexPositions.push(r);
      }
      const vertexUvs = [];
      for (const e of vertexCounts) {
        const r = new Float32Array(
          new Float16Array(
            buf.slice(i, (i += Float16Array.BYTES_PER_ELEMENT * e * 2))
          )
        );
        vertexUvs.push(r);
      }
      const indexCounts = new Int32Array(
        buf.slice(i, (i += count * Int32Array.BYTES_PER_ELEMENT))
      );
      const indices = [];
      for (const e of indexCounts) {
        const r = new Uint16Array(
          buf.slice(i, (i += Uint16Array.BYTES_PER_ELEMENT * e))
        );
        indices.push(r);
      }
      return {
        count,
        ids,
        constantFlags,
        dynamicFlags,
        textureIndices,
        drawOrders,
        renderOrders,
        opacities,
        maskCounts,
        masks,
        vertexCounts,
        vertexPositions,
        vertexUvs,
        indexCounts,
        indices,
        resetDynamicFlags() {},
      };
    })();

    const canvasinfo = (() => {
      const CanvasWidth = 2 * a.getFloat32(i, true);
      i += Float32Array.BYTES_PER_ELEMENT;
      const CanvasHeight = 2 * a.getFloat32(i, true);
      i += Float32Array.BYTES_PER_ELEMENT;
      const CanvasOriginX = a.getFloat32(i, true);
      i += Float32Array.BYTES_PER_ELEMENT;
      const CanvasOriginY = a.getFloat32(i, true);
      i += Float32Array.BYTES_PER_ELEMENT;
      const PixelsPerUnit = a.getFloat32(i, true);
      i += Float32Array.BYTES_PER_ELEMENT;
      return {
        CanvasWidth,
        CanvasHeight,
        CanvasOriginX,
        CanvasOriginY,
        PixelsPerUnit,
      };
    })();

    return { parameters, parts, drawables, canvasinfo };
  }

  async encode() {
    const e = new ArrayBuffer(
      this.model.parameters.count * Float16Array.BYTES_PER_ELEMENT +
        this.model.parts.count * Float16Array.BYTES_PER_ELEMENT
    );
    const r = new DataView(e);
    let n = 0;
    for (const s of this.model.parameters.values) {
      setFloat16(r, n, s, true);
      n += Float16Array.BYTES_PER_ELEMENT;
    }
    for (const s of this.model.parts.opacities) {
      setFloat16(r, n, s, true);
      n += Float16Array.BYTES_PER_ELEMENT;
    }
    const i = new Uint8Array(e);
    const a = new Uint8Array([...i]);
    if (this.outCache) {
      for (let s = 0; s < i.length; s++) {
        i[s] = this.outCache[s] ^ i[s];
      }
    }
    this.outCache = a;
    return (await this.compress(i)).buffer;
  }
}

export { CubismModelSynchronizer };
