import React, { memo } from 'react';
import { Container, Content, Logo } from './style';
import {} from './interfaces';

const TLogo: React.FC = memo(() => {
    return (
        <Container>
            <Content>
                <Logo />
            </Content>
        </Container>
    );
});
export default TLogo;
