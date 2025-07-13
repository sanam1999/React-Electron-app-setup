import { ipcMain } from 'electron';

export function ipcMainHandle(key, handler) {
  ipcMain.handle(key, (event) => {
    handler();
  });
}
