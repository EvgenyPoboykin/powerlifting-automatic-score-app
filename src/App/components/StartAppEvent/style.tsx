import styled from 'styled-components';
// import {IContainer} from "./interfaces";

export const EventItem = styled.div.attrs({ className: 'StartAppEvent__container--event-item' })`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    height: 100%;
    width: 450px;
    padding: 10px 15px;
`;
export const EventItemName = styled.div.attrs({ className: 'StartAppEvent__container--event-item-name' })`
    color: #a7a7a7;
    font-size: 14px;
    font-weight: 700;
    height: 50px;
    padding: 5px;
    overflow: hidden;
    opacity: 0.8;
    pointer-events: all;
    &:hover {
        opacity: 1;
    }
`;
export const EventItemTimestamp = styled.div.attrs({ className: 'StartAppEvent__container--event-item-timestamp' })`
    display: block;
    color: #808080;
    font-size: 12px;
    font-weight: 700;
    height: 30px;
    padding: 10px 5px;
`;
export const EventItemDeleteBorder = styled.div.attrs({ className: 'StartAppEvent__container--event-item-delete-border' })`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    height: 100%;
    width: 10%;
    padding: 12px 0px;
    position: absolute;
    right: 0;
    top: 0;
`;
export const EventItemDelete = styled.div.attrs({ className: 'StartAppEvent__container--event-item-delete' })`
    position: relative;
    width: 24px;
    height: 24px;
    opacity: 0;

    transition: all 300ms cubic-bezier(0.5, 0, 0, 1);
`;
export const EventIconDelete = styled.div.attrs({ className: 'StartAppEvent__container--event-item-delete-icon' })`
    position: absolute;
    width: 24px;
    height: 24px;

    &::after,
    &::before {
        position: absolute;
        content: ' ';
        height: 16px;
        width: 4px;
        margin-left: 5px;
        background-color: #808080;
    }

    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }
`;

export const Container = styled.div.attrs({ className: 'StartAppEvent__container' })`
    display: flex;
    align-items: flex-start;
    color: 1px solid #808080;
    border-bottom: 1px solid #808080;
    min-height: 60px;
    width: 100%;
    background-color: rgba(87, 87, 87, 0);
    cursor: pointer;
    pointer-events: all;
    &:hover {
        background-color: rgba(87, 87, 87, 0.303);
    }

    &:hover ${EventItemDelete} {
        opacity: 1;
    }

    transition: all 300ms cubic-bezier(0.5, 0, 0, 1);
`;
