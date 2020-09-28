import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'TTopTable__container' })`
    display: flex;
    justify-content: space-between;
    height: 43px;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    color: #ed1c24;
    text-transform: uppercase;
    border-top: 1px solid #ed1c24;
    border-bottom: 1px solid #ed1c24;
    padding: 0px;
    width: 100%;
`;
export const SportsmansTabContainer = styled.div.attrs({
    className: 'TTopTable__container--sportsman-tab-container',
})`
    display: grid;
    grid-template-columns: minmax(250px, 1fr);
    align-items: center;
    justify-items: start;
    height: 100%;
    position: relative;
`;
export const SportsmansTabName = styled.div.attrs({ className: 'TTopTable__container--sportsman-tab-name' })`
    display: flex;
    align-items: center;
    padding-left: 30px;
`;
export const LastTab = styled.div.attrs({ className: 'TTopTable__container--last-tab' })`
    display: flex;
    align-items: center;
    padding-right: 30px;
`;
export const Disciplines = styled.div.attrs({ className: 'TTopTable__container--disciplines' })`
    display: grid;
    grid-template-columns: repeat(3, minmax(50px, 1fr));
    align-items: center;
    height: 100%;
`;
