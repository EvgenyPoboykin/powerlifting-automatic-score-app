import React, { memo } from 'react';
import { Container } from './style';
// import {} from './interfaces';
import TAddColumn from '../TAddColumn';

const TournamentMenu: React.FC = memo(() => {
    return (
        <Container>
            <TAddColumn />
        </Container>
    );
});
export default TournamentMenu;
