import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'FForm__container' })`
    display: grid;
    grid-template-rows: minmax(300px, 500px);
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    border-bottom: 1px solid #474747;
`;
