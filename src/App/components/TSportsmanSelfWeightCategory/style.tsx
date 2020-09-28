import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'TSportsmanSelfWeightCategory__container' })`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Content = styled.div.attrs({ className: 'TSportsmanSelfWeightCategory__container--content' })`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    pointer-events: all;

    opacity: 0.7;

    &:hover {
        opacity: 1;
    }

    transition: all 300ms cubic-bezier(0.5, 0, 0, 1);
`;
