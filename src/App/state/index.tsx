import React from 'react';

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
    sportsman: any | {};
}

export const Sportsman = {
    sportsmanid: '',
    firstName: '',
    lastName: '',
    gender_label: '',
    gender_value: '',
    bornYear: 0,
    selfWeight: 0,
    country: '',
    city: '',
    coach: '',
    sq_weight_1: 0,
    sq_weight_2: 0,
    sq_weight_3: 0,
    sq_weight_4: 0,
    sq_weight_5: 0,
    bp_weight_1: 0,
    bp_weight_2: 0,
    bp_weight_3: 0,
    bp_weight_4: 0,
    bp_weight_5: 0,
    dl_weight_1: 0,
    dl_weight_2: 0,
    dl_weight_3: 0,
    dl_weight_4: 0,
    dl_weight_5: 0,
    personal_result_sq: 0,
    personal_result_bp: 0,
    personal_result_dl: 0,
    abs_weight: 0,
};

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
    sportsman: Sportsman,
};
export const Language_RU = {
    event_name: 'Название Мероприятия',
    create_event: 'Создать Мероприятие',
    add_spostsman: 'Добавить Спортсмена',
    save_as: 'Сохранить Как',
    delete_btn: 'УДАЛИТЬ',
    standart: 'СТАНДАРТНО',
    pro: 'ПРО',
    f_cansel: 'отмена',
    f_save_as: 'СОХРАНИТЬ ИЗМЕНЕНИЯ',
    f_save: 'ДОБАВИТЬ УЧАСТНИКА',
};
export const Language_EN = {
    event_name: 'Event Name',
    create_event: 'Create Event',
    add_spostsman: 'Add Sportsman',
    save_as: 'Save As',
    delete_btn: 'DELETE',
    standart: 'STANDART',
    pro: 'PRO',
    f_cansel: 'cansel',
    f_save_as: 'Save',
    f_save: 'ADD SPORTSMAN',
};

export const ContextApp = React.createContext<any>(null);

export interface IProvider {
    value: any;
    children: React.ReactNode;
}

export const ProviderApp: React.FC<IProvider> = ({ children, value }) => {
    return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>;
};

export const EventTemplate = {
    event: '',
    id: '',
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
    card: 0,
};
