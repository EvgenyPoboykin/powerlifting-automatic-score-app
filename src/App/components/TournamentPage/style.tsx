import styled from 'styled-components';
// import {IContainer} from "./interfaces";

export const Container = styled.div.attrs({ className: 'TournamentPage__container' })`
    height: 100%;
    width: 100%;
    padding: 40px 50px 60px 50px;
`;
export const ContentPage = styled.div.attrs({ className: 'TournamentPage__container--content-page' })`
    display: grid;
    grid-template-rows: minmax(50px, 1fr) 40px 40px minmax(300px, 10fr) 60px;
    grid-row-gap: 10px;
    height: 100%;
`;
export const BtnWrapper = styled.div.attrs({ className: 'TournamentPage__container--btn-wrapper' })`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;
