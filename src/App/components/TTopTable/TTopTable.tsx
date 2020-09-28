import React, { memo } from 'react';
// import { Container, SportsmansTabContainer, SportsmansTabName, Disciplines, LastTab } from './style';
import {} from './interfaces';
// import { ContextApp } from '../../state';
// import TTopTableBtn from '../TTopTableBtn';
// import TDiscipline from '../TDiscipline';
import TTableItem from '../TTableItem';

const TTopTable: React.FC = memo(() => {
    // const { languages } = useContext(ContextApp);

    return <TTableItem />;
});
export default TTopTable;
// <Container>
//     <SportsmansTabContainer>
//         <SportsmansTabName>{languages.list}</SportsmansTabName>
//     </SportsmansTabContainer>
//     <TTopTableBtn name='CW' field='selfWeight' />
//     <TTopTableBtn name='SW' field='selfWeight' />
//     <TTopTableBtn name='AC' field='bornYear' />
//     <Disciplines>
//         <TDiscipline discipline='pss' show='sq' />
//         <TDiscipline discipline='gsl' show='bp' />
//         <TDiscipline discipline='ts' show='dl' />
//     </Disciplines>

//     <TTopTableBtn name='AbsW' field='abs_weight' />
//     <LastTab>
//         <TTopTableBtn name={languages.result} field='abs_result' />
//     </LastTab>
// </Container>
