import React from 'react';

const MAX_RANDOM = 1000000000000;

interface ISettings {
    lang: boolean;
    start: boolean;
    tournament: boolean;
    form: boolean;
    dialog: boolean;
}
interface IContext {
    eventslist: any | [];
    event: any | {};
}
export const Settings: ISettings = {
    lang: false,
    start: true,
    tournament: false,
    form: false,
    dialog: false,
};
export const State: IContext = {
    eventslist: [],
    event: {},
};
export const Language_RU = {
    event_name: 'Название Мероприятия',
    create_event: 'Создать Мероприятие',
    add_spostsman: 'Добавить Спортсмена',
    save_as: 'Сохранить Как',
    delete_btn: 'УДАЛИТЬ',
};
export const Language_EN = {
    event_name: 'Event Name',
    create_event: 'Create Event',
    add_spostsman: 'Add Sportsman',
    save_as: 'Save As',
    delete_btn: 'DELETE',
};

export const ContextApp = React.createContext<any>({ State, Settings });

export interface IProvider {
    value: any;
    children: React.ReactNode;
}

export const ProviderApp: React.FC<IProvider> = ({ children, value }) => {
    return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>;
};

export let EventTemplate = {
    event: '',
    id: Math.floor(Math.random() * Math.floor(MAX_RANDOM)),
    date: new Date(),
    sportsmans: [],
    label: 'IPF (Classic)',
    value: 'IPF-Classic',
    four: false,
    five: false,
    setFourBtnActive: false,
    setFiveBtnActive: false,
    disFourBtn: false,
    disFiveBtn: true,
    disDelBtn: true,
    sq: false,
    bp: false,
    dl: false,
    pss: true,
    gsl: true,
    ts: true,
    title: false,
    card: false,
};
