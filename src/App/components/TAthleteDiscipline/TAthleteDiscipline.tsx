import React, { memo, useContext } from 'react';
import { Container } from './style';
import { ITAthleteDiscipline } from './interfaces';
import { ContextApp } from '../../state';
import TAthleteDisciplineOpen from '../TAthleteDisciplineOpen';
import TAthleteDisciplineClose from '../TAthleteDisciplineClose';
import TTableItemTabName from '../TTableItemTabName';

const TAthleteDiscipline: React.FC<ITAthleteDiscipline> = memo(({ discipline, show, type, data }) => {
    const {
        event,
        event: { five, four },
    } = useContext(ContextApp);

    const Tabs = () => {
        if (!four && five) {
            return 4;
        } else if (!four && !five) {
            return 5;
        } else {
            return 3;
        }
    };

    const GenerateFields = () => {
        if (event[discipline]) {
            if (event[show]) {
                if (type && !data) {
                    return (
                        <Container tabs={Tabs()}>
                            <TAthleteDisciplineOpen name={show} nameField={`${show}_weight_2`} />
                            <TTableItemTabName name={`${show}2`} nameField={`${show}_weight_2`} />
                            <TTableItemTabName name={`${show}3`} nameField={`${show}_weight_3`} />

                            {!four ? <TTableItemTabName name={`${show}4`} nameField={`${show}_weight_4`} /> : null}
                            {!five ? <TTableItemTabName name={`${show}5`} nameField={`${show}_weight_5`} /> : null}
                        </Container>
                    );
                } else {
                    return (
                        <Container tabs={Tabs()}>
                            <TTableItemTabName name={data[`${show}_weight_1`]} />
                            <TTableItemTabName name={data[`${show}_weight_2`]} />
                            <TTableItemTabName name={data[`${show}_weight_3`]} />

                            {!four ? <TTableItemTabName name={data[`${show}_weight_4`]} /> : null}
                            {!five ? <TTableItemTabName name={data[`${show}_weight_5`]} /> : null}
                        </Container>
                    );
                }
            } else {
                if (type && !data) {
                    return <TAthleteDisciplineClose name={show} />;
                } else {
                    return <TTableItemTabName name={data[`personal_result_${show}`]} />;
                }
            }
        } else {
            return null;
        }
    };

    return GenerateFields();
});
export default TAthleteDiscipline;
