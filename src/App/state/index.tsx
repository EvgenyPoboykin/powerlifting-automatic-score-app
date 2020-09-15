import React from 'react';

export const Context = {
    settingsApp: { lang: 'en', start: true, tournament: false, form: false, autors: false },
    eventsList: [],
    sportsmanList: [],
};

export const ContextApp = React.createContext<any>(Context);

export interface IProvider {
    value: any;
    children: React.ReactNode;
}

export const ProviderApp: React.FC<IProvider> = ({ children, value }) => {
    return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>;
};
