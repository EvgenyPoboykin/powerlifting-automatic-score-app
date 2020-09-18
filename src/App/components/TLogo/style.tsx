import styled from 'styled-components';
import plas_logo from './images/plas.svg';

export const Container = styled.div.attrs({ className: 'TLogo__container' })`
    width: 100%;
    height: 100%;
    cursor: pointer;
    pointer-events: all;

    &:hover {
        border: 1px solid #ed1c24;
    }

    transition: all 300ms cubic-bezier(0.5, 0, 0, 1);
`;
export const Content = styled.div.attrs({ className: 'TLogo__container--content' })`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
export const Logo = styled.img.attrs({ className: 'TLogo__container--content-logo', src: plas_logo })`
    height: 60px;
    width: 200px;
`;
