import React, { memo } from 'react';
import { Container, TextBtn } from './style';
import { IButton } from './interfaces';

const Button: React.FC<IButton> = memo(({ name, onClick, width, mode }) => {
    return (
        <Container width={width}>
            <TextBtn mode={mode} onClick={onClick}>
                {name}
            </TextBtn>
        </Container>
    );
});
export default Button;
