import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'TDisciplineTry__container' })`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: #808080;
    background-color: rgba(207, 18, 24, 0);
    cursor: pointer;
    pointer-events: all;

    &:hover {
        color: #bbbbbb;
        background-color: rgba(0, 0, 0, 0.5);
        cursor: pointer;
    }
`;
