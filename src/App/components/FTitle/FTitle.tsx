import React, { memo } from 'react';
import { Container } from './style';
import { IFTitle } from './interfaces';

const FTitle: React.FC<IFTitle> = memo(({ name }) => {
    return <Container>{name}</Container>;
});
export default FTitle;
