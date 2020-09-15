import React, { memo, useContext } from 'react';
import Page from '../Page';
import { Container } from './style';
import { ITournamentPage } from './interfaces';
import { ContextApp } from '../../state';

const TournamentPage: React.FC<ITournamentPage> = memo(({ name }) => {
    const { state, GoToStartFromTournament, GoToForm } = useContext(ContextApp);

    return (
        <Page trigger={state.settingsApp[name]} inpoint='0%' outpoint='100%'>
            <Container>
                TournamentPage
                <button onClick={GoToStartFromTournament} style={{ height: '30px', pointerEvents: 'all' }}>
                    go in start
                </button>
                <button onClick={GoToForm} style={{ height: '30px', pointerEvents: 'all' }}>
                    go in form
                </button>
            </Container>
        </Page>
    );
});
export default TournamentPage;
