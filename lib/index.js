import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { loadLive2dWsmAsync } from './3daf.js';

const __dirname = path.dirname(fileURLToPath(new URL('', import.meta.url)));

try {
  const files = await fs.readdir(path.resolve(__dirname, '../'));

  files
    .filter((file) => /.wsm$/.test(file))
    .forEach(async (filename) => {
      const file = await fs.readFile(path.resolve(__dirname, '../', filename));

      const WsmInstance = await loadLive2dWsmAsync(file.buffer);

      console.log(WsmInstance.files);

      for (const [_, { name, data }] of WsmInstance.files) {
        try {
          await fs.mkdir(
            path.resolve(__dirname, '../dist', filename, path.dirname(name)),
            { recursive: true }
          );

          await fs.writeFile(
            path.resolve(__dirname, '../dist', filename, name),
            new Uint8Array(data)
          );
        } catch (err) {
          throw new Error(err);
        }
      }
    });
} catch (err) {
  throw new Error(err);
}
