# 蓝莺IM PC 版

蓝莺IM，是由[美信拓扑](https://www.maximtop.com/)团队研发的新一代即时通讯云服务，SDK设计简单集成方便，服务采用云原生技术和多云架构，私有云也可按月付费。

蓝莺IM APP 为方便体验试用蓝莺 IMSDK 的 DemoApp。开发者可直接[在线试用](https://chat-h5.maximtop.com)，也可在官网[下载页面](https://www.maximtop.com/downloads/)选择试用所有客户端。

[![Scc Count Badge](https://sloc.xyz/github/maxim-top/maxim-pc/?category=total&avg-wage=1)](https://github.com/maxim-top/maxim-pc/) [![Scc Count Badge](https://sloc.xyz/github/maxim-top/maxim-pc/?category=code&avg-wage=1)](https://github.com/maxim-top/maxim-pc/) 

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

### MAC ARM 运行提示
Apple M1 芯片上可能出现安装包无法运行的问题，需要执行如下命令行进行操作：
```
$ xattr -c <path/to/application.app>
```

### 开发自己的应用

请先修改美信拓扑 AppID

打开文件 `./src/renderer/App.vue`, 将默认 AppID: welovemaxim 更改为你的应用AppID，此 AppID 为在[美信拓扑后台](https://console.maximtop.com/)创建应用后获取。

了解更多信息可以阅读[在线文档](https://www.maximtop.com/docs/)，或者在本仓库提问，好好玩 :)

-- --
**蓝莺IM 专业SDK，私有云按月付费**
