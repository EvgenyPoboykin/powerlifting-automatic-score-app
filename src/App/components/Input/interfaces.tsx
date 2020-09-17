export interface IInput {
    value: string;

    onChangeInput: (e: React.ChangeEvent) => void;
    onKeyDown?: (e: React.KeyboardEvent) => void;
}
export interface IContainer {}
