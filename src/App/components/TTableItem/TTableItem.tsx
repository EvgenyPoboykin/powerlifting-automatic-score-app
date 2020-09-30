import React, { memo, useCallback, useContext } from 'react';
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
    const { languages, event, onDoubleClickAthlete } = useContext(ContextApp);

    const onDoubleClick = useCallback(() => onDoubleClickAthlete(athlete && athlete), [onDoubleClickAthlete, athlete]);

    const genderValue = athlete && athlete.gender_value;
    const idValue = athlete && athlete.id;
    const gritWidth = { sq: event.sq, bp: event.bp, dl: event.dl };

    return (
        <Container gender={genderValue} onDoubleClick={idValue ? onDoubleClick : undefined}>
            <ContainerSportsman>
                <ContainerSportsmanData gender={genderValue}>
                    <Gender gender={genderValue}></Gender>
                    {athlete !== undefined && genderValue ? (
                        <ContainerSportsmanDataName gender={genderValue}>
                            {athlete.firstName} {athlete.lastName}
                        </ContainerSportsmanDataName>
                    ) : (
                        <ContainerSportsmanDataName gender={genderValue}>{languages.list}</ContainerSportsmanDataName>
                    )}
                </ContainerSportsmanData>
            </ContainerSportsman>

            <Content>
                {athlete !== undefined && genderValue ? (
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
                        <TTableItemTabName name='CW' nameField='selfWeight' />
                        <TTableItemTabName name='SW' nameField='selfWeight' />
                        <TTableItemTabName name='AC' nameField='bornYear' />
                        <Disciplines gritWidth={gritWidth}>
                            <TAthleteDiscipline type={'toptable'} discipline='pss' show='sq' />
                            <TAthleteDiscipline type={'toptable'} discipline='gsl' show='bp' />
                            <TAthleteDiscipline type={'toptable'} discipline='ts' show='dl' />
                        </Disciplines>
                        <TTableItemTabName name='AbsW' nameField='abs_weight' />
                        <TTableItemTabName name={languages.result.toUpperCase()} nameField='abs_result' />
                    </>
                )}
            </Content>
        </Container>
    );
});
export default TTableItem;
