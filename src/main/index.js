import { app, BrowserWindow, Menu, Tray, ipcMain, systemPreferences, shell, Notification, nativeImage } from 'electron'
import { productName } from '../../package.json'

var os = require("os");
var platform = os.platform();

// set app name
if (platform === "linux") {
  app.setName("lanying IM")
} else {
  app.setName(productName)
}

// disable electron warning
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'

const gotTheLock = app.requestSingleInstanceLock()
const isDev = process.env.NODE_ENV === 'development'
//let mainWindow
let willQuitApp = false;
let isFirstWindow = true
let isMinimized = false;
let windows = []
let lastFocusedWindow = null

// only allow single instance of application
/*
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
*/

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

  let mainWindow = new BrowserWindow({
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
      partition: isFirstWindow ? 'persist:userData' : String(+new Date()),
    },
    show: false,
    icon: platform === "linux" ? `${__dirname}/../_icons/icon.png` : `${__dirname}/../_icons/icon.ico`
  })
  if (isFirstWindow) {
    isFirstWindow = false
  }

  windows.push(mainWindow)

  mainWindow.on('focus', () => {
    lastFocusedWindow = mainWindow
  })
  
  let tray = null;
  if (isDev) {
    tray = new Tray(`${__dirname}/../../_icons/icon.ico`)
  } else {
    if (platform === "linux") {
      tray = new Tray(`${__dirname}/../_icons/icon.png`)
    } else if (platform === "darwin") {
      tray = new Tray(`${__dirname}/../_icons/iconTemplate@2x.png`)
    } else {
      tray = new Tray(`${__dirname}/../_icons/icon.ico`)
    }
  }
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '蓝莺 IM', type: 'normal',
      click: () => { 
        mainWindow.show()
        mainWindow.focus()
      }
    },
    { type: 'separator' },
    { label: ' 退出 ', type: 'normal', 
      click: () => { 
        willQuitApp = true;       // 标记应用要退出
        if (mainWindow) mainWindow.close();  // 会触发 'close' 事件
        if (tray) {
          tray.removeAllListeners();
          tray.destroy();
          tray = null;
        }
      }
    }
  ]);
  tray.window = mainWindow;
  tray.setToolTip('蓝莺 IM');
  tray.on('click', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore(); // 如果最小化就还原
      mainWindow.show();   // 显示窗口
      mainWindow.focus();  // 获取焦点
    }
  })
  tray.on('right-click', () => {
    tray.popUpContextMenu(contextMenu);
  })
  tray.on('double-click', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore(); // 如果最小化就还原
      mainWindow.show();   // 显示窗口
      mainWindow.focus();  // 获取焦点
    }
  })
  tray.on('balloon-click', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore(); // 如果最小化就还原
      mainWindow.show();   // 显示窗口
      mainWindow.focus();  // 获取焦点
    }
  });

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

  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (!url.endsWith('/app/dist/index.html')) {
      event.preventDefault();
      shell.openExternal(url);
    }
  })

  mainWindow.webContents.setWindowOpenHandler((data) => {
    if (data.url && !data.url.endsWith('/app/dist/index.html')) {
      shell.openExternal(data.url)
      return {
        action: 'deny'
      }
    }
  })

  // Show when loaded
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    mainWindow.focus()
  })

  mainWindow.on('minimize', () => {
    isMinimized = true;
  });
  mainWindow.on('show', () => {
    isMinimized = false;
  });

  mainWindow.on('close', e => {
    if (willQuitApp) {
      // 从 windows 数组中移除当前窗口
      const index = windows.indexOf(mainWindow)
      if (index > -1) windows.splice(index, 1)

      // 如果 lastFocusedWindow 是当前窗口，指向剩余窗口的最后一个
      if (lastFocusedWindow === mainWindow) {
        lastFocusedWindow = windows.length ? windows[windows.length - 1] : null
      }
      // 安全清理对应的 Tray
      if (tray) {
        tray.removeAllListeners(); // 移除所有事件监听，避免空指针
        tray.destroy();
        tray = null;
      }
      mainWindow = null
    } else {
      e.preventDefault();
      mainWindow.hide();
    }
  })
}

if (platform != "linux") {
  ipcMain.on("getMediaAccessStatus", () => {
    let microphoneStatus = systemPreferences.getMediaAccessStatus('microphone')
    if (microphoneStatus !== 'granted') {
      systemPreferences.askForMediaAccess('microphone')
    }
    let cameraStatus = systemPreferences.getMediaAccessStatus('camera')
    if (cameraStatus !== 'granted') {
      systemPreferences.askForMediaAccess('camera')
    }
  })
}

app.on('ready', () => {
    createWindow();

    if (platform === "win32") {
      app.setAppUserModelId(productName);
    }

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
  if (lastFocusedWindow) {
    if (lastFocusedWindow.isMinimized()) {
      lastFocusedWindow.restore()
    }
    lastFocusedWindow.show()
    lastFocusedWindow.focus()
  } else {
    createWindow()
  }
})

app.on('second-instance', () => {
  if (lastFocusedWindow) {
    if (lastFocusedWindow.isMinimized()) {
      lastFocusedWindow.restore()
    }
    lastFocusedWindow.show()
    lastFocusedWindow.focus()
  } else {
    createWindow()
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
  //mainWindow.webContents.send('change-view', data)
}

const template = [
  {
    label: productName,
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
    label: 'Window',
    submenu: [
      {
        label: 'new Window',
        click: async () => {
          createWindow()
        }
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'delete' },
      { type: 'separator' },
      { role: 'selectAll' }
    ],
  },
  {
    role: 'help',
    submenu: [
      {
        role: 'toggleDevTools'
      },
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

  /*
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
      role: 'help',
    })

    // @ts-ignore
    template.push({ role: 'services' })
  }
  */

  // @ts-ignore
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}
