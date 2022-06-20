import { ZstdCodec } from 'zstd-codec';
import { CubismModelSynchronizer } from './f539.js';

const id = 11261;
const remote =
  'wss://workshop-wss.biliapi.net/xlive/virtual-show/v1/ws?w=' + id;

ZstdCodec.run(async (zstd) => {
  const simple = new zstd.Simple();

  const setup = await CubismModelSynchronizer.setup(
    remote,
    simple.compress,
    simple.decompress
  );

  console.log(setup.model);
});
