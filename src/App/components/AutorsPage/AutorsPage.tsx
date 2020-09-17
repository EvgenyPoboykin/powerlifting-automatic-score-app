import React, { memo } from 'react';
import { Container } from './style';
import { IAutorsPage } from './interfaces';

const AutorsPage: React.FC<IAutorsPage> = memo(() => {
    return <Container>AutorsPage content</Container>;
});
export default AutorsPage;
