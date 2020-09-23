import React, { memo, useContext } from 'react';
import { Container } from './style';
import { IInput } from './interfaces';
import { ContextApp } from '../../state';

const Input: React.FC<IInput> = memo(({ nameField, inputRef, placeholder, onChange, defaultValue, disable }) => {
    const { SetFocusinput } = useContext(ContextApp);
    return (
        <Container
            disable={disable}
            name={nameField}
            onFocus={() => SetFocusinput(true)}
            onBlur={() => SetFocusinput(false)}
            ref={inputRef}
            placeholder={placeholder}
            value={defaultValue || ''}
            onChange={onChange}
        ></Container>
    );
});
export default Input;
