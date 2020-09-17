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
};
export const Language_EN = {
    event_name: 'Event Name',
    create_event: 'Create Event',
    add_spostsman: 'Add Sportsman',
    save_as: 'Save As',
};

export const ContextApp = React.createContext<any>({ State, Settings });

export interface IProvider {
    value: any;
    children: React.ReactNode;
}

export const ProviderApp: React.FC<IProvider> = ({ children, value }) => {
    return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>;
};
