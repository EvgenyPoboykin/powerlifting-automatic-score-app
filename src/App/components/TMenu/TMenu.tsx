import React, { memo } from 'react';
import { Container } from './style';
import {} from './interfaces';
import TAddColumn from '../TAddColumn';
import TFormulasSelector from '../TFormulasSelector';

const TMenu: React.FC = memo(() => {
    return (
        <Container>
            <TAddColumn />
            <TFormulasSelector />
        </Container>
    );
});
export default TMenu;
