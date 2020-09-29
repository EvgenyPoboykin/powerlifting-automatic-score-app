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
        athlete,
        settings,
        languages,
        focusinput,
        SAInputRef,
        SetAthlete,
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
        ClickTabOpen,
        ClickTabClose,
    } = App_Logic();
    // console.log({ event, eventlist });
    return (
        <ProviderApp
            value={{
                event,
                eventlist,
                settings,
                athlete,
                languages,
                focusinput,
                SAInputRef,
                SetAthlete,
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
                ClickTabOpen,
                ClickTabClose,
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
