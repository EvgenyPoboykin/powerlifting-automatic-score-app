import styled from 'styled-components';
import { IContainer } from './interfaces';

export const Container = styled.input.attrs({ className: 'Input__container' })`
    display: ${(props: IContainer) => (props.disable ? 'none' : 'block')};
    background-color: rgba(0, 0, 0, 0);
    border: 0px;
    border-bottom: 1px solid #808080;
    color: #ed1c24;
    padding: 10px 12px;
    pointer-events: all;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    user-select: text;
    width: 100%;
    height: 35px;

    &:hover {
        color: #ed1c24;
        border-bottom: 1px solid rgb(255, 0, 8);
    }
`;
