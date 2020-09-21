import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'FRadioBtns__container' })`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    height: 60px;
    border-bottom: 1px solid #474747;
`;
export const Content = styled.div.attrs({ className: 'FRadioBtns__container--content' })`
    display: grid;
    grid-template-columns: repeat(2, minmax(50px, 150px));
    height: 100%;
    justify-items: center;
`;
