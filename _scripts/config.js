const { productName } = require('../package.json')

const config = {
  appId: 'com.maxim.app',
  copyright: 'Copyright © 2019-2024  MaxIM.Top',
  productName,
  directories: {
    output: 'build/',
  },
  files: [
    '_icons/*.*',
    '!**/node_modules/**/*',
    'dist/**/*',
    'src/**/*',
    "package.json"
  ],
  "asar": false,
	"asarUnpack": [
		"./app/dist",
	],
  dmg: {
    internetEnabled: false,
    sign: true,
    contents: [
      {
        path: '/Applications',
        type: 'link',
        x: 410,
        y: 230,
      },
      {
        type: 'file',
        x: 130,
        y: 230,
      },
    ],
    window: {
      height: 380,
      width: 540,
    },
  },
  linux: {
    icon: '_icons',
    target: ['deb'],
  },
  mac: {
    category: 'public.app-category.utilities',
    icon: '_icons/icon.icns',
    target: ['dmg'],
    type: 'distribution',
    identity: 'Beijing MaximTop Technology Co,.Ltd. (963BX74UXU)',
    entitlements: "build/../entitlements.mac.plist",
    hardenedRuntime: true,
    extendInfo: {
      "NSMicrophoneUsageDescription": "请允许本程序访问您的麦克风",
      "NSCameraUsageDescription": "请允许本程序访问您的摄像头"
    }
  },
  win: {
    icon: '_icons/icon.ico',
    target: ['nsis'],
    publisherName: 'Beijing MaximTop Technology Co,.Ltd.',
    certificateFile: 'build/../DevCertDistribution.p12',
    certificatePassword: 'st234567.',
    signingHashAlgorithms: ['sha256'],
    rfc3161TimeStampServer: 'http://timestamp.digicert.com',
  },
  nsis: {
    "oneClick": false,
		"perMachine": true,
    "allowElevation": true,
    "allowToChangeInstallationDirectory": true,
    "createDesktopShortcut": true,
    "runAfterFinish": true,
    "artifactName": "${productName} ${version}.${os}.${ext}",
    "deleteAppDataOnUninstall": false,
    "installerIcon": "_icons/icon.ico",
    "uninstallerIcon": "_icons/icon.ico"
  },
}

module.exports = config