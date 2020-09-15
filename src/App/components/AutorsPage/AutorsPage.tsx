import React, { memo } from 'react';
import Page from '../Page';
import { Container } from './style';
import { IAutorsPage } from './interfaces';

const AutorsPage: React.FC<IAutorsPage> = memo(({ name }) => {
    return (
        <Page>
            <Container>AutorsPage</Container>
        </Page>
    );
});
export default AutorsPage;
