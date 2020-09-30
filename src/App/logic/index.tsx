import React from 'react';
import { ProviderApp } from '../state';
import App_Logic from './logic';
import { IContext } from './interfaces';

const Context: React.FC<IContext> = ({ children }) => {
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
        onDoubleClickAthlete,
        SaveAthleteFromForm,
        AddAthleteFromForm,
        SortBy,
    } = App_Logic();
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
                onDoubleClickAthlete,
                SaveAthleteFromForm,
                AddAthleteFromForm,
                SortBy,
            }}
        >
            {children}
        </ProviderApp>
    );
};
export default Context;
