import React, { memo } from 'react';
import { Container } from './style';
import { IInput } from './interfaces';

const Input: React.FC<IInput> = memo(({ onKeyDown, onChange, value, placeholder }) => {
    return (
        <Container
            placeholder={placeholder}
            onKeyDown={onKeyDown}
            onChange={(e) => onChange(e.target.value)}
            value={value}
        ></Container>
    );
});
export default Input;
