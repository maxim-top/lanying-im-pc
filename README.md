# 蓝莺IM PC 版

蓝莺IM，是由[美信拓扑](https://www.maximtop.com/)团队研发的新一代即时通讯云服务，SDK设计简单集成方便，服务采用云原生技术和多云架构，私有云也可按月付费。

蓝莺IM APP 为方便体验试用蓝莺 IMSDK 的 DemoApp。开发者可直接[在线试用](https://chat-h5.maximtop.com)，也可在官网[下载页面](https://www.maximtop.com/downloads/)选择试用所有客户端。

[![Scc Count Badge](https://sloc.xyz/github/maxim-top/maxim-pc/?category=total&avg-wage=1)](https://github.com/maxim-top/maxim-pc/) [![Scc Count Badge](https://sloc.xyz/github/maxim-top/maxim-pc/?category=code&avg-wage=1)](https://github.com/maxim-top/maxim-pc/) 

## 工程说明

本工程基于 Electron 开发，UI 与 Web 版基本一致，也是一个典型的 Web 工程。

需要 Node.js 22 版本（Node.js v22）或更高版本。

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

## 软件签名处理说明
对于 mac安装包进行签名处理需要修改配置文件`./_scripts/config.js/`，修改内容如下：
```
const config = {
  mac: {
    category: 'public.app-category.social', // mac应用分类
    identity: 'your-identity', // mac证书标识
  }
}
```

对于 windows安装包进行签名处理需要修改配置文件`./_scripts/config.js/`，修改内容如下：
```
const config = {
  win: {
    publisherName: 'your-company-name', // windows应用发布者名称
    certificateFile: 'your-certificate-file-path', // windows证书文件路径(pfx、p12)
    certificatePassword: 'your-certificate-password', // windows证书密码
    signingHashAlgorithms: 'sha256', // 签名算法(推荐 sha256)
    rfc3161TimeStampServer: 'http://timestamp.digicert.com', // 时间戳服务器地址
  }
}
```

如果不需要进行签名处理，则需要将上述参数都删除掉。同时针对 mac 安装包，需要修改配置文件`./_scripts/config.js/`，修改内容如下：
```
const config = {
  dmg: {
    sign: false, // 是否进行签名处理 (mac 不进行签名处理)
  }
}
```

### MAC ARM 运行提示
Apple M1 芯片上可能出现安装包无法运行的问题，需要执行如下命令行进行操作：
```
$ xattr -c <path/to/application.app>
```

### MAC版安装包的公证
打包前设置公证使用的环境变量
```
export APPLE_ID='xxx@example.com' # Apple开发者账号的邮箱
export APPLE_TEAM_ID='XXXXXXXXX'  # Apple 开发者账号的团队 ID
export APPLE_APP_SPECIFIC_PASSWORD='xxxx-xxxx-xxxx-xxxx' # Apple 针对应用自动上传或 notarization 生成的 应用专用密码
```
### 开发自己的应用

请先修改美信拓扑 AppID

打开文件 `./src/renderer/App.vue`, 将默认 AppID: welovemaxim 更改为你的应用AppID，此 AppID 为在[美信拓扑后台](https://console.maximtop.com/)创建应用后获取。

了解更多信息可以阅读[在线文档](https://www.maximtop.com/docs/)，或者在本仓库提问，好好玩 :)

-- --
**蓝莺IM 专业SDK，私有云按月付费**
