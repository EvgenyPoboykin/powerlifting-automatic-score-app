import React, { memo } from 'react';
import { Container, Content } from './style';
import {} from './interfaces';
import TTitle from '../TTitle';
import TLogo from '../TLogo';

const TournamentTopbar: React.FC = memo(() => {
    return (
        <Container>
            <Content>
                <TTitle />
                <TLogo />
            </Content>
        </Container>
    );
});
export default TournamentTopbar;
