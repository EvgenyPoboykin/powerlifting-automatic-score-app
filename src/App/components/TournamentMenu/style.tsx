import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'TournamentMenu__container' })`
    display: grid;
    grid-template-columns: 250px 250px 450px;
    grid-row-gap: 10px;
    height: 40px;
    width: 100%;
    padding-top: 10px;
    z-index: 1;
`;
