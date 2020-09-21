import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.label.attrs({ className: 'FRadioBtn__container' })`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 16px;
    font-weight: 600;
`;
export const Checkmark = styled.span.attrs({ className: 'FRadioBtn__container--checkmark' })`
    color: #bebebe;
    position: relative;
    margin-top: 1px;
    padding-left: 10px;
`;
export const Radio = styled.input.attrs({ className: 'FRadioBtn__container--radio', type: 'radio', name: 'radio' })`
    cursor: pointer;
    -webkit-appearance: none;
    background-color: #2f353a;
    border: 1px solid #808080;
    width: 15px;
    height: 15px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 6px;
    border-radius: 50%;
    display: inline-block;
    margin-top: 1px;
    pointer-events: all;

    &:checked {
        background-color: #808080;
        border: 1px solid #808080;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
            inset 15px 10px -12px rgba(255, 255, 255, 0.1);
        color: #808080;

        &:active {
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px 1px 3px rgba(0, 0, 0, 0.1);
        }

        &:hover {
            background-color: #808080;
            border: 1px solid #808080;
            color: #808080;
        }
    }
`;
