import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'TournamentTopbar__container' })`
    display: flex;
    width: 100%;
    min-height: 80px;
    padding: 0px;
    padding-top: 10px;
    transition: 0.4s ease-in-out;
`;
export const Content = styled.div.attrs({ className: 'TournamentTopbar__container--content' })`
    display: grid;
    grid-template-columns: 1fr 200px;
    width: 100%;
    color: #ed1c24;
    padding: 0px;
`;
