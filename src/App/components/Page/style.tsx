import styled from 'styled-components';
import { IContainer } from './interfaces';

export const Container = styled.div.attrs({ className: 'Page__container' })`
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    z-index: ${(props: IContainer) => (props.indexZ ? props.indexZ : 0)};
    transform: ${(props: IContainer) => (props.trigger ? `translateY(${props.inpoint})` : `translateY(${props.outpoint})`)};
    transition: transform 300ms cubic-bezier(0.5, 0, 0, 1);
`;
