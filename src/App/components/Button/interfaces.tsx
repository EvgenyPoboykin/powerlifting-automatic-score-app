export interface IContainer {
    width?: number;
}
export interface ITextBtn {
    mode?: string;
}
export interface IButton {
    name: string;
    onClick: () => void;
    width: number;
    mode?: string;
}
