export interface IInput {
    placeholder?: string;
    inputRef?: React.RefObject<HTMLInputElement>;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    defaultValue: string;
}
export interface IIContainer {}
