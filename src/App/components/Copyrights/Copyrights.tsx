import React, { memo } from 'react';
import { Container, ContainerText } from './style';

const Copyrights: React.FC = memo(() => {
    return (
        <Container>
            <ContainerText>Copyright © Poboykin Evgeny, 2020</ContainerText>
        </Container>
    );
});
export default Copyrights;
