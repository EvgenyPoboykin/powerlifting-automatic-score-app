import React, { memo, useContext } from 'react';
import { Container } from './style';
import { ITAthleteDiscipline } from './interfaces';
import { ContextApp } from '../../state';
import TAthleteDisciplineOpen from '../TAthleteDisciplineOpen';
import TAthleteDisciplineClose from '../TAthleteDisciplineClose';
import TAthleteDisciplineTry from '../TAthleteDisciplineTry';

const TAthleteDiscipline: React.FC<ITAthleteDiscipline> = memo(({ discipline, show, type, data }) => {
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

    const GenerateFields = () => {
        if (event[discipline]) {
            if (event[show]) {
                if (type && !data) {
                    return (
                        <Container tabs={Tabs()}>
                            <TAthleteDisciplineOpen name={show} SortBy={Sort} />
                            <TAthleteDisciplineTry name={`${show}2`} SortBy={Sort} />
                            <TAthleteDisciplineTry name={`${show}3`} SortBy={Sort} />

                            {!event.four ? <TAthleteDisciplineTry name={`${show}4`} SortBy={Sort} /> : null}
                            {!event.five ? <TAthleteDisciplineTry name={`${show}5`} SortBy={Sort} /> : null}
                        </Container>
                    );
                } else {
                    return (
                        <Container tabs={Tabs()}>
                            <TAthleteDisciplineTry name={data[`${show}_weight_1`]} SortBy={Sort} />
                            <TAthleteDisciplineTry name={data[`${show}_weight_2`]} SortBy={Sort} />
                            <TAthleteDisciplineTry name={data[`${show}_weight_3`]} SortBy={Sort} />

                            {!event.four ? (
                                <TAthleteDisciplineTry name={data[`${show}_weight_4`]} SortBy={Sort} />
                            ) : null}
                            {!event.five ? (
                                <TAthleteDisciplineTry name={data[`${show}_weight_5`]} SortBy={Sort} />
                            ) : null}
                        </Container>
                    );
                }
            } else {
                if (type && !data) {
                    return <TAthleteDisciplineClose name={show} />;
                } else {
                    return <TAthleteDisciplineTry name={data[`personal_result_${show}`]} SortBy={Sort} />;
                }
            }
        } else {
            return null;
        }
    };

    return GenerateFields();
});
export default TAthleteDiscipline;
