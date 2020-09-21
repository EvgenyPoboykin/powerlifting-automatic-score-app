export interface IContainer {
    width?: number;
}
export interface ITextBtn {
    mode?: string;
    disabled?: boolean;
}
export interface IButton {
    name: string;
    onClick?: () => void;
    width?: number;
    mode?: string;
    disabled?: boolean;
}
