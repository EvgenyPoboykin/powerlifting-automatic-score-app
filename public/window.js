const path = require('path');
const electron = require('electron');
const { ipc } = require('./electron/ipc');
const { BrowserWindow } = electron;

const Menu = electron.Menu;

exports.CreateWin = (app) => {
    let mainWindow;
    // определение мониторовб 0 - главный
    const displays = electron.screen.getAllDisplays();
    mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        minWidth: 1200,
        minHeight: 900,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false,
        },
    });

    ipc(mainWindow, app);
    // выключить при сборки ----------------------------------------------------------- !
    // инструмент разработчика
    const isDev = process.env.ELECTRON_DEVELOPMENT_MODE;

    //{ mode: 'undocked' }
    isDev ? mainWindow.webContents.openDevTools({ mode: 'undocked' }) : null;

    const localhost = 'http://localhost:3000/';
    const build = `file://${path.join(__dirname, '../build/index.html')}`;

    mainWindow.loadURL(isDev ? localhost : build);

    const template = [];
    const newMenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(newMenu);

    return mainWindow;
};
