import { useState, useEffect, useCallback } from 'react';
import { State, Settings, Language_RU, Language_EN } from './state';

const MAX_RANDOM = 1000000000000;

const App_Logic = () => {
    const [state, SetState] = useState(State);
    const [settings, SetSettings] = useState(Settings);
    const [languages, SetLanguages] = useState(Language_RU);
    const [focusinput, SetFocusInput] = useState(false);

    const ChangeLang = (value: string) => {
        const region = () => {
            if (value === 'RU') return 'EN';
            if (value === 'EN') return 'RU';
        };

        if (region() === 'EN') {
            SetLanguages(Language_EN);
        } else {
            SetLanguages(Language_RU);
        }
        console.log(region());
        SetSettings((prev) => ({ ...prev, lang: !settings.lang }));
    };

    const GoToTournament = useCallback(() => {
        SetSettings((prev) => ({
            ...prev,
            tournament: true,
            start: false,
        }));
    }, [SetSettings]);

    // Logic ${name} START
    const CreateEventAndGoTournament = (value: any) => {
        let newEvent = {
            event: value,
            id: Math.floor(Math.random() * Math.floor(MAX_RANDOM)),
            date: new Date(),
            sportsmans: [],
            label: 'IPF Classic',
            value: 'IPF-Classic',
            four: 0,
            five: 0,
            setFourBtnActive: 0,
            setFiveBtnActive: 0,
            disFourBtn: 0,
            disFiveBtn: 1,
            disDelBtn: 1,
            sq: 0,
            bp: 0,
            dl: 0,
            pss: 1,
            gsl: 1,
            ts: 1,
            title: false,
            card: 0,
        };

        // const newEventList = [newEvent, ...state.eventsList];

        SetState((prev) => ({
            ...prev,
            eventslist: [newEvent, ...prev.eventslist],
            event: newEvent,
        }));

        SetSettings((prev) => ({
            ...prev,
            tournament: true,
            start: false,
        }));
    };

    const GoToStartFromTournament = () => {
        SetSettings((prev) => ({
            ...prev,
            tournament: false,
            start: true,
        }));

        SetState((prev) => ({ ...prev, event: {} }));
    };
    const GoToForm = () => {
        SetSettings((prev) => ({
            ...prev,
            tournament: false,
            form: true,
        }));
    };

    const GoToTournamentFromForm = () => {
        SetSettings((prev) => ({
            ...prev,
            tournament: true,
            form: false,
        }));
    };

    const GoDialog = () => {
        SetSettings((prev) => ({
            ...prev,
            dialog: !settings.dialog,
        }));
    };

    const onClickEvent = useCallback(
        (id: number) => {
            const newEvent = state.eventslist && state.eventslist.filter((item: any) => id === item.id);

            SetState((prev) => ({ ...prev, event: newEvent[0] }));
            GoToTournament();
        },
        [SetState, GoToTournament, state.eventslist]
    );

    const onClickDeleteEvent = (id: number) => {
        const newEventsList = state.eventslist && state.eventslist.filter((item: any) => id !== item.id);
        SetState((prev) => ({ ...prev, eventslist: newEventsList }));
    };

    useEffect(() => {
        const settingsLS: any = localStorage.getItem('settingsapp');
        const eventsLS: any = localStorage.getItem('eventslist');
        const eventLS: any = localStorage.getItem('event');

        const settingsArray: any = JSON.parse(settingsLS);
        const eventsArray: any = JSON.parse(eventsLS);
        const eventArray: any = JSON.parse(eventLS);

        // if (settingsArray && eventsArray.length 0 && eventArray !== {}) {
        SetState((prev) => ({ ...prev, eventslist: eventsArray, event: eventArray }));
        SetSettings(settingsArray);
        // }
        //  else {
        // localStorage.setItem('settingsapp', JSON.stringify(settings));
        // localStorage.setItem('event', JSON.stringify(state.event));
        // localStorage.setItem('eventslist', JSON.stringify(state.eventslist));
        // }
    }, []);
    // Logic ${name} END

    return {
        state,
        settings,
        languages,
        focusinput,
        SetFocusInput,
        GoToTournament,
        CreateEventAndGoTournament,
        GoToStartFromTournament,
        GoToForm,
        GoToTournamentFromForm,
        GoDialog,
        onClickEvent,
        onClickDeleteEvent,
        ChangeLang,
    };
};

export default App_Logic;
