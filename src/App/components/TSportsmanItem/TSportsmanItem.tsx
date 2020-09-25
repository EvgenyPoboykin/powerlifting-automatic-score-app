import React, { memo, useContext } from 'react';
import { Container, User, UserName, Data } from './style';
import { ITSportsmanItem } from './interfaces';
import TSportsmanWeightCategory from '../TSportsmanWeightCategory';
import { ContextApp } from '../../state';
import TSportsmanAgeCategory from '../TSportsmanAgeCategory';
import TSportsmanSelfWeightCategory from '../TSportsmanSelfWeightCategory';

const TSportsmanItem: React.FC<ITSportsmanItem> = memo(({ sportsman }) => {
    const { event } = useContext(ContextApp);
    return (
        <Container>
            <User>
                <UserName>
                    {sportsman.firstName} {sportsman.lastName}
                </UserName>
            </User>
            {/* <Data> */}
            <TSportsmanWeightCategory
                weight={sportsman.selfWeght}
                gender={sportsman.gender_value}
                value={event.value}
            />
            <TSportsmanSelfWeightCategory weight={sportsman.selfWeght} />
            <TSportsmanAgeCategory age={sportsman.bornYear} />
            {/* </Data> */}
        </Container>
    );
});
export default TSportsmanItem;
