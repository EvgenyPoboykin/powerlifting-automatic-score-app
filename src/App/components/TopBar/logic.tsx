import { useContext } from 'react';
import { ContextApp } from '../../state';
const { ipcRenderer } = window.require('electron');

const TopBar_Logic = () => {
    const { state } = useContext(ContextApp);

    const SaveStateInLocalstorage = () => {
        return new Promise((resolve) => {
            localStorage.setItem('settingsApp', JSON.stringify(state.settingsApp));
            localStorage.setItem('eventsList', JSON.stringify(state.eventsList));
            localStorage.setItem('sportsmanList', JSON.stringify(state.sportsmanList));
            resolve();
        });
    };

    const onClickClose = () => {
        SaveStateInLocalstorage().then(() => {
            ipcRenderer.send('close');
        });
    };

    const onClickMinimize = () => {
        ipcRenderer.send('minimize');
    };
    const onClickMaximize = () => {
        ipcRenderer.send('maximize');
    };
    const onDoubleClick = () => {
        ipcRenderer.send('double-click-name');
    };

    return { onClickClose, onClickMaximize, onClickMinimize, onDoubleClick };
};

export default TopBar_Logic;
