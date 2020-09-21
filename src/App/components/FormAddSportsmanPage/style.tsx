import styled from 'styled-components';
// import {IContainer} from "./interfaces";

export const Container = styled.div.attrs({ className: 'FormAddSportsmanPage__container' })`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const Content = styled.div.attrs({ className: 'FormAddSportsmanPage__container--content' })`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
export const Frame = styled.div.attrs({ className: 'FormAddSportsmanPage__container--frame' })`
    display: grid;
    grid-template-rows: minmax(60px, 70px) minmax(1fr, 10fr) minmax(55px, 60px);
    grid-template-columns: minmax(560px, 1120px);
    justify-items: center;
    align-items: center;
    grid-row-gap: 10px;
`;
