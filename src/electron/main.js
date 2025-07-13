import { app, BrowserWindow } from 'electron';
import { getPreloadPath, getUIPath } from './pathResolver.js';
import { isDev } from './util.js';
app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
    },
  });

  if (isDev()) {
    mainWindow.loadURL('http://localhost:2000');
  } else {
    mainWindow.loadFile(getUIPath());
  }
});
