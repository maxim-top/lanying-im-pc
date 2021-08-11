# 美信拓扑IM PC版

[美信拓扑](https://www.maximtop.com/)，一键启用多云架构的即时通讯云服务

美信拓扑 IM 为美信拓扑云服务的 DemoApp，方便 App 开发者体验和使用 IM SDK，可以直接[在线试用](https://chat-h5.maximtop.com)，也可以在官网[下载页面](https://www.maximtop.com/downloads/)选择试用所有客户端。

## 工程说明

本工程基于 Electron 开发，UI 与 Web 版基本一致，也是一个典型的 Web 工程。

构建前记得运行命令
```
yarn
```

如果要生成 Mac 安装包，运行命令
```
yarn mac
```

同样， Win 安装包对应命令
```
yarn win
```

### 开发自己的应用

请先修改美信拓扑 AppID

打开文件 ./src/renderer/App.vue, 将默认 AppID: welovemaxim 更改为你的应用AppID，此 AppID 为在[美信拓扑后台](https://console.maximtop.com/)创建应用后获取。

了解更多信息可以阅读[在线文档](https://www.maximtop.com/docs/)，或者在本仓库提问，好好玩 :)
