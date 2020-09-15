import React, { memo } from 'react';
import { Container } from './style';
import { IPage } from './interfaces';
// import { ContextApp } from '../../state';

const Page: React.FC<IPage> = memo(({ indexZ, trigger, inpoint, outpoint, children }) => {
    return (
        <Container trigger={trigger} inpoint={inpoint} outpoint={outpoint} indexZ={indexZ}>
            {children}
        </Container>
    );
});
export default Page;
