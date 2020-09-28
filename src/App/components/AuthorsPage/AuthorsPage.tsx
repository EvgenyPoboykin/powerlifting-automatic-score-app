import React, { memo } from 'react';
import { Container } from './style';
import { IAuthorsPage } from './interfaces';

const AuthorsPage: React.FC<IAuthorsPage> = memo(() => {
    return <Container>AuthorsPage content</Container>;
});
export default AuthorsPage;
