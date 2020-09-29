import { IAthlete } from '../../state';

export interface IContainer {
    gender?: string;
    // onDoubleClick: (id: string) => void;
}
export interface IGender {
    gender?: string;
}
export interface ITTableItem {
    athlete: IAthlete | undefined;
}
export interface IDisciplines {
    gritWidth: any;
}
