import React, { memo, useContext } from 'react';
import {
    Container,
    ContainerSportsman,
    Gender,
    ContainerSportsmanData,
    ContainerSportsmanDataName,
    Content,
    Disciplines,
} from './style';
import TAthleteWeightCategory from '../TAthleteWeightCategory';
import TAthleteData from '../TAthleteData';
import TTableItemTabName from '../TTableItemTabName';
import { ITTableItem } from './interfaces';
import { ContextApp } from '../../state';
import TAthleteAgeCategory from '../TAthleteAgeCategory';
import TAthleteDiscipline from '../TAthleteDiscipline';

const TTableItem: React.FC<ITTableItem> = memo(({ athlete }) => {
    const genderValue = athlete && athlete.gender_value;

    const { languages, event } = useContext(ContextApp);

    const gritWidth = { sq: event.sq, bp: event.bp, dl: event.dl };

    return (
        <Container gender={genderValue}>
            <ContainerSportsman>
                <ContainerSportsmanData gender={genderValue}>
                    <Gender gender={genderValue}></Gender>
                    {genderValue ? (
                        <ContainerSportsmanDataName gender={genderValue}>
                            {athlete.firstName} {athlete.lastName}
                        </ContainerSportsmanDataName>
                    ) : (
                        <ContainerSportsmanDataName gender={genderValue}>{languages.list}</ContainerSportsmanDataName>
                    )}
                </ContainerSportsmanData>
            </ContainerSportsman>

            <Content>
                {genderValue ? (
                    <>
                        <TAthleteWeightCategory gender={genderValue} weight={athlete.selfWeight} value={event.value} />
                        <TAthleteData data={athlete.selfWeight} />
                        <TAthleteAgeCategory age={athlete.bornYear} />
                        <Disciplines gritWidth={gritWidth}>
                            <TAthleteDiscipline discipline='pss' show='sq' data={athlete} />
                            <TAthleteDiscipline discipline='gsl' show='bp' data={athlete} />
                            <TAthleteDiscipline discipline='ts' show='dl' data={athlete} />
                        </Disciplines>
                        <TAthleteData data={athlete.abs_weight} />
                        <TAthleteData data={athlete.abs_result} />
                    </>
                ) : (
                    <>
                        <TTableItemTabName name='CW' />
                        <TTableItemTabName name='SW' />
                        <TTableItemTabName name='AC' />
                        <Disciplines gritWidth={gritWidth}>
                            <TAthleteDiscipline type={'toptable'} discipline='pss' show='sq' />
                            <TAthleteDiscipline type={'toptable'} discipline='gsl' show='bp' />
                            <TAthleteDiscipline type={'toptable'} discipline='ts' show='dl' />
                        </Disciplines>
                        <TTableItemTabName name='AbsW' />
                        <TTableItemTabName name={languages.result.toUpperCase()} />
                    </>
                )}
            </Content>
        </Container>
    );
});
export default TTableItem;
