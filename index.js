const fs = require("fs-extra");
const path = require("path");

const { loadLive2dWsmAsync } = require("./3daf");

fs.readdir(__dirname, (err, files) => {
  if (err) throw err;

  files
    .filter((file) => /.wsm$/.test(file))
    .forEach(async (filename) => {
      const file = fs.readFileSync(path.resolve(__dirname, filename));

      const WsmInstance = await loadLive2dWsmAsync(file.buffer);

      console.log(WsmInstance.files);

      for (const [_, { name, data }] of WsmInstance.files) {
        fs.outputFile(
          path.resolve(__dirname, "dist", filename, name),
          new Uint8Array(data),
          (err) => {
            if (err) throw err;

            console.log(name);
          }
        );
      }
    });
});
