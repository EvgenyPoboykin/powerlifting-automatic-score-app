import styled from 'styled-components';
import { IControl } from './interfaces';

export const Container = styled.div.attrs({ className: 'TopBar__container' })`
    display: grid;
    width: 100%;
    color: #808080;
    padding: 0px;
    background-color: rgba(0, 0, 0, 1);
    z-index: 100;
    height: 30px;
    grid-template-columns: 100px 1fr 100px;

    border-bottom: 1px solid #222;
`;
export const ContainerControls = styled.div.attrs({ className: 'TopBar__container--controls' })`
    display: flex;

    padding-left: 15px;
`;
export const WrapperControls = styled.div.attrs({ className: 'TopBar__container--wrapper-controls' })`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    width: 70px;
    height: 100%;
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
    display: flex;
    width: 100%;
    align-items: center;
`;
export const AutorsLink = styled.div.attrs({ className: 'TopBar__container--autors' })`
    font-size: 12px;
    font-weight: 400;
    pointer-events: all;
    cursor: pointer;
    opacity: 0.7;
    padding: 5px;

    &:hover {
        opacity: 1;
    }

    transition: all 200ms cubic-bezier(0.5, 0, 0, 1);
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
