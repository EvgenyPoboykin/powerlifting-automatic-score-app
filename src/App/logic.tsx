import { useState, useEffect, useCallback } from 'react';
import { State, Settings } from './state';

const MAX_RANDOM = 1000000000000;

const App_Logic = () => {
    const [state, SetState] = useState(State);
    const [settings, SetSettings] = useState(Settings);

    const GetItemLS = useCallback((key: string) => {
        const data: any = localStorage.getItem(key);
        return JSON.parse(data);
    }, []);
    const SetItemLS = useCallback((key: string, obj: any) => {
        return localStorage.setItem(key, JSON.stringify(obj));
    }, []);
    const UpdateSL = useCallback(
        (key: string, property: string, value: any) => {
            var obj = GetItemLS(key);
            obj[property] = value;
            SetItemLS(key, obj);
        },
        [SetItemLS, GetItemLS]
    );
    // const UpdateEventListSL = (key: string, value: any) => {
    //     var obj = GetItemLS(key);
    //     obj = [...obj, value];
    //     SetItemLS(key, obj);
    // };

    const GoToTournament = useCallback(() => {
        SetSettings((prev) => ({
            ...prev,
            tournament: true,
            start: false,
        }));

        UpdateSL('settingsApp', 'tournament', true);
        UpdateSL('settingsApp', 'start', false);
    }, [SetSettings, UpdateSL]);

    // Logic ${name} START
    const CreateEventAndGoTournament = (value: any) => {
        let newEvent = {
            event: value,
            id: Math.floor(Math.random() * Math.floor(MAX_RANDOM)),
            date: new Date(),
            sportsmans: [],
        };

        const newEventList = [newEvent, ...state.eventsList];

        SetState((prev) => ({
            ...prev,
            eventsList: newEventList,
            event: newEvent,
        }));

        SetSettings((prev) => ({
            ...prev,
            tournament: true,
            start: false,
        }));

        localStorage.setItem('event', JSON.stringify(newEvent));
        localStorage.setItem('eventsList', JSON.stringify(newEventList));

        UpdateSL('settingsApp', 'tournament', true);
        UpdateSL('settingsApp', 'start', false);
    };

    const GoToStartFromTournament = () => {
        SetSettings((prev) => ({
            ...prev,
            tournament: false,
            start: true,
        }));

        SetState((prev) => ({ ...prev, event: {} }));
        localStorage.setItem('event', JSON.stringify({}));
        UpdateSL('settingsApp', 'tournament', false);
        UpdateSL('settingsApp', 'start', true);
    };
    const GoToForm = () => {
        SetSettings((prev) => ({
            ...prev,
            tournament: false,
            form: true,
        }));

        UpdateSL('settingsApp', 'tournament', false);
        UpdateSL('settingsApp', 'form', true);
    };
    const GoToTournamentFromForm = () => {
        SetSettings((prev) => ({
            ...prev,
            tournament: true,
            form: false,
        }));

        UpdateSL('settingsApp', 'tournament', true);
        UpdateSL('settingsApp', 'form', false);
    };

    const GoDialog = () => {
        SetSettings((prev) => ({
            ...prev,
            dialog: !settings.dialog,
        }));

        UpdateSL('settingsApp', 'dialog', !settings.dialog);
    };

    const onClickEvent = useCallback(
        (id: number) => {
            const newEvent = state.eventsList && state.eventsList.filter((item: any) => id === item.id);

            SetState((prev) => ({ ...prev, event: newEvent[0] }));
            localStorage.setItem('event', JSON.stringify(newEvent[0]));
            GoToTournament();
        },
        [SetState, GoToTournament, state.eventsList]
    );

    const onClickDeleteEvent = (id: number) => {
        const newEventsList = state.eventsList && state.eventsList.filter((item: any) => id !== item.id);

        SetState((prev) => ({ ...prev, eventsList: newEventsList }));
        localStorage.setItem('eventsList', JSON.stringify(newEventsList));
    };

    useEffect(() => {
        const settingsLS: any = localStorage.getItem('settingsApp');
        const eventsLS: any = localStorage.getItem('eventsList');

        const settingsArray: any = JSON.parse(settingsLS);
        const eventsArray: any = JSON.parse(eventsLS);

        if (settingsArray !== settings && eventsArray && eventsArray.length !== 0 && eventsArray !== null) {
            SetState((prev) => ({ ...prev, eventsList: eventsArray }));
            SetSettings((prev) => ({ ...prev, settingsArray }));
        }
        if (settingsLS === null) {
            localStorage.setItem('settingsApp', JSON.stringify(settings));
        }
        if (eventsLS === null) {
            localStorage.setItem('event', JSON.stringify(state.event));
            localStorage.setItem('eventsList', JSON.stringify(state.eventsList));
        }
    }, [SetState, SetSettings]);
    // Logic ${name} END

    return {
        state,
        settings,
        GoToTournament,
        CreateEventAndGoTournament,
        GoToStartFromTournament,
        GoToForm,
        GoToTournamentFromForm,
        GoDialog,
        onClickEvent,
        onClickDeleteEvent,
    };
};

export default App_Logic;
