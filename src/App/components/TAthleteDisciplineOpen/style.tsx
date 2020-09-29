import styled from 'styled-components';
import {} from './interfaces';
import ArrowRight from '../../../assets/images/angle-right.svg';

export const Container = styled.div.attrs({ className: 'TDisciplineOpen__container' })`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    height: 100%;
    color: #808080;
    cursor: pointer;
    position: relative;
`;
export const Icon = styled.img.attrs({ className: 'TDisciplineOpen__container--icon', src: ArrowRight })`
    position: absolute;
    width: 20px;
    height: 15px;
    left: 0;
    padding-left: 10px;
    cursor: pointer;
    fill: #d8d8d8;
    pointer-events: all;

    opacity: 0.7;
    &:hover {
        opacity: 1;
    }
    transition: all 300ms cubic-bezier(0.5, 0, 0, 1);
`;
export const Try = styled.div.attrs({ className: 'TDisciplineOpen__container--try-1' })`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: #808080;
    background-color: rgba(207, 18, 24, 0);
    cursor: pointer;
    &:hover {
        color: #bbbbbb;
        background-color: rgba(0, 0, 0, 0.5);
        cursor: pointer;
    }
    pointer-events: all;
`;
