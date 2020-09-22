import React from 'react';

export interface IProvider {
    value: any;
    children: React.ReactNode;
}

const ContextApp = React.createContext<any>(null);

const ProviderApp: React.FC<IProvider> = ({ children, value }) => {
    return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>;
};

export { ContextApp, ProviderApp };
