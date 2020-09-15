import React, { memo } from 'react';
import { Container } from './style';

// import {} from './interfaces';
import Dialogs from '../Dialogs';
import StartAppPage from '../StartAppPage';
import TournamentPage from '../TournamentPage';
import FormAddSportsmanPage from '../FormAddSportsmanPage';

const Layouts: React.FC = memo(() => {
    return (
        <Container>
            <Dialogs name='dialog' />
            <StartAppPage name='start' />
            <TournamentPage name='tournament' />
            <FormAddSportsmanPage name='form' />
        </Container>
    );
});
export default Layouts;
