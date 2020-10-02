import React, { memo, useContext } from 'react';
import { Container, Content } from './style';
import {} from './interfaces';
import { ContextApp } from '../../state';

const TTitle: React.FC = memo(() => {
    const {
        event: { eventName },
    } = useContext(ContextApp);
    return (
        <Container>
            <Content>{eventName}</Content>
        </Container>
    );
});
export default TTitle;
