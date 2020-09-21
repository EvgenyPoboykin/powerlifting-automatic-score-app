import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'FBottomBtns__container' })`
    display: grid;
    grid-template-columns: minmax(500px, 1fr);
    grid-template-rows: minmax(60px, 1fr);
    justify-items: center;
    align-items: center;
`;
export const Content = styled.div.attrs({ className: 'FBottomBtns__container--content' })`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
`;
