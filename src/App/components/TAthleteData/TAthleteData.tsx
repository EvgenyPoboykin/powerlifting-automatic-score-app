import React, { memo } from 'react';
import { Container, Content } from './style';
import { ITAthleteData } from './interfaces';

const TAthleteData: React.FC<ITAthleteData> = memo(({ data }) => {
    return (
        <Container>
            <Content>{data}</Content>
        </Container>
    );
});
export default TAthleteData;
