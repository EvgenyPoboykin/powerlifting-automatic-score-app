import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'TournamentSportsmanList__container' })`
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;
export const Wrapper = styled.div.attrs({ className: 'TournamentSportsmanList__container--wrapper' })`
    width: 100%;
    height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;
