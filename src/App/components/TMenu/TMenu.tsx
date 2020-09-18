import React, { memo } from 'react';
import { Container } from './style';
import {} from './interfaces';
import TAddColumn from '../TAddColumn';

const TMenu: React.FC = memo(() => {
    return (
        <Container>
            <TAddColumn />
        </Container>
    );
});
export default TMenu;
