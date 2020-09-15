import React, { memo } from 'react';
import { Container } from './style';
import { IPage } from './interfaces';
// import { ContextApp } from '../../state';

const Page: React.FC<IPage> = memo(({ trigger, inpoint, outpoint, children }) => {
    return (
        <Container trigger={trigger} inpoint={inpoint} outpoint={outpoint}>
            {children}
        </Container>
    );
});
export default Page;
