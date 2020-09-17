import styled from 'styled-components';
// import {IContainer} from "./interfaces";

export const Container = styled.div.attrs({ className: 'StartAppListEvents__container' })`
    width: 450px;
    height: 370px;
    overflow: auto;
    pointer-events: all;

    &::-webkit-scrollbar {
        display: none;
    }
`;
