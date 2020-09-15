import styled from 'styled-components';
// import { IContainer } from './interfaces';

export const Container = styled.div.attrs({ className: 'App__container' })`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 30px 1fr 30px;

    width: 100%;
    height: 100%;
`;
