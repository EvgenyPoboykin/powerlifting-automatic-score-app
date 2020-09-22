import { useState, useEffect, useCallback, useRef } from 'react';
import uuid from 'uuid';
import { Event, EventsList, Settings, Language_RU, Language_EN, EventTemplate } from './state';

const App_Logic = () => {
    const [event, SetEvent] = useState<any>({});
    const [eventlist, SetEventList] = useState<any>(EventsList);
    const [settings, SetSettings] = useState<any>(Settings);
    const [sportsman, SetSportsman] = useState<any>({});
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
        SetSettings((prev: any) => ({ ...prev, lang: !settings.lang }));
    };

    const SelectFormulaEvent = (item: any) => {
        SetEvent((prev: any) => ({ ...prev, label: item.label, value: item.value }));
    };

    const GoToTournament = useCallback(() => {
        SetSettings((prev: any) => ({
            ...prev,
            tournament: true,
            start: false,
        }));
    }, [SetSettings]);

    // Logic ${name} START
    const CreateEventAndGoTournament = (value: any) => {
        let newEvent = { ...EventTemplate, event: value, id: uuid.v4() };

        SetEventList([newEvent, ...eventlist]);
        SetEvent(newEvent);

        SetSettings((prev: any) => ({
            ...prev,
            tournament: true,
            start: false,
        }));
    };

    const onChangeFormRadioBtn = (e: React.ChangeEvent<HTMLDivElement>) => {
        if (event.card === 0) {
            SetEvent((prev: any) => ({ ...prev, card: 1 }));
        } else {
            SetEvent((prev: any) => ({ ...prev, card: 0 }));
        }
    };

    const GoToStartFromTournament = () => {
        SetSettings((prev: any) => ({
            ...prev,
            tournament: false,
            start: true,
        }));

        const EventListWithoutEvent = eventlist.filter((item: any) => item.id !== event.id);
        const newEventsList = [event, ...EventListWithoutEvent];

        SetEvent(Event);
        SetEventList(newEventsList);
    };
    const GoToForm = () => {
        SetSettings((prev: any) => ({
            ...prev,
            tournament: false,
            form: true,
        }));
    };

    const GoToTournamentFromForm = () => {
        SetSettings((prev: any) => ({
            ...prev,
            tournament: true,
            form: false,
        }));
    };

    const GoDialog = () => {
        SetSettings((prev: any) => ({
            ...prev,
            dialog: !settings.dialog,
        }));
    };

    const onClickEvent = useCallback(
        (id: number) => {
            const newEvent = eventlist && eventlist.filter((item: any) => id === item.id);

            SetEvent(newEvent);
            GoToTournament();
        },
        [SetEvent, GoToTournament, eventlist]
    );

    const onClickDeleteEvent = (id: number) => {
        const newEventsList = eventlist && eventlist.filter((item: any) => id !== item.id);
        SetEventList(newEventsList);
    };

    useEffect(() => {
        const settingsLS: any = localStorage.getItem('settingsapp');
        const eventsLS: any = localStorage.getItem('eventslist');
        const eventLS: any = localStorage.getItem('event');

        const settingsArray: any = JSON.parse(settingsLS);
        const eventsArray: any = JSON.parse(eventsLS);
        const eventArray: any = JSON.parse(eventLS);

        // if (settingsArray && eventsArray.length 0 && eventArray !== {}) {
        SetEvent(eventArray);
        SetEventList(eventsArray);
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
        event,
        eventlist,
        sportsman,
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
        onChangeFormRadioBtn,
        SelectFormulaEvent,
    };
};

export default App_Logic;
