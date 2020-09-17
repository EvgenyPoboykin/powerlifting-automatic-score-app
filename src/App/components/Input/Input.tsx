import React, { memo, useContext } from 'react';
import { Container } from './style';
import { IInput } from './interfaces';
import { ContextApp } from '../../state';

const Input: React.FC<IInput> = memo(({ onKeyDown, onChange, value, placeholder }) => {
    const { SetFocusInput } = useContext(ContextApp);
    return (
        <Container
            onFocus={() => SetFocusInput(true)}
            onBlur={() => SetFocusInput(false)}
            placeholder={placeholder}
            onKeyDown={onKeyDown}
            onChange={(e) => onChange(e.target.value)}
            value={value}
        ></Container>
    );
});
export default Input;
