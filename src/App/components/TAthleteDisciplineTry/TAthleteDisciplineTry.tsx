import React, { memo, useCallback } from 'react';
import { Container } from './style';
import { ITAthleteDisciplineTry } from './interfaces';

const TAthleteDisciplineTry: React.FC<ITAthleteDisciplineTry> = memo(({ type, name, SortBy }) => {
    const Sort = useCallback(() => {
        SortBy(`${name}_weight`);
        console.log(`${name}_weight`);
    }, [SortBy, name]);
    return type ? <Container>{name}</Container> : <Container onClick={Sort}>{name}</Container>;
});
export default TAthleteDisciplineTry;
