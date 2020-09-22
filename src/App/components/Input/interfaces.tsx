export interface IInput {
    placeholder?: string;
    inputRef?: React.RefObject<HTMLInputElement>;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: string;
    nameField?: string;
}
export interface IIContainer {}
