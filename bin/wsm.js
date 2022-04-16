#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { Command } from "commander";

import { loadLive2dWsmAsync } from "../lib/3daf.js";

import { downloadFromWorkshop } from "../lib/workshop.js";

const packageJSON = JSON.parse(
  await fs.readFile(new URL("../package.json", import.meta.url))
);

const program = new Command();

async function extractFile(archive, dest, encoding) {
  if (path.extname(archive) !== ".wsm") {
    throw new Error("It is not a wsm file.");
  }

  const file = await fs.readFile(archive);

  const WsmInstance = await loadLive2dWsmAsync(file.buffer, encoding);

  dest = path.resolve(dest || process.cwd(), path.basename(archive, ".wsm"));

  for (const [_, { name, data }] of WsmInstance.files) {
    try {
      await fs.mkdir(path.resolve(dest, path.dirname(name)), {
        recursive: true,
      });

      await fs.writeFile(path.resolve(dest, name), new Uint8Array(data));
    } catch (err) {
      throw new Error(err);
    } finally {
      console.log(path.resolve(dest, name));
    }
  }
}

program
  .name(packageJSON.name)
  .usage("<command> [arguments]")
  .version("v" + packageJSON.version)
  .description("Extract wsm archive files");

program
  .command("list <archive> [encoding]")
  .alias("ls")
  .description("list files of wsm archive")
  .action(async (archive, encoding) => {
    const file = await fs.readFile(archive);
    const WsmInstance = await loadLive2dWsmAsync(file.buffer, encoding);

    for (const [name] of WsmInstance.files) {
      console.log(name);
    }
  });

program
  .command("all")
  .description("extract all wsm archives in the current working directory")
  .action(async () => {
    const cwd = process.cwd();

    const files = await fs.readdir(cwd);

    files
      .filter((file) => /.wsm$/.test(file))
      .forEach(async (filename) => {
        const dirname = path.basename(filename, ".wsm");

        const file = await fs.readFile(path.resolve(cwd, filename));

        const WsmInstance = await loadLive2dWsmAsync(file.buffer);

        for (const [_, { name, data }] of WsmInstance.files) {
          try {
            await fs.mkdir(path.resolve(cwd, dirname, path.dirname(name)), {
              recursive: true,
            });

            await fs.writeFile(
              path.resolve(cwd, dirname, name),
              new Uint8Array(data)
            );
          } catch (err) {
            throw new Error(err);
          } finally {
            console.log(path.resolve(cwd, dirname));
          }
        }
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
  .action(extractFile);

program
  .command("download")
  .alias("d")
  .description("download the .wsm file from Workshop and extract it")
  .argument("<url>", "url to live2d file in Workshop")
  .argument("[output]", "path to store and output directory")
  .argument(
    "[encoding]",
    "identifies the encoding. Default: 'utf-8'. See: https://nodejs.org/api/util.html#class-utiltextdecoder"
  )
  .option("-e, --extract", "extract the .wsm file after download it")
  .option(
    "-d, --delete",
    "delete the .wsm file after extract\nNote: this switch only avaliable when --extract specified"
  )
  .action(async (url, dest, encoding, options) => {
    const baseDir = dest || process.cwd();
    console.log("Downloading file...");
    const file = await downloadFromWorkshop(url, baseDir);
    console.log(`download ${file} succeed`);
    if (options["extract"]) {
      extractFile(file, baseDir, encoding);
      if (options["delete"]) {
        await fs.unlink(file);
      }
    }
  });

program.parse(process.argv);
