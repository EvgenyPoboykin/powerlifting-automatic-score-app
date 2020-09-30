import styled from 'styled-components';
import { IContainer } from './interfaces';

export const Container = styled.div.attrs({ className: 'TTableItemTabName__container' })`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props: IContainer) => (props.nameField ? '#ed1c24' : '#fff')};
    opacity: 0.7;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }

    transition: all 300ms cubic-bezier(0.5, 0, 0, 1);
`;
