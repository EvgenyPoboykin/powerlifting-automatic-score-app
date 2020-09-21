import { useState, useEffect, useCallback, useRef } from 'react';
import uuid from 'uuid';
import { State, Settings, Language_RU, Language_EN, EventTemplate } from './state';

const App_Logic = () => {
    const [state, SetState] = useState(State);
    const [settings, SetSettings] = useState(Settings);
    const [languages, SetLanguages] = useState(Language_RU);
    const [focusinput, SetFocusinput] = useState<boolean>(false);
    const SAInputRef = useRef<HTMLInputElement>(null);

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
        let newEvent = { ...EventTemplate, event: value, id: uuid.v4() };

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

        const Event = state.event;
        const EventListWithoutEvent = state.eventslist.filter((item: any) => item.id !== state.event.id);
        const newEventsList = [Event, ...EventListWithoutEvent];

        SAInputRef.current!.value = '';

        SetState((prev) => ({ ...prev, event: {}, eventslist: newEventsList }));
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
        SAInputRef,
        SetFocusinput,
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
