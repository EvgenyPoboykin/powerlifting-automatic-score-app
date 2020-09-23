export interface IFInput {
    placeholder: string;
    defaultValue?: any;
    nameField: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    disable?: boolean;
}
