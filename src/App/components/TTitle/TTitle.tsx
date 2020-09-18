import React, { memo, useContext } from 'react';
import { Container, Content } from './style';
import {} from './interfaces';
import { ContextApp } from '../../state';

const TTitle: React.FC = memo(() => {
    const { state } = useContext(ContextApp);
    return (
        <Container>
            <Content>{state.event.event}</Content>
        </Container>
    );
});
export default TTitle;
