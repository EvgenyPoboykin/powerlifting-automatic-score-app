import styled from 'styled-components';
import PLAS_logo from './images/plas.svg';
// import { IContainer } from './interfaces';

export const Container = styled.div.attrs({ className: 'StartAppMenu__container' })`
    display: grid;
    grid-template-rows: 2fr 2fr;
    align-items: center;
    justify-items: center;
    width: 300px;
`;
export const Logo = styled.img.attrs({ className: 'StartAppMenu__container--logo', src: PLAS_logo })`
    width: 250px;
    height: auto;
    padding-bottom: 30px;
`;
export const Form = styled.div.attrs({ className: 'StartAppMenu__container--form' })`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    height: auto;
`;
