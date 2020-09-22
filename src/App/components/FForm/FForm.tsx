import React, { memo, useState } from 'react';
import { Container } from './style';
import {} from './interfaces';
import FFormLeftSection from '../FFormLeftSection';
import FFormRightSection from '../FFormRightSection';
import { sportsmanInitial } from './sportsmanInitial';

const FForm: React.FC = memo(() => {
    const [state, SetState] = useState<any>(sportsmanInitial);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        SetState((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const selectChange = (item: any | {}) => {
        SetState((prev: any) => ({ ...prev, gender_label: item.label, gender_value: item.value }));
    };

    return (
        <Container>
            <FFormLeftSection state={state} onChange={onChange} selectChange={selectChange} />
            <FFormRightSection state={state} onChange={onChange} />
        </Container>
    );
});
export default FForm;
