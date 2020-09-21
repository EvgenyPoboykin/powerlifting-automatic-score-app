import React, { memo } from 'react';
import { Container, Checkmark, Radio } from './style';
import { IFRadioBtn } from './interfaces';

const FRadioBtn: React.FC<IFRadioBtn> = memo(({ defaultValue, defaultChecked, name }) => {
    return (
        <Container>
            <Radio value={defaultValue} defaultChecked={defaultChecked} />
            <Checkmark>{name}</Checkmark>
        </Container>
    );
});
export default FRadioBtn;
