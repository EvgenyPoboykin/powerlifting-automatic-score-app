import React, { memo, useContext, useState } from 'react';
import { Container } from './style';
import {} from './interfaces';
import FFormLeftSection from '../FFormLeftSection';
import FFormRightSection from '../FFormRightSection';
import { ContextApp } from '../../state';

const FForm: React.FC = memo(() => {
    const { sportsman } = useContext(ContextApp);
    const [state, SetState] = useState<any>(sportsman);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        SetState((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const selectChange = (item: any | {}) => {
        SetState((prev: any) => ({ ...prev, gender_label: item.label, gender_value: item.value }));
    };

    console.log(state);

    return (
        <Container>
            <FFormLeftSection state={state} onChange={onChange} selectChange={selectChange} />
            <FFormRightSection state={state} onChange={onChange} />
        </Container>
    );
});
export default FForm;
