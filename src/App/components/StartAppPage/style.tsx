import styled from 'styled-components';
import { IContent } from './interfaces';

export const Container = styled.div.attrs({ className: 'StartAppPage__container' })`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;
export const Content = styled.div.attrs({ className: 'StartAppPage__container--content' })`
    display: grid;
    grid-template-columns: ${(props: IContent) => props.grid && `${props.grid}`};
    grid-template-rows: minmax(450px, 1fr);
    max-height: 450px;
    justify-items: center;
    align-items: center;
`;
