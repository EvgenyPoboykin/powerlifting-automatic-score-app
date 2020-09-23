import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'FFormLeftSection__container' })`
    display: grid;
    font-size: 12px;
    grid-template-rows: repeat(8, 50px);
    width: 100%;
    grid-gap: 10px;
`;

export const Content = styled.div.attrs({ className: 'FFormLeftSection__container--content' })`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
`;
