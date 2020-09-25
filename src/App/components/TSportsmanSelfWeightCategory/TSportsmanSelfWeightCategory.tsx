import React, { memo } from 'react';
import { Container, Content } from './style';
import { ITSportsmanSelfWeightCategory } from './interfaces';

const TSportsmanSelfWeightCategory: React.FC<ITSportsmanSelfWeightCategory> = memo(({ weight }) => {
    return (
        <Container>
            <Content>{weight}</Content>
        </Container>
    );
});
export default TSportsmanSelfWeightCategory;
