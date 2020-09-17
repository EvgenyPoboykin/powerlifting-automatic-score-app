import React from 'react';

interface ISettings {
    lang: boolean;
    start: boolean;
    tournament: boolean;
    form: boolean;
    dialog: boolean;
}
interface IContext {
    eventsList: any | [];
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
    eventsList: [],
    event: {},
};

export const ContextApp = React.createContext<any>({ State, Settings });

export interface IProvider {
    value: any;
    children: React.ReactNode;
}

export const ProviderApp: React.FC<IProvider> = ({ children, value }) => {
    return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>;
};
