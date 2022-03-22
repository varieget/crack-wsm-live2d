# crack-wsm-live2d

适用于解压经过 [创意工坊](https://workshop.bilibili.com/homepage) 加密的 `live2d` 文件，这些加密文件通常被存储为 `wsm` 格式。

## 获取 `wsm` 文件

1. 开发者工具（`F12`），选择 `Network`

2. 首先点击 `Filter`，然后点击 `Fetch/XHR`

3. 在输入框输入 `.wsm`

4. 刷新页面

5. 双击在下方出现的文件名，将文件下载到本地

## 解压 `wsm` 文件

1. 安装 node

前往[nodejs.org](https://nodejs.org/zh-cn/)下载并安装 node。

2. 安装依赖

```bash
npm i
```

3. 将 `wsm` 存储在此项目的根目录下

4. 运行命令

```bash
node .
```

5. 生成 `dist` 文件夹

解压后的 `live2d` 文件将被输出到 `dist` 文件夹。
