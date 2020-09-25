import React, { memo } from 'react';
import { Container, Content } from './style';
import { ITSportsmanWeightCategory } from './interfaces';
import weightCategoryFormula from './logic';

const TSportsmanWeightCategory: React.FC<ITSportsmanWeightCategory> = memo(({ weight, gender, value }) => {
    return (
        <Container>
            <Content>{weightCategoryFormula(weight, gender, value)}</Content>
        </Container>
    );
});
export default TSportsmanWeightCategory;
