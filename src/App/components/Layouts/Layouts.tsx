import React, { memo } from 'react';
import { Container } from './style';

// import {} from './interfaces';
// import Dialogs from '../Dialogs';
import StartAppPage from '../StartAppPage';
// import AutorsPage from '../AutorsPage';
import TournamentPage from '../TournamentPage';
import FormAddSportsmanPage from '../FormAddSportsmanPage';

const Layouts: React.FC = memo(() => {
    return (
        <Container>
            {/* <Dialogs /> */}
            <StartAppPage name='start' />
            {/* <AutorsPage name='autors' /> */}
            <TournamentPage name='tournament' />
            <FormAddSportsmanPage name='form' />
        </Container>
    );
});
export default Layouts;
