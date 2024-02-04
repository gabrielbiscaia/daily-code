const { contextBridge, ipcRenderer } = require('electron/renderer');

contextBridge.exposeInMainWorld('electronAPI', {
  startGame: () => {
    ipcRenderer.send('start-game');
  },
});
