import { useContext, useEffect } from 'react';
import { ContextApp } from '../../state';
const { ipcRenderer } = window.require('electron');

const TopBar_Logic = () => {
    const { GoDialog, ChangeLang, event, eventlist, settings, focusinput } = useContext(ContextApp);

    const SaveDataInLocalStorage = () => {
        return new Promise((resolve) => {
            localStorage.setItem('event', JSON.stringify(event));
            localStorage.setItem('eventslist', JSON.stringify(eventlist));
            localStorage.setItem('settingsapp', JSON.stringify(settings));
            resolve();
        });
    };

    const onClickClose = () => {
        SaveDataInLocalStorage().then(() => ipcRenderer.send('close'));
    };

    const ShortCut = (e: KeyboardEvent) => {
        e.preventDefault();

        if ((e.ctrlKey || e.metaKey) && e.key === 'Q') {
            SaveDataInLocalStorage().then(() => ipcRenderer.send('close'));
        }
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

    useEffect(() => {
        if (!focusinput) {
            window.addEventListener('keydown', ShortCut);
        }

        return () => {
            if (!focusinput) {
                window.removeEventListener('keydown', ShortCut);
            }
        };
    });

    return { onClickClose, onClickMaximize, onClickMinimize, onDoubleClick, GoDialog, ChangeLang, settings };
};

export default TopBar_Logic;
