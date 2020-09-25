import React, { memo, useContext } from 'react';
import { Container } from './style';
import { ITDiscipline } from './interfaces';
import { ContextApp } from '../../state';
import TDisciplineOpen from '../TDisciplineOpen';
import TDisciplineClose from '../TDisciplineClose';
import TDisciplineTry from '../TDisciplineTry';

const TDiscipline: React.FC<ITDiscipline> = memo(({ discipline, show }) => {
    const { event } = useContext(ContextApp);

    const Tabs = () => {
        if (!event.four && event.five) {
            return 4;
        } else if (!event.four && !event.five) {
            return 5;
        } else {
            return 3;
        }
    };

    const Sort = (name: string) => {};

    return event[discipline] ? (
        event[show] ? (
            <Container tabs={Tabs()}>
                <TDisciplineOpen name={show} SortBy={Sort} />
                <TDisciplineTry name={`${show}2`} SortBy={Sort} />
                <TDisciplineTry name={`${show}3`} SortBy={Sort} />

                {!event.four ? <TDisciplineTry name={`${show}4`} SortBy={Sort} /> : null}
                {!event.five ? <TDisciplineTry name={`${show}5`} SortBy={Sort} /> : null}
            </Container>
        ) : (
            <TDisciplineClose name={show} />
        )
    ) : null;
});
export default TDiscipline;
