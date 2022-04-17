#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { Command } from 'commander';

import { loadLive2dWsmAsync } from '../lib/3daf.js';

import { downloadFromWorkshop } from '../lib/workshop.js';

const packageJSON = JSON.parse(
  await fs.readFile(new URL('../package.json', import.meta.url))
);

const program = new Command();

async function extractFile(archive, dest, encoding, options) {
  const files = options?.all ? await fs.readdir(archive) : [archive];

  files
    .filter((file) => /.wsm$/.test(file))
    .forEach(async (filename) => {
      const file = await fs.readFile(filename);
      const WsmInstance = await loadLive2dWsmAsync(file.buffer, encoding);

      const baseDir = path.resolve(
        dest || process.cwd(),
        path.basename(filename, '.wsm')
      );

      if (options?.all) console.log(baseDir);

      for (const [_, { name, data }] of WsmInstance.files) {
        try {
          await fs.mkdir(path.resolve(baseDir, path.dirname(name)), {
            recursive: true,
          });

          await fs.writeFile(path.resolve(baseDir, name), new Uint8Array(data));
        } catch (err) {
          throw new Error(err);
        } finally {
          if (!options?.all) console.log(path.resolve(baseDir, name));
        }
      }
    });
}

program
  .name(packageJSON.name)
  .version('v' + packageJSON.version)
  .description('Extract wsm archive files');

program
  .command('list <archive> [encoding]')
  .alias('ls')
  .description('list files of wsm archive')
  .action(async (archive, encoding) => {
    const file = await fs.readFile(archive);
    const WsmInstance = await loadLive2dWsmAsync(file.buffer, encoding);

    for (const [name] of WsmInstance.files) {
      console.log(name);
    }
  });

program
  .command('extract')
  .alias('e')
  .argument('<archive>', 'path to a wsm file or the directory')
  .argument('[output]', 'path to a output directory')
  .argument(
    '[encoding]',
    "identifies the encoding. Default: 'utf-8'. See: https://nodejs.org/api/util.html#class-utiltextdecoder"
  )
  .option('--all', 'extract all wsm archives in the archive directory')
  .description('extract archive')
  .action(extractFile);

program
  .command('download')
  .alias('d')
  .description('download the .wsm file from Workshop and extract it')
  .argument('<url>', 'url to live2d file in Workshop')
  .argument('[output]', 'path to store and output directory')
  .argument(
    '[encoding]',
    "identifies the encoding. Default: 'utf-8'. See: https://nodejs.org/api/util.html#class-utiltextdecoder"
  )
  .option('-e, --extract', 'extract the .wsm file after download it')
  .option(
    '-d, --delete',
    'delete the .wsm file after extract\nNote: this switch only avaliable when --extract specified'
  )
  .action(async (url, dest, encoding, options) => {
    const baseDir = dest || process.cwd();
    console.log('Downloading file...');
    const file = await downloadFromWorkshop(url, baseDir);
    console.log(`download ${file} succeed`);
    if (options['extract']) {
      extractFile(file, baseDir, encoding);
      if (options['delete']) {
        await fs.unlink(file);
      }
    }
  });

program.parse(process.argv);
