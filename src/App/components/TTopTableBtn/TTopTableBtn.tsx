import React, { memo, useCallback } from 'react';
import { Container, Content } from './style';
import { ITTopTableBtn } from './interfaces';

const TTopTableBtn: React.FC<ITTopTableBtn> = memo(({ name, field }) => {
    const Sort = useCallback(() => console.log(field), [field]);
    return (
        <Container onClick={Sort}>
            <Content>{name}</Content>
        </Container>
    );
});
export default TTopTableBtn;
