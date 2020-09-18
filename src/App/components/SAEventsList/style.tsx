import styled from 'styled-components';
// import {IContainer} from "./interfaces";

export const Container = styled.div.attrs({ className: 'StartAppListEvents__container' })`
    width: 450px;
    height: 370px;
    overflow: auto;
    pointer-events: all;
    border-left: 1px solid #808080;
    border-right: 1px solid #808080;
    padding: 10px;

    &::-webkit-scrollbar {
        display: none;
    }
`;
