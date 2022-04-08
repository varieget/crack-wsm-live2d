#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

const packageJSON = require("../package.json");
const { Command } = require("commander");

const program = new Command();

program
  .name(packageJSON.name)
  .usage("<command> [arguments]")
  .version("v" + packageJSON.version)
  .description("Extract wsm archive files");

const { loadLive2dWsmAsync } = require("../lib/3daf");

program
  .command("list <archive> [encoding]")
  .alias("ls")
  .description("list files of wsm archive")
  .action(async (archive, encoding) => {
    const file = fs.readFileSync(archive);
    const WsmInstance = await loadLive2dWsmAsync(file.buffer, encoding);

    for (const [name] of WsmInstance.files) {
      console.log(name);
    }
  });

program
  .command("all")
  .description("extract all wsm archives in the current working directory")
  .action(() => {
    const cwd = process.cwd();

    fs.readdir(cwd, (err, files) => {
      if (err) throw err;

      files
        .filter((file) => /.wsm$/.test(file))
        .forEach(async (filename) => {
          const dirname = path.basename(filename, ".wsm");

          const file = fs.readFileSync(path.resolve(cwd, filename));
          const WsmInstance = await loadLive2dWsmAsync(file.buffer);

          console.log(path.resolve(cwd, dirname));

          for (const [_, { name, data }] of WsmInstance.files) {
            fs.outputFile(
              path.resolve(cwd, dirname, name),
              new Uint8Array(data),
              (err) => {
                if (err) throw err;
              }
            );
          }
        });
    });
  });

program
  .argument("<archive>", "path to a wsm file")
  .argument("[output]", "path to a output directory")
  .argument(
    "[encoding]",
    "identifies the encoding. Default: 'utf-8'. See: https://nodejs.org/api/util.html#class-utiltextdecoder"
  )
  .description("extract archive")
  .action(async (archive, dest, encoding) => {
    if (path.extname(archive) !== ".wsm") {
      throw new Error("It is not a wsm file.");
    }

    const file = fs.readFileSync(archive);
    const WsmInstance = await loadLive2dWsmAsync(file.buffer, encoding);

    dest = path.resolve(dest || process.cwd(), path.basename(archive, ".wsm"));

    for (const [_, { name, data }] of WsmInstance.files) {
      fs.outputFile(path.resolve(dest, name), new Uint8Array(data), (err) => {
        if (err) throw err;

        console.log(path.resolve(dest, name));
      });
    }
  });

program.parse(process.argv);
