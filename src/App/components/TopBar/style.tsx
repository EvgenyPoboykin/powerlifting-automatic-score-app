import styled from 'styled-components';
import { IControl } from './interfaces';

export const Container = styled.div.attrs({ className: 'TopBar__container' })`
    display: grid;
    width: 100%;
    color: #808080;
    padding: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    height: 30px;
    grid-template-columns: 70px 1fr 70px;

    border-bottom: 1px solid #222;
`;
export const ContainerControls = styled.div.attrs({ className: 'TopBar__container--controls' })`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    padding-left: 15px;
`;
export const ContainerName = styled.div.attrs({ className: 'TopBar__container--container-name' })`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    -webkit-app-region: drag;
    user-select: none;
    pointer-events: all;
`;
export const Name = styled.div.attrs({ className: 'TopBar__container--name' })`
    font-size: 12px;
    font-weight: 400;
`;
export const ContainerSettings = styled.div.attrs({ className: 'TopBar__container--settings' })`
    display: grid;
    width: 100%;
`;
export const Control = styled.div.attrs({ className: 'TopBar__container--control' })`
    background-color: ${(props: IControl) => props.colorBtn};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    pointer-events: all;
    opacity: 0.7;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }

    transition: all 200ms cubic-bezier(0.5, 0, 0, 1);
`;
