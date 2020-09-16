import styled from 'styled-components';
import { IContainer, ITextBtn } from './interfaces';

export const Container = styled.div.attrs({ className: 'Button__container' })`
    width: ${(props: IContainer) => (props.width ? `${props.width}px` : '100%')};
    height: 60px;
    padding-top: 15px;
`;
export const TextBtn = styled.div.attrs({ className: 'Button__container--text-btn' })`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    color: aliceblue;
    border: ${(props: ITextBtn) => (props.mode === 'red' ? '0px solid red' : '1px solid #808080')};
    ${(props: ITextBtn) => props.mode === 'red' && 'background-color: #cc1e23;'};
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    list-style: none;
    pointer-events: all;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;

    &:hover {
        border: 0px solid #808080;
        background-color: #ed1c24;
        list-style: none;
    }
    transition: all 300ms cubic-bezier(0.5, 0, 0, 1);
`;
