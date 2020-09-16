import styled from 'styled-components';
// import {IContainer} from "./interfaces";

export const Container = styled.div.attrs({ className: 'Dialogs__container' })`
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContainerBg = styled.div.attrs({ className: 'Dialogs__container--bg' })`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    border-bottom: 3px solid #cc1e23;
    z-index: -1;
`;
