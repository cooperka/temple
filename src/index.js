import path from 'path';
import { app, BrowserWindow, Tray, Menu, globalShortcut } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import { enableLiveReload } from 'electron-compile';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let tray;

const isDevMode = process.execPath.match(/[\\/]electron/);

if (isDevMode) enableLiveReload({ strategy: 'react-hmr' });

async function handleReady() {
  createTray();

  registerShortcut();
}

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 320,
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Open the Chrome DevTools.
  if (isDevMode) {
    await installExtension(REACT_DEVELOPER_TOOLS);
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    // Dereference the window object; usually you would store windows
    // in an array if your app supports multi windows.
    mainWindow = null;
  });
}

function createTray() {
  const iconPath = path.join(__dirname, 'images/icon.png');
  tray = new Tray(iconPath);

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Focus', click: focusWindow },
  ]);
  tray.setContextMenu(contextMenu);

  tray.setToolTip('Temple');
}

function registerShortcut() {
  globalShortcut.register('CmdOrCtrl+Alt+Shift+Space', focusWindow);
}

async function focusWindow() {
  if (mainWindow) {
    mainWindow.focus();
  } else {
    await createWindow();
  }
}

function handleAllClosed() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q.
  if (process.platform !== 'darwin') {
    app.quit();
  }
}

function handleActivate() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
}

app.on('ready', handleReady);

app.on('window-all-closed', handleAllClosed);

app.on('activate', handleActivate);
