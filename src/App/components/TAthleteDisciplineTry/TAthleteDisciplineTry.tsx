import React, { memo } from 'react';
import { Container } from './style';
import { ITAthleteDisciplineTry } from './interfaces';

const TAthleteDisciplineTry: React.FC<ITAthleteDisciplineTry> = memo(({ name }) => {
    return <Container>{name}</Container>;
});
export default TAthleteDisciplineTry;
