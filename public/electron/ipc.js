const { ipcMain, globalShortcut } = require('electron');

exports.ipc = (win, app) => {
    globalShortcut.register('CommandOrControl+Q', () => {
        app.quit();
    });

    app.on('will-quit', () => {
        globalShortcut.unregisterAll();
    });

    app.on('before-quit', () => {
        globalShortcut.unregisterAll();

        if (win) {
            win.removeAllListeners('close');
            win.close();
        }
    });

    ipcMain.on('close', (e) => {
        if (!app.isQuiting) {
            e.preventDefault();
            win.hide();
        }

        return false;
    });

    app.on('activate', () => {
        win.show();
    });

    ipcMain.on('minimize', (e) => {
        win.minimize();
    });

    ipcMain.on('maximize', (e) => {
        win.maximize();
    });

    ipcMain.on('double-click-name', (e) => {
        e.preventDefault();
        win.isMaximized() ? win.unmaximize() : win.maximize();
    });

    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
};
