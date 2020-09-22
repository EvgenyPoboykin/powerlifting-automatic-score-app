import React, { memo } from 'react';
import { Container } from './style';
import { IFInput } from './interfaces';
import Input from '../Input';

const FInput: React.FC<IFInput> = memo(({ placeholder, defaultValue, nameField, onChange }) => {
    return (
        <Container>
            <Input placeholder={placeholder} defaultValue={defaultValue} nameField={nameField} onChange={onChange} />
        </Container>
    );
});
export default FInput;
