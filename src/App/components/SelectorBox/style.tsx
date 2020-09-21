import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'SelectorBox__container' })`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 50;
    font-size: 12px;
    font-weight: 700;
    padding-right: 5px;
    padding-left: 5px;
    text-transform: uppercase;
    cursor: pointer;
`;
export const SelectBox = styled.div.attrs({ className: 'SelectorBox__container--select-box' })`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #32323200;
    position: relative;
    border-bottom: 1px solid #808080;
    cursor: pointer;
`;
export const SelectedItem = styled.div.attrs({ className: 'SelectorBox__container--selected-item' })`
    display: flex;
    width: 100%;
    height: 30px;
    justify-content: center;
    align-items: center;
    color: #9b9b9b;
    cursor: pointer;
    pointer-events: all;
`;
export const SelectList = styled.div.attrs({ className: 'SelectorBox__container--select-list' })`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    color: #808080;
`;
export const Option = styled.div.attrs({ className: 'SelectorBox__container--select-option' })`
    display: flex;
    width: 100%;
    height: 35px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ed1c24;
    cursor: pointer;
    pointer-events: all;

    &:hover {
        background-color: #ed1c24;
        color: #cdcdcd;
    }
`;
export const Label = styled.div.attrs({ className: 'SelectorBox__container--select-label' })`
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
    pointer-events: all;
`;
