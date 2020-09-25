import React, { memo, useContext } from 'react';
import { Container, SoprtsmansTabContainer, SoprtsmansTabName, Disciplines, LastTab } from './style';
import {} from './interfaces';
import { ContextApp } from '../../state';
import TTopTableBtn from '../TTopTableBtn';
import TDiscipline from '../TDiscipline';

const TTopTable: React.FC = memo(() => {
    const { languages } = useContext(ContextApp);

    return (
        <Container>
            <SoprtsmansTabContainer>
                <SoprtsmansTabName>{languages.list}</SoprtsmansTabName>
            </SoprtsmansTabContainer>
            <TTopTableBtn name='CW' field='selfWeight' />
            <TTopTableBtn name='SW' field='selfWeight' />
            <TTopTableBtn name='AC' field='bornYear' />
            <Disciplines>
                <TDiscipline discipline='pss' show='sq' />
                <TDiscipline discipline='gsl' show='bp' />
                <TDiscipline discipline='ts' show='dl' />
            </Disciplines>

            <TTopTableBtn name='AbsW' field='abs_weight' />
            <LastTab>
                <TTopTableBtn name={languages.result} field='abs_result' />
            </LastTab>
        </Container>
    );
});
export default TTopTable;
