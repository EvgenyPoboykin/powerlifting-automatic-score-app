import React, { memo } from 'react';
import { Container } from './style';
import { IInput } from './interfaces';

const Input: React.FC<IInput> = memo(({ onChangeInput, value, onKeyDown }) => {
    return <Container onChange={onChangeInput} value={value} onKeyDown={onKeyDown}></Container>;
});
export default Input;
