import styled from 'styled-components';
import {} from './interfaces';
import ArrowDown from '../../../assets/images/angle-down.svg';

export const Container = styled.div.attrs({ className: 'TDisciplineClose__container' })`
    display: flex;
    width: 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
`;

export const Icon = styled.img.attrs({ className: 'TDisciplineClose__container--icon', src: ArrowDown })`
    width: auto;
    height: 10px;
    cursor: pointer;
    pointer-events: all;
`;
