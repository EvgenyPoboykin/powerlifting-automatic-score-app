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
import TSportsmanWeightCategory from '../TSportsmanWeightCategory';
import TSportsmanSelfWeightCategory from '../TSportsmanSelfWeightCategory';
import TTableItemTabName from '../TTableItemTabName';
import { ITTableItem } from './interfaces';
import { ContextApp } from '../../state';
import TSportsmanAgeCategory from '../TSportsmanAgeCategory';
import TDiscipline from '../TDiscipline';

const TTableItem: React.FC<ITTableItem> = memo(({ sportsman }) => {
    const genderValue = sportsman && sportsman.gender_value;
    console.log(genderValue);
    const { languages, event } = useContext(ContextApp);

    const gritWidth = { sq: event.sq, bp: event.bp, dl: event.dl };

    console.log({ pss: event.sq, gsl: event.gsl, ts: event.ts });
    return (
        <Container gender={genderValue}>
            <ContainerSportsman>
                <ContainerSportsmanData gender={genderValue}>
                    <Gender gender={genderValue}></Gender>
                    {genderValue ? (
                        <ContainerSportsmanDataName gender={genderValue}>
                            {sportsman.firstName} {sportsman.lastName}
                        </ContainerSportsmanDataName>
                    ) : (
                        <ContainerSportsmanDataName gender={genderValue}>{languages.list}</ContainerSportsmanDataName>
                    )}
                </ContainerSportsmanData>
            </ContainerSportsman>

            <Content>
                {genderValue ? (
                    <>
                        <TSportsmanWeightCategory
                            gender={genderValue}
                            weight={sportsman.selfWeight}
                            value={event.value}
                        />
                        <TSportsmanSelfWeightCategory weight={sportsman.selfWeight} />
                        <TSportsmanAgeCategory age={sportsman.bornYear} />
                        <Disciplines gritWidth={gritWidth}>
                            <TDiscipline discipline='pss' show='sq' data={sportsman} />
                            <TDiscipline discipline='gsl' show='bp' data={sportsman} />
                            <TDiscipline discipline='ts' show='dl' data={sportsman} />
                        </Disciplines>
                        <TSportsmanSelfWeightCategory weight={sportsman.abs_weight} />
                        <TSportsmanSelfWeightCategory weight={sportsman.abs_result} />
                    </>
                ) : (
                    <>
                        <TTableItemTabName name='CW' />
                        <TTableItemTabName name='SW' />
                        <TTableItemTabName name='AC' />
                        <Disciplines gritWidth={gritWidth}>
                            <TDiscipline type={'toptable'} discipline='pss' show='sq' />
                            <TDiscipline type={'toptable'} discipline='gsl' show='bp' />
                            <TDiscipline type={'toptable'} discipline='ts' show='dl' />
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
