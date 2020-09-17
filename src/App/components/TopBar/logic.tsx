import { useContext } from 'react';
import { ContextApp } from '../../state';
const { ipcRenderer } = window.require('electron');

const TopBar_Logic = () => {
    const { GoDialog } = useContext(ContextApp);

    const onClickClose = () => {
        ipcRenderer.send('close');
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

    return { onClickClose, onClickMaximize, onClickMinimize, onDoubleClick, GoDialog };
};

export default TopBar_Logic;
