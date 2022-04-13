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

前往 [nodejs.org](https://nodejs.org/zh-cn/) 下载并安装 node。

2. 在终端运行

```bash
$ npx crack-wsm-live2d <archive> [output] [encoding]
```

### 例如

将当前目录下一个名为 `test.wsm` 的文件解压到 `dist` 文件夹

```bash
$ npx crack-wsm-live2d ./test.wsm ./dist
```

或者，解压当前目录下全部 `wsm` 文件

```bash
$ npx crack-wsm-live2d all
```

### 直接从创意工坊下载文件并解包

1. 复制创意工坊的连接，链接**必须形如** `https://workshop.bilibili.com/live2d/xxxx`

2. 使用

   > 更详细的内容可运行 `npx crack-wsm-live2d d -h` 查看

   1. 下载**但不解包**文件

      ```bash
      $ npx crack-wsm-live2d d <url>
      ```

   2. 下载并解包文件

      ```bash
      $ npx crack-wsm-live2d d -e <url> [output] [encoding]
      ```

      > 添加 `-d` 参数可以在解包完成后删除源文件

### 帮助

```bash
$ npx crack-wsm-live2d -h
```
