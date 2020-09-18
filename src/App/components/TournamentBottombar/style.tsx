import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'TournamentBottombar__container' })`
    display: flex;
    width: 100%;
    height: 40px;
    transition: 0.4s ease-in-out;
    padding: 0px;
`;
export const ContainerFrame = styled.div.attrs({ className: 'TournamentBottombar__container--frame' })`
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-between;
    color: #ed1c24;
    padding: 0px;
`;
export const Bar = styled.div.attrs({ className: 'TournamentBottombar__container--bar' })`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0px;
`;
export const EmptyDiv = styled.div.attrs({ className: 'TournamentBottombar__container--empty-div' })`
    width: 100%;
    height: 40px;
`;
