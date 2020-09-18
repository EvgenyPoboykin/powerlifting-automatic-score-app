import styled from 'styled-components';
import { IButton } from './interfaces';

export const Container = styled.div.attrs({ className: 'TAddColumnBtn__container' })`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    padding-left: 5px;
    padding-right: 5px;

    &:nth-child(3) {
        width: 180px;
    }
`;
export const Button = styled.button.attrs({ className: 'TAddColumnBtn__container--button' })`
    width: 100%;
    min-width: 60px;
    height: 30px;
    font-size: 10px;
    font-weight: 500;
    background-color: rgba(0, 0, 0, 0.35);
    color: #a4a4a4;
    border: 1px solid #808080;
    cursor: pointer;
    border-radius: 2px;
    text-transform: uppercase;

    pointer-events: ${(props: IButton) => (props.disabled ? 'all' : 'none')};
    opacity: ${(props: IButton) => (props.disabled ? '0.7' : '1')};

    &:hover {
        color: #d3d3d3;
        border: 1px solid #d3d3d3;
    }
`;
