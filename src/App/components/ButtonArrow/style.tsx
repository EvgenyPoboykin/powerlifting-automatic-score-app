import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'ButtonArrow__container' })`
    width: 40px;
    height: 40px;
    pointer-events: all;
    opacity: 0.7;
    padding: 10px;
    &:hover {
        opacity: 1;
    }

    cursor: pointer;
    transition: all 300ms cubic-bezier(0.5, 0, 0, 1);
`;
export const Icon = styled.img.attrs({ className: 'ButtonArrow__container--image-icon' })`
    width: 100%;
    height: 100%;
`;
