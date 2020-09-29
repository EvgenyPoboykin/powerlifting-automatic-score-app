import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'TSportsmanAgeCategory__container' })`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Icon = styled.img.attrs({ className: 'TSportsmanAgeCategory__container--icon' })`
    width: 30px;
    height: 30px;
    opacity: 0.7;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }

    transition: all 300ms cubic-bezier(0.5, 0, 0, 1);
`;
