import React, { memo } from 'react';
import { Container, Button } from './style';
import { ITAddColumnBtn } from './interfaces';

const TAddColumnBtn: React.FC<ITAddColumnBtn> = memo(({ name, onClick, disabled }) => {
    return (
        <Container>
            <Button disabled={disabled} onClick={onClick}>
                {name}
            </Button>
        </Container>
    );
});
export default TAddColumnBtn;
