const path = require('path');

const electron = require('electron');

const { app } = electron;

const { CreateWin } = require(path.join(__dirname, './window.js'));

app.on('ready', () => {
    CreateWin(app);
});
