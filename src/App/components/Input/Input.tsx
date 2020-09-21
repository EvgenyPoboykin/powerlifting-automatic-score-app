import React, { memo, useContext } from 'react';
import { Container } from './style';
import { IInput } from './interfaces';
import { ContextApp } from '../../state';

const Input: React.FC<IInput> = memo(({ inputRef, placeholder, onChange }) => {
    const { SetFocusinput } = useContext(ContextApp);
    return (
        <Container
            onFocus={() => SetFocusinput(true)}
            onBlur={() => SetFocusinput(false)}
            ref={inputRef}
            placeholder={placeholder}
            onChange={(e) => onChange(e.currentTarget!.value)}
        ></Container>
    );
});
export default Input;
