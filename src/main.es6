import app from 'app';
import BrowserWindow from 'browser-window';
import crashReporter from 'crash-reporter';

let mainWindow = null;

const main = () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  mainWindow.loadUrl(`file://${__dirname}/index.html#/`);
  mainWindow.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('window-on-closed', () => {
  if (process.platform !== 'darwin') return app.quit();
});

app.on('ready', main);
