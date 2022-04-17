import axios from 'axios';
import fs from 'node:fs/promises';
import path from 'node:path';

async function getLive2dName(workId) {
  const infoUrl = `https://api.live.bilibili.com/xlive/virtual-interface/v1/work/get_work?w=${workId}`;
  const h = {
    Referer: `https://workshop.bilibili.com/live2d/${workId}`,
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36',
    Accept: 'application/json',
  };

  const response = (await axios.get(infoUrl, { headers: h })).data;
  const title = response['data']['name'];
  return title;
}

async function getLive2dResUrl(workId) {
  const resUrl = `https://api.live.bilibili.com/xlive/virtual-interface/v1/work/find_show_url?work_id=${workId}`;
  const h = {
    Referer: `https://workshop.bilibili.com/live2d/${workId}`,
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36',
    Accept: 'application/json',
  };

  const response = (await axios.get(resUrl, { headers: h })).data;
  const url = response['data']['url'];
  return url;
}

async function fetchLive2dRes(url, workId) {
  const h = {
    Referer: `https://workshop.bilibili.com/live2d/${workId}`,
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36',
    Accept: 'application/json',
  };
  return (
    await axios.get(url, {
      headers: h,
      responseType: 'arraybuffer',
    })
  ).data;
}

function removeInvalidCharsFromFileName(name) {
  const regex = /[\?\*\:\"\\/\|]/g;
  return name.replace(regex, ' ');
}

async function downloadFromWorkshop(url, baseDir) {
  const regex = /^https?:\/\/workshop\.bilibili\.com\/live2d\/(\d+).*$/;
  if (!regex.test(url)) throw Error('Invalid url');
  const workId = regex.exec(url)[1];
  const title = await getLive2dName(workId);
  const resUrl = await getLive2dResUrl(workId);

  const inputStream = await fetchLive2dRes(resUrl, workId);
  const file = path.resolve(
    baseDir,
    removeInvalidCharsFromFileName(`${title}.wsm`)
  );
  await fs.writeFile(file, inputStream, 'binary');
  return file;
}

export { downloadFromWorkshop };
