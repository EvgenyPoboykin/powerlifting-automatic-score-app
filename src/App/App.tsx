import React, { memo } from 'react';
import { ProviderApp } from './state';
import App_Logic from './logic';
import { Container } from './style';
import {} from './interfaces';
import { TopBar, Layouts, Copyrights } from './components';

const App: React.FC = memo(() => {
    const {
        event,
        eventlist,
        sportsman,
        settings,
        languages,
        focusinput,
        SAInputRef,
        SetSportsman,
        SetFocusinput,
        GoToTournament,
        GoToStartFromTournament,
        GoToForm,
        GoToTournamentFromForm,
        GoDialog,
        onClickEvent,
        CreateEventAndGoTournament,
        onClickDeleteEvent,
        ChangeLang,
        onChangeFormRadioBtn,
        SelectFormulaEvent,
        ChangeFormGender,
        onClickT4,
        onClickT5,
        onClickDeleteT4T5,
    } = App_Logic();
    // console.log({ event, eventlist });
    return (
        <ProviderApp
            value={{
                event,
                eventlist,
                settings,
                sportsman,
                languages,
                focusinput,
                SAInputRef,
                SetSportsman,
                SetFocusinput,
                GoToTournament,
                GoToStartFromTournament,
                GoToForm,
                GoToTournamentFromForm,
                GoDialog,
                onClickEvent,
                CreateEventAndGoTournament,
                onClickDeleteEvent,
                ChangeLang,
                onChangeFormRadioBtn,
                SelectFormulaEvent,
                ChangeFormGender,
                onClickT4,
                onClickT5,
                onClickDeleteT4T5,
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
