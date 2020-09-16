import React, { memo } from 'react';
import { Container, Icon } from './style';
import { IButtonArrow } from './interfaces';

import up from './images/angle-up.svg';
import down from './images/angle-down.svg';
import left from './images/angle-left.svg';
import right from './images/angle-right.svg';

const ButtonArrow: React.FC<IButtonArrow> = memo(({ directional, onClick }) => {
    const NewICon = () => {
        if (directional === 'up') {
            return up;
        } else if (directional === 'down') {
            return down;
        } else if (directional === 'right') {
            return right;
        } else {
            return left;
        }
    };
    return (
        <Container onClick={onClick}>
            <Icon src={NewICon()} />
        </Container>
    );
});
export default ButtonArrow;
