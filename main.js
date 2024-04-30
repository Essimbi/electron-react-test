const { app, BrowserWindow, ipcMain } = require('electron/main')
const url = require('url')
const path = require('node:path')
const { isDev } = import('electron-is-dev');

const createWindow = () => {
  const win = new BrowserWindow({
    title: "LOBATIN",
    width: 1100,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      enableRemoteModule: true,
      allowRunningInsecureContent: true,
      // webSecurity: false,
      webSecurity: true,
      // Définir la CSP
      csp: {
        defaultSrc: "'self'",
        scriptSrc: "'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com",
        imgSrc: "'self' data:",
        styleSrc: "'self' 'unsafe-inline'",
        fontSrc: "'self' data:",
        objectSrc: "'none'"
      }
    }
  });

 //win.setMenu(null)


  // const startUrl = url.format({
  //   pathname: path.join(__dirname, 'index.html'),
  //   protocol: 'file'
  // });

  // const buildPath = path.join(__dirname, 'app', 'public', 'index.html');
  // win.loadFile(buildPath);
  // win.loadURL(isDev ? "http://localhost:3000" : `file:/${path.join(__dirname, "app/public/index.html")}`);

  // win.loadURL('http://localhost:3000')

  // win.loadURL(url.format({
  //   pathname: path.join(__dirname, 'app/build/index.html'), // Ajustez le chemin si nécessaire
  //   protocol: 'file',
  // }));

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
