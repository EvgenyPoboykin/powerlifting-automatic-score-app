import styled from 'styled-components';
import { IGender, IContainer, IDisciplines } from './interfaces';

export const Gender = styled.div.attrs({ className: 'TTableItem__container--gender' })`
    background-color: ${(props: IGender) =>
        props.gender === 'MALE' ? `rgba(0, 166, 255, 0.75)` : `rgba(237, 28, 35, 0.75)`};
    display: none;
    align-items: center;
    position: absolute;
    width: 10px;
    height: 100%;
    z-index: 10;

    opacity: 1;
    font-size: 12px;
    transition: opacity 2s ease-in-out;
    border-radius: 2px;

    transition: all 300ms cubic-bezier(0.5, 0, 0, 1);
`;

export const Container = styled.div.attrs({ className: 'TTableItem__container' })`
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    color: #808080;
    border-color: #808080;
    padding: 0px;
    width: 100%;
    pointer-events: all;

    ${(props: IContainer) =>
        props.gender !== undefined
            ? `
            &:hover ${Gender} {
        display: flex;
    }
    &:hover {
        background-color: rgba(30, 30, 30, 0.7);
    }`
            : `border-top: 1px solid #ed1c24;
    border-bottom: 1px solid #ed1c24;`}
`;
export const ContainerSportsman = styled.div.attrs({ className: 'TTableItem__container--sportsman' })`
    display: grid;
    grid-template-columns: minmax(250px, 1fr);
    align-items: center;
    justify-items: start;
    height: 100%;
    position: relative;
`;
export const ContainerSportsmanData = styled.div.attrs({ className: 'TTableItem__container--sportsman-data' })`
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 5px;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    height: 100%;

    font-size: 12px;

    ${(props: IContainer) => props.gender === undefined && `text-transform: uppercase;`};
`;
export const ContainerSportsmanDataName = styled.div.attrs({ className: 'TTableItem__container--sportsman-data' })`
    padding-left: 30px;
    color: ${(props: IContainer) => (props.gender === undefined ? '#ed1c24' : '#b8b8b8')};

    opacity: 0.7;
    &:hover {
        opacity: 1;
    }

    cursor: pointer;
    transition: all 300ms cubic-bezier(0.5, 0, 0, 1);
`;
export const Content = styled.div.attrs({ className: 'TTableItem__container--content-section' })`
    display: grid;
    grid-template-columns:
        minmax(40px, 85px) minmax(40px, 85px) minmax(40px, 85px) minmax(120px, 450px) minmax(100px, 110px)
        minmax(100px, 110px) 70px;
    align-items: center;
    height: 100%;
`;
export const Disciplines = styled.div.attrs({ className: 'TTableItem__container--content-section-disciplines' })`
    display: grid;
    grid-template-columns: ${(props: IDisciplines) =>
        props.gritWidth &&
        `${props.gritWidth.sq ? `1fr` : `50px`} ${props.gritWidth.bp ? `1fr` : `50px`} ${
            props.gritWidth.dl ? `1fr` : `50px`
        }`};
    align-items: center;
    justify-content: center;
    height: 100%;
`;
