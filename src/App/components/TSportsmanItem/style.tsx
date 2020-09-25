import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'TournamentSportsmanItem__container' })`
    display: flex;
    justify-content: space-between;
    height: 43px;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    color: #ed1c24;
    text-transform: uppercase;
    padding: 0px;
    width: 100%;
`;
export const User = styled.div.attrs({ className: 'TournamentSportsmanItem__container--user' })`
    display: grid;
    grid-template-columns: minmax(250px, 1fr);
    align-items: center;
    justify-items: start;
    height: 100%;
    position: relative;
`;
export const UserName = styled.div.attrs({ className: 'TournamentSportsmanItem__container--user-name' })`
    display: flex;
    align-items: center;
    padding-left: 30px;
`;
export const Data = styled.div.attrs({ className: 'TournamentSportsmanItem__container--data' })``;
