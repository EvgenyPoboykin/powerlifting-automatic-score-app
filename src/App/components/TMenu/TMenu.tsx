import React, { memo } from 'react';
import { Container } from './style';
import {} from './interfaces';
import TAddColumn from '../TAddColumn';
import TFormulesSelector from '../TFormulesSelector';

const TMenu: React.FC = memo(() => {
    return (
        <Container>
            <TAddColumn />
            <TFormulesSelector />
        </Container>
    );
});
export default TMenu;
