import React, { memo, useContext } from 'react';
import { Container } from './style';
import { ITDiscipline } from './interfaces';
import { ContextApp } from '../../state';
import TDisciplineOpen from '../TDisciplineOpen';
import TDisciplineClose from '../TDisciplineClose';
import TDisciplineTry from '../TDisciplineTry';

const TDiscipline: React.FC<ITDiscipline> = memo(({ discipline, show, type, data }) => {
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

    console.log(data);

    const Sort = (name: string) => {};

    const GenerateFields = () => {
        if (event[discipline]) {
            if (event[show]) {
                if (type && !data) {
                    return (
                        <Container tabs={Tabs()}>
                            <TDisciplineOpen name={show} SortBy={Sort} />
                            <TDisciplineTry name={`${show}2`} SortBy={Sort} />
                            <TDisciplineTry name={`${show}3`} SortBy={Sort} />

                            {!event.four ? <TDisciplineTry name={`${show}4`} SortBy={Sort} /> : null}
                            {!event.five ? <TDisciplineTry name={`${show}5`} SortBy={Sort} /> : null}
                        </Container>
                    );
                } else {
                    return (
                        <Container tabs={Tabs()}>
                            <TDisciplineTry name={data[`${show}_weight_1`]} SortBy={Sort} />
                            <TDisciplineTry name={data[`${show}_weight_2`]} SortBy={Sort} />
                            <TDisciplineTry name={data[`${show}_weight_3`]} SortBy={Sort} />

                            {!event.four ? <TDisciplineTry name={data[`${show}_weight_4`]} SortBy={Sort} /> : null}
                            {!event.five ? <TDisciplineTry name={data[`${show}_weight_5`]} SortBy={Sort} /> : null}
                        </Container>
                    );
                }
            } else {
                if (type && !data) {
                    return <TDisciplineClose name={show} />;
                } else {
                    return <TDisciplineTry name={data[`personal_result_${show}`]} SortBy={Sort} />;
                }
            }
        } else {
            return null;
        }
    };

    return GenerateFields();
});
export default TDiscipline;
