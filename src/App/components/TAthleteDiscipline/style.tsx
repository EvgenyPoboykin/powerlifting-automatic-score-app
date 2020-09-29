import styled from 'styled-components';
import { IContainer } from './interfaces';

export const Container = styled.div.attrs({ className: 'TDiscipline__container' })`
    display: grid;
    grid-template-columns: ${(props: IContainer) => (props.tabs ? `repeat(${props.tabs}, 1fr)` : 'repeat(3, 1fr)')};
    align-items: center;
    height: 100%;
`;
