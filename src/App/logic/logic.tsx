import { useState, useCallback, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
    Event,
    Athlete,
    Settings,
    Language_RU,
    Language_EN,
    EventTemplate,
    IEventTemplate,
    ISettings,
    IAthlete,
    ILanguage,
} from '../state';
import { eventListDummy } from './dummy';

// EventsList

const App_Logic = () => {
    const [event, SetEvent] = useState<IEventTemplate>(eventListDummy[0]);
    const [eventlist, SetEventList] = useState<IEventTemplate[]>(eventListDummy);
    const [settings, SetSettings] = useState<ISettings>(Settings);
    const [athlete, SetAthlete] = useState<IAthlete>(Athlete);
    const [languages, SetLanguages] = useState<ILanguage>(Language_RU);
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
        SetSettings((prev: ISettings) => ({ ...prev, lang: !settings.lang }));
    };

    const SelectFormulaEvent = (item: any) => {
        const { label, value } = item;
        if (value === 'IPF-Classic-Bench' || value === 'IPF-Classic-Bench-Equipped') {
            SetEvent((prev: IEventTemplate) => ({
                ...prev,
                label,
                value,
                pss: false,
                gsl: true,
                ts: false,
            }));
        } else {
            SetEvent((prev: IEventTemplate) => ({
                ...prev,
                label,
                value,
                pss: true,
                gsl: true,
                ts: true,
            }));
        }
    };

    const GoToTournament = useCallback(() => {
        SetSettings((prev: ISettings) => ({
            ...prev,
            tournament: true,
            start: false,
        }));
    }, [SetSettings]);

    // Logic ${name} START
    const CreateEventAndGoTournament = (value: any) => {
        let newEvent = { ...EventTemplate, eventName: value, id: uuidv4(), date: new Date() };

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
            SetEvent((prev: IEventTemplate) => ({ ...prev, card: 1 }));
        } else {
            SetEvent((prev: IEventTemplate) => ({ ...prev, card: 0 }));
        }
    };

    const GoToStartFromTournament = () => {
        SetSettings((prev: ISettings) => ({
            ...prev,
            tournament: false,
            start: true,
        }));

        const EventListClone = [...eventlist];
        const EventListWithoutEvent = EventListClone.filter((item: any) => item.id !== event.id);
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
        SetAthlete((prev: IAthlete) => ({ ...prev, gender_label: item.label, gender_value: item.value }));
    };

    const GoToTournamentFromForm = () => {
        SetSettings((prev: ISettings) => ({
            ...prev,
            tournament: true,
            form: false,
        }));

        SetAthlete(Athlete);
    };

    const GoDialog = () => {
        SetSettings((prev: ISettings) => ({
            ...prev,
            dialog: !settings.dialog,
        }));
    };

    const onClickEvent = useCallback(
        (id: string) => {
            const EventListClone = [...eventlist];
            const newEvent = EventListClone.filter((item: IEventTemplate) => id === item.id);

            SetEvent(newEvent[0]);
            GoToTournament();
        },
        [SetEvent, GoToTournament, eventlist]
    );

    const onClickDeleteEvent = (id: string) => {
        const EventListClone = [...eventlist];
        const newEventsList = EventListClone.filter((item: IEventTemplate) => id !== item.id);
        SetEventList(newEventsList);
    };

    const onDoubleClickAthlete = (item: IAthlete) => {
        SetAthlete(item);
        SetSettings((prev: any) => ({
            ...prev,
            tournament: false,
            form: true,
        }));
    };

    const SaveAthleteFromForm = () => {
        const { athletesList } = event;
        const AthleteListClone = [...athletesList];
        const newAthleteListWithoutAthlete = AthleteListClone.filter((item: IAthlete) => item.id !== athlete.id);
        const newAthleteList = [...newAthleteListWithoutAthlete, athlete];
        SetEvent((prev: IEventTemplate) => ({ ...prev, athletesList: newAthleteList }));
    };
    const AddAthleteFromForm = () => {
        SetEvent((prev: IEventTemplate) => ({ ...prev, athletesList: [...prev.athletesList, athlete] }));
    };

    // onClickT4, onClickT5, onClickDeleteT4T5

    const onClickT4 = () => {
        SetEvent((prev: IEventTemplate) => ({
            ...prev,
            disFourBtn: true,
            disFiveBtn: false,
            disDelBtn: false,
            four: false,
            five: true,
        }));
    };
    const onClickT5 = () => {
        SetEvent((prev: IEventTemplate) => ({
            ...prev,
            disFourBtn: true,
            disFiveBtn: true,
            disDelBtn: false,
            four: false,
            five: false,
        }));
    };
    const onClickDeleteT4T5 = () => {
        const { disFiveBtn } = event;
        if (disFiveBtn) {
            SetEvent((prev: IEventTemplate) => ({
                ...prev,
                disFourBtn: true,
                disFiveBtn: false,
                disDelBtn: false,
                four: false,
                five: true,
            }));
        } else {
            SetEvent((prev: IEventTemplate) => ({
                ...prev,
                disFourBtn: false,
                disFiveBtn: true,
                disDelBtn: true,
                four: true,
                five: true,
            }));
        }
    };

    const SortBy = (value: string, trigger: boolean) => {
        let athlete_list: any;

        const { athletesList } = event;

        if (trigger) {
            athlete_list = athletesList.sort((a: any, b: any) => {
                return a[value] - b[value];
            });
        } else {
            athlete_list = athletesList.sort((a: any, b: any) => {
                return b[value] - a[value];
            });
        }

        SetEvent((prev: IEventTemplate) => ({ ...prev, athletesList: athlete_list }));
    };

    const ClickTabOpen = (name: string) => {
        if (name === 'sq') {
            SetEvent((prev: IEventTemplate) => ({ ...prev, sq: true, bp: false, dl: false }));
        } else if (name === 'bp') {
            SetEvent((prev: IEventTemplate) => ({ ...prev, sq: false, bp: true, dl: false }));
        } else {
            SetEvent((prev: IEventTemplate) => ({ ...prev, sq: false, bp: false, dl: true }));
        }
    };
    const ClickTabClose = (name: string) => {
        SetEvent((prev: IEventTemplate) => ({ ...prev, [name]: false }));
    };

    // useEffect(() => {
    //     const settingsLS: any = localStorage.getItem('settingsapp');
    //     // const eventsLS: any = localStorage.getItem('eventslist');
    //     const eventLS: any = localStorage.getItem('event');

    //     const settingsArray: any = JSON.parse(settingsLS);
    //     // const eventsArray: any = JSON.parse(eventsLS);
    //     const eventArray: any = JSON.parse(eventLS);

    //     // if (settingsArray && eventsArray.length 0 && eventArray !== {}) {
    //     SetEvent(eventArray);
    //     // SetEventList(eventsArray);
    //     SetSettings(settingsArray);
    //     // }
    //     //  else {
    //     // localStorage.setItem('settingsapp', JSON.stringify(settings));
    //     // localStorage.setItem('event', JSON.stringify(state.event));
    //     // localStorage.setItem('eventslist', JSON.stringify(state.eventslist));
    //     // }
    // }, []);
    // Logic ${name} END

    console.log(eventlist);

    return {
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
        onDoubleClickAthlete,
        SaveAthleteFromForm,
        AddAthleteFromForm,
        SortBy,
    };
};

export default App_Logic;
