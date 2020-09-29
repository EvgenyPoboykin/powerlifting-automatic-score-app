import { EventTemplate } from './EventTemplate';
import { Language_EN, Language_RU } from './Language';
import { Settings } from './Settings';
import { Athlete } from './Athlete';
import { ContextApp, ProviderApp } from './Context';
import { IEventTemplate } from './interfaces';

export const Event: IEventTemplate = EventTemplate;
export const EventsList: IEventTemplate[] = [];

export * from './interfaces';

export { EventTemplate, Language_EN, Language_RU, Settings, Athlete, ContextApp, ProviderApp };
