const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    resizable: false
  });

  mainWindow.loadFile("src/menu.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

//Remove a BUG of Vsync
app.disableHardwareAcceleration();

ipcMain.on("load-game", () => {
  // Aqui você carrega o conteúdo do game.html
  mainWindow.loadFile("src/game.html");
});