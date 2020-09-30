import React, { memo } from 'react';
import { Container } from './style';
import {} from './interfaces';
import { TopBar, Layouts, Copyrights } from './components';
import Context from './logic';

const App: React.FC = memo(() => {
    return (
        <Context>
            <Container>
                <TopBar />
                <Layouts />
                <Copyrights />
            </Container>
        </Context>
    );
});
export default App;
