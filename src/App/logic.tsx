import { useState, useEffect, useCallback, useRef } from 'react';
import uuid from 'uuid';
import { Event, Sportsman, Settings, Language_RU, Language_EN, EventTemplate } from './state';
import { eventListDummy } from './dummy';

// EventsList

const App_Logic = () => {
    const [event, SetEvent] = useState<any>({});
    const [eventlist, SetEventList] = useState<any>(eventListDummy);
    const [settings, SetSettings] = useState<any>(Settings);
    const [sportsman, SetSportsman] = useState<any>(Sportsman);
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
        if (item.value === 'IPF-Classic-Bench' || item.value === 'IPF-Classic-Bench-Equipped') {
            SetEvent((prev: any) => ({ ...prev, label: item.label, value: item.value, pss: 0, gsl: 1, ts: 0 }));
        } else {
            SetEvent((prev: any) => ({ ...prev, label: item.label, value: item.value, pss: 1, gsl: 1, ts: 1 }));
        }
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
        let newEvent = { ...EventTemplate, event: value, id: uuid.v4(), date: new Date() };

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

    const ChangeFormGender = (item: any | {}) => {
        SetSportsman((prev: any) => ({ ...prev, gender_label: item.label, gender_value: item.value }));
    };

    const GoToTournamentFromForm = () => {
        SetSettings((prev: any) => ({
            ...prev,
            tournament: true,
            form: false,
        }));

        SetSportsman(Sportsman);
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

            SetEvent(newEvent[0]);
            GoToTournament();
        },
        [SetEvent, GoToTournament, eventlist]
    );

    const onClickDeleteEvent = (id: number) => {
        const newEventsList = eventlist && eventlist.filter((item: any) => id !== item.id);
        SetEventList(newEventsList);
    };

    // onClickT4, onClickT5, onClickDeleteT4T5

    const onClickT4 = () => {
        SetEvent((prev: any) => ({
            ...prev,
            disFourBtn: true,
            disFiveBtn: false,
            disDelBtn: false,
            four: false,
            five: true,
        }));
    };
    const onClickT5 = () => {
        SetEvent((prev: any) => ({
            ...prev,
            disFourBtn: true,
            disFiveBtn: true,
            disDelBtn: false,
            four: false,
            five: false,
        }));
    };
    const onClickDeleteT4T5 = () => {
        if (event.disFiveBtn) {
            SetEvent((prev: any) => ({
                ...prev,
                disFourBtn: true,
                disFiveBtn: false,
                disDelBtn: false,
                four: false,
                five: true,
            }));
        } else {
            SetEvent((prev: any) => ({
                ...prev,
                disFourBtn: false,
                disFiveBtn: true,
                disDelBtn: true,
                four: true,
                five: true,
            }));
        }
    };

    const ClickTabOpen = (name: string) => {
        if (name === 'sq') {
            SetEvent((prev: any) => ({ ...prev, sq: true, bp: false, dl: false }));
        } else if (name === 'bp') {
            SetEvent((prev: any) => ({ ...prev, sq: false, bp: true, dl: false }));
        } else {
            SetEvent((prev: any) => ({ ...prev, sq: false, bp: false, dl: true }));
        }
    };
    const ClickTabClose = (name: string) => {
        SetEvent((prev: any) => ({ ...prev, [name]: false }));
    };

    useEffect(() => {
        const settingsLS: any = localStorage.getItem('settingsapp');
        // const eventsLS: any = localStorage.getItem('eventslist');
        const eventLS: any = localStorage.getItem('event');

        const settingsArray: any = JSON.parse(settingsLS);
        // const eventsArray: any = JSON.parse(eventsLS);
        const eventArray: any = JSON.parse(eventLS);

        // if (settingsArray && eventsArray.length 0 && eventArray !== {}) {
        SetEvent(eventArray);
        // SetEventList(eventsArray);
        SetSettings(settingsArray);
        // }
        //  else {
        // localStorage.setItem('settingsapp', JSON.stringify(settings));
        // localStorage.setItem('event', JSON.stringify(state.event));
        // localStorage.setItem('eventslist', JSON.stringify(state.eventslist));
        // }
    }, []);
    // Logic ${name} END

    console.log(event);

    return {
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
        ChangeFormGender,
        onClickT4,
        onClickT5,
        onClickDeleteT4T5,
        ClickTabOpen,
        ClickTabClose,
    };
};

export default App_Logic;
