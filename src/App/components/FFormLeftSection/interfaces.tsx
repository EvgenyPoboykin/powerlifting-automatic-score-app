export interface IContainer {}
export interface IFFormLeftSection {
    state: any | {};
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectChange: (item: any | {}) => void;
}
