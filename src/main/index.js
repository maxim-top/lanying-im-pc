import { app, BrowserWindow, Menu, Tray } from 'electron'
import { productName } from '../../package.json'

var os = require("os");
var platform = os.platform();

// set app name
app.setName(productName)

// disable electron warning
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'

const gotTheLock = app.requestSingleInstanceLock()
const isDev = process.env.NODE_ENV === 'development'
let mainWindow
let willQuitApp = false;
let tray = null

// only allow single instance of application
if (!isDev) {
  if (gotTheLock) {
    app.on('second-instance', () => {
      // Someone tried to run a second instance, we should focus our window.
      if (mainWindow && mainWindow.isMinimized()) {
        mainWindow.restore()
      }
      mainWindow.focus()
    })
  } else {
    app.quit()
    process.exit(0)
  }
} else {
  require('electron-debug')({
    showDevTools: !(process.env.RENDERER_REMOTE_DEBUGGING === 'true'),
  })
}

async function installDevTools () {
  try {
    /* eslint-disable */
    require('devtron').install()
    require('vue-devtools').install()
    /* eslint-enable */
  } catch (err) {
    console.log(err)
  }
}

function createWindow () {
  /**
   * Initial window options
   */

  var width = 980
  var height = 646
  if (platform != "darwin") {
    width = 980
    height = 670
  }

  mainWindow = new BrowserWindow({
    backgroundColor: '#fff',
    width: width,
    height: height,
    minWidth: width,
    minHeight: height,
    //useContentSize: true,
    fullscreenable: false,
    //maximizable: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: false,
      contextIsolation: false,
      webSecurity: false,
    },
    show: false,
  })

  if (platform != "darwin") {
    if (isDev) {
      tray = new Tray(`${__dirname}/../../_icons/icon.ico`)
    } else {
      tray = new Tray(`${__dirname}/../_icons/icon.ico`)
    }
    tray.on('click', () => {
      mainWindow.show()
      mainWindow.focus()
    })
  }

  // eslint-disable-next-line
  setMenu()

  // load root file/url
  if (isDev) {
    mainWindow.loadURL('http://localhost:9080')
  } else {
    mainWindow.loadFile(`${__dirname}/index.html`)

    // @ts-ignore
    global.__static = require('path')
      .join(__dirname, '/static')
      .replace(/\\/g, '\\\\')
  }

  // Show when loaded
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    mainWindow.focus()
  })

  mainWindow.on('close', e => {
    if (willQuitApp) {
      mainWindow = null
    } else {
      e.preventDefault();
      mainWindow.hide();
    }
  })
}

app.on('ready', () => {
    createWindow()

  //if (isDev) {
    installDevTools()
  //}

  // mainWindow.webContents.openDevTools()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  } else {
    mainWindow.show()
    mainWindow.focus()
  }
})

app.on('before-quit', () => {
  willQuitApp = true
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */

const sendMenuEvent = async data => {
  mainWindow.webContents.send('change-view', data)
}

const template = [
  {
    label: app.getName(),
    submenu: [
      {
        label: 'Home',
        accelerator: 'CommandOrControl+H',
        click () {
          sendMenuEvent({ route: '/' })
        },
      },
      { type: 'separator' },
      { role: 'minimize' },
      { role: 'togglefullscreen' },
      { type: 'separator' },
      { role: 'quit', accelerator: 'Alt+F4' },
    ],
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Get Help',
        role: 'help',
        accelerator: 'F1',
        click () {
          sendMenuEvent({ route: '/help' })
        },
      },
      {
        label: 'About',
        role: 'about',
        accelerator: 'CommandOrControl+A',
        click () {
          sendMenuEvent({ route: '/about' })
        },
      },
    ],
  },
]

function setMenu () {
  if (process.platform === 'darwin') {
    template.unshift({
      label: app.getName(),
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' },
      ],
    })

    // @ts-ignore
    template.push({
      role: 'window',
    })

    // @ts-ignore
    template.push({
      role: 'help',
    })

    // @ts-ignore
    template.push({ role: 'services' })
  }

  // @ts-ignore
  const menu = Menu.buildFromTemplate(template)
  //Menu.setApplicationMenu(menu)
  //Menu.setApplicationMenu(null)
}
