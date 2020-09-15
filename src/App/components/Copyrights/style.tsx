import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'Copyrights__container' })`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    text-transform: capitalize;
    width: 100%;
    bottom: 0;
    height: 30px;
    color: #808080;
    font-size: 12px;
    font-weight: 600;
    padding: 0px;
    z-index: 10;
    border-top: 1px solid #222;
`;
export const ContainerText = styled.div.attrs({ className: 'Copyrights__container--text' })`
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    height: 100%;
    color: #808080;
    font-size: 12px;
    font-weight: 400;
    padding: 0px;
`;
