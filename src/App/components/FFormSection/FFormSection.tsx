import React, { memo } from 'react';
import { Container } from './style';
import { IFFormSection } from './interfaces';

const FFormSection: React.FC<IFFormSection> = memo(({ children }) => {
    return <Container>{children}</Container>;
});
export default FFormSection;
