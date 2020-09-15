export interface IPage {
    children: React.ReactNode;
    trigger?: boolean;
    inpoint?: string;
    outpoint?: string;
}

export interface IContainer {
    trigger?: boolean;
    inpoint?: string;
    outpoint?: string;
}
