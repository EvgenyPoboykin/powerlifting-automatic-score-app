export interface IPage {
    children: React.ReactNode;
    trigger?: boolean;
    inpoint?: string;
    outpoint?: string;
    indexZ?: number;
}

export interface IContainer {
    trigger?: boolean;
    inpoint?: string;
    outpoint?: string;
    indexZ?: number;
}
