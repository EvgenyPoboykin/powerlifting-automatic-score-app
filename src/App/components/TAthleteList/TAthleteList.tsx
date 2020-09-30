import React, { memo } from 'react';
import { Container } from './style';
import { ITAthleteList } from './interfaces';

import TTableItem from '../TTableItem';

const TAthleteList: React.FC<ITAthleteList> = ({ athletesList }) => {
    return (
        <Container>
            {athletesList && athletesList.map((athlete: any) => <TTableItem key={athlete.id} athlete={athlete} />)}
        </Container>
    );
};
export default memo(TAthleteList, (prevProps: any, nextProps: any) => {
    if (prevProps !== nextProps) return false;
    return true;
});
