import { useState, useEffect } from 'react';
import { Context } from './state';
const App_Logic = () => {
    const [state, SetState] = useState(Context);

    // Logic ${name} START

    const GoToTournament = () => {
        SetState((prev) => ({
            ...prev,
            settingsApp: {
                ...prev.settingsApp,
                tournament: true,
                start: false,
            },
        }));
    };
    const GoToStartFromTournament = () => {
        SetState((prev) => ({
            ...prev,
            settingsApp: {
                ...prev.settingsApp,
                tournament: false,
                start: true,
            },
        }));
    };
    const GoToForm = () => {
        SetState((prev) => ({
            ...prev,
            settingsApp: {
                ...prev.settingsApp,
                tournament: false,
                form: true,
            },
        }));
    };
    const GoToTournamentFromForm = () => {
        SetState((prev) => ({
            ...prev,
            settingsApp: {
                ...prev.settingsApp,
                tournament: true,
                form: false,
            },
        }));
    };
    const GoDialog = () => {
        SetState((prev) => ({
            ...prev,
            settingsApp: {
                ...prev.settingsApp,
                dialog: true,
            },
        }));
    };
    const CloseDialog = () => {
        SetState((prev) => ({
            ...prev,
            settingsApp: {
                ...prev.settingsApp,
                dialog: false,
            },
        }));
    };

    useEffect(() => {
        const settings = localStorage.getItem('settingsApp');
        const events = localStorage.getItem('eventsList');
        const sportsmans = localStorage.getItem('sportsmanList');

        if (settings && events && sportsmans) {
            SetState((prev) => ({ ...prev, settingsApp: JSON.parse(settings), eventsList: JSON.parse(events), sportsmanList: JSON.parse(sportsmans) }));
        }

        // localStorage.setItem('settingsApp', JSON.stringify(state.settingsApp));
        // localStorage.setItem('eventsList', JSON.stringify(state.eventsList));
        // localStorage.setItem('sportsmanList', JSON.stringify(state.sportsmanList));
    }, [SetState]);
    // Logic ${name} END

    return { state, GoToTournament, GoToStartFromTournament, GoToForm, GoToTournamentFromForm, GoDialog, CloseDialog };
};

export default App_Logic;
