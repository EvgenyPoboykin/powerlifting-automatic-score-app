import React, { memo } from 'react';
import { Container } from './style';
import {} from './interfaces';
import FFormLeftSection from '../FFormLeftSection';
import FFormRightSection from '../FFormRightSection';

const FForm: React.FC = memo(() => {
    return (
        <Container>
            <FFormLeftSection />
            <FFormRightSection />
        </Container>
    );
});
export default FForm;
