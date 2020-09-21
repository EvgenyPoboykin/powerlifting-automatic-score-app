export interface IInput {
    placeholder?: string;
    inputRef: React.RefObject<HTMLInputElement>;
    // value: any;
    // onKeyDown?: (e: React.KeyboardEvent) => void;
    onChange: (value: string) => void;
}
export interface IIContainer {}
