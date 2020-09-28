import React, { memo } from 'react';
import { Container } from './style';
import { ITTableItemTabName } from './interfaces';

const TTableItemTabName: React.FC<ITTableItemTabName> = memo(({ name }) => {
    return <Container>{name}</Container>;
});
export default TTableItemTabName;
