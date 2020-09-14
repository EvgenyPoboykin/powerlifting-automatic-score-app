import React, { memo } from 'react';
import App_Logic from './logic';
import { Container } from './style';
import {} from './interfaces';

const App: React.FC = memo(() => {
    const [] = App_Logic();
    return <Container>Works!</Container>;
});
export default App;
