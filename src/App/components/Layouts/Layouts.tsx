import React, { memo, useContext } from 'react';
import { Container, ContainerContent } from './style';
import Dialogs from '../Dialogs';
import StartAppPage from '../StartAppPage';
import TournamentPage from '../TournamentPage';
import FormAddSportsmanPage from '../FormAddSportsmanPage';
import { ContextApp } from '../../state';

const Layouts: React.FC = memo(() => {
    const { settings } = useContext(ContextApp);
    return (
        <Container>
            <Dialogs name='dialog' />
            <ContainerContent disabled={settings.dialog}>
                <StartAppPage name='start' />
                <TournamentPage name='tournament' />
                <FormAddSportsmanPage name='form' />
            </ContainerContent>
        </Container>
    );
});
export default Layouts;
