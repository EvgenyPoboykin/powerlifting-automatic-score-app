export interface IContainer {}

export interface ISelectorBox {
    selectedOption: any | {};
    items: any | [];
    selectChange: (item: any | {}) => void;
}
