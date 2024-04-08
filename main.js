const { app, BrowserWindow, ipcMain } = require('electron/main')
const url = require('url')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    title: "LOBATIN",
    width: 1100,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      // nodeIntegration: true
    }
  }) ;

  win.setMenu(null)


  const startUrl = url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file'
  }) ;

  // win.loadFile('index.html')

  win.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
