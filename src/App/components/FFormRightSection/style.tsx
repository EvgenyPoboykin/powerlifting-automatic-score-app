import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'FFormRightSection__container' })`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 50px);
    justify-items: center;
    align-items: center;
    grid-gap: 10px;
`;
export const Content = styled.div.attrs({ className: 'FFormRightSection__container--content' })`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    height: 100%;
    justify-items: start;
    align-items: center;
`;
