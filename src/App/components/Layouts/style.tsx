import styled from 'styled-components';
import { IContainerContent } from './interfaces';

export const Container = styled.div.attrs({ className: 'Layouts__container' })`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
`;
export const ContainerContent = styled.div.attrs({ className: 'Layouts__container--content' })`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    transform: ${(props: IContainerContent) => (props.disabled ? `translateY(100%)` : `translateY(0%)`)};
    transition: transform 300ms cubic-bezier(0.5, 0, 0, 1);
`;
