import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'TTitle__container' })`
    width: 100%;
    height: 100%;
    cursor: pointer;
    pointer-events: all;

    &:hover {
        border: 1px solid #ed1c24;
    }
    transition: all 300ms cubic-bezier(0.5, 0, 0, 1);
`;
export const Content = styled.div.attrs({ className: 'TTitle__container--content' })`
    display: flex;
    width: 100%;
    height: 100%;
    color: rgb(187, 187, 187);
    justify-content: flex-start;
    text-align: left;
    font-size: 30px;
    font-weight: 600;
    padding: 0px;
`;
