import styled from 'styled-components';
// import {IContainer} from "./interfaces";

export const Container = styled.div.attrs({ className: 'AutorsPage__container' })``;
export const ContainerBg = styled.div.attrs({ className: 'AutorsPage__container--bg' })`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    border-bottom: 3px solid #cc1e23;
    z-index: -1;
`;
