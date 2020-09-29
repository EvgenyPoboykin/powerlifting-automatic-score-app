import React, { memo } from 'react';
import { Container, Content } from './style';
import { ITAthleteWeightCategory } from './interfaces';
import weightCategoryFormula from './logic';

const TAthleteWeightCategory: React.FC<ITAthleteWeightCategory> = memo(({ weight, gender, value }) => {
    return (
        <Container>
            <Content>{weightCategoryFormula(weight, gender, value)}</Content>
        </Container>
    );
});
export default TAthleteWeightCategory;
