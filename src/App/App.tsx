import React, { memo } from 'react';
import { ProviderApp } from './state';
import App_Logic from './logic';
import { Container } from './style';
import {} from './interfaces';
import { TopBar, Layouts, Copyrights } from './components';

const App: React.FC = memo(() => {
    const {
        state,
        settings,
        languages,
        focusinput,
        SetFocusInput,
        GoToTournament,
        GoToStartFromTournament,
        GoToForm,
        GoToTournamentFromForm,
        GoDialog,
        onClickEvent,
        CreateEventAndGoTournament,
        onClickDeleteEvent,
        ChangeLang,
    } = App_Logic();
    console.log(state, settings, focusinput);
    return (
        <ProviderApp
            value={{
                state,
                settings,
                languages,
                focusinput,
                SetFocusInput,
                GoToTournament,
                GoToStartFromTournament,
                GoToForm,
                GoToTournamentFromForm,
                GoDialog,
                onClickEvent,
                CreateEventAndGoTournament,
                onClickDeleteEvent,
                ChangeLang,
            }}
        >
            <Container>
                <TopBar />
                <Layouts />
                <Copyrights />
            </Container>
        </ProviderApp>
    );
});
export default App;
