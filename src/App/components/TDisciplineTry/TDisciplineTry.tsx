import React, { memo, useCallback } from 'react';
import { Container } from './style';
import { ITDisciplineTry } from './interfaces';

const TDisciplineTry: React.FC<ITDisciplineTry> = memo(({ name, SortBy }) => {
    const Sort = useCallback(() => {
        SortBy(`${name}_weight`);
        console.log(`${name}_weight`);
    }, [SortBy, name]);
    return <Container onClick={Sort}>{name}</Container>;
});
export default TDisciplineTry;
