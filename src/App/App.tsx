import React, { memo } from 'react';
import { ProviderApp } from './state';
import App_Logic from './logic';
import { Container } from './style';
import {} from './interfaces';
import { TopBar, Layouts, Copyrights } from './components';

const App: React.FC = memo(() => {
    const { state, GoToTournament, GoToStartFromTournament, GoToForm, GoToTournamentFromForm } = App_Logic();
    console.log(state);
    return (
        <ProviderApp value={{ state, GoToTournament, GoToStartFromTournament, GoToForm, GoToTournamentFromForm }}>
            <Container>
                <TopBar />
                <Layouts />
                <Copyrights />
            </Container>
        </ProviderApp>
    );
});
export default App;
