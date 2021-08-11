const { productName } = require('../package.json')

const config = {
  appId: 'com.maxim.app',
  copyright: 'Copyright ©2021 MaxIM.Top',
  productName,
  directories: {
    output: 'build/',
  },
  files: [
    '_icons/icon.*',
    '!**/node_modules/**/*',
    'dist/**/*',
    'src/data/**/*',
    "package.json"
  ],
  "asar": false,
	"asarUnpack": [
		"./app/dist",
	],
  dmg: {
    internetEnabled: false,
    sign: false,
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
    icon: '_icons/icon.png',
    target: ['deb', 'snap', 'AppImage'],
  },
  mac: {
    category: 'public.app-category.utilities',
    icon: '_icons/icon.icns',
    target: ['dmg'],
    type: 'distribution',
  },
  win: {
    icon: '_icons/icon.ico',
    target: ['nsis'],
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