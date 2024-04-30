const { app, BrowserWindow, ipcMain } = require('electron/main')
// const path = require('node:path')

require('@electron/remote/main').initialize()
const path = require('node:path')
const { isDev } = import('electron-is-dev');

const createWindow = () => {
  const win = new BrowserWindow({
    title: "LOBATIN",
    width: 1100,
    height: 700,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'),
      // nodeIntegration: true,
      enableRemoteModule:  true
    }
  });

  // win.loadURL('http://localhost:3000')
  win.loadURL(isDev ? "http://localhost:3000" : `file:/${path.join(__dirname, './builder/index.html')}`);

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
