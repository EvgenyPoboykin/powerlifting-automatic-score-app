import React, { memo, useContext } from 'react';
import {} from './style';
import { IFGender } from './interfaces';
import SelectorBox from '../SelectorBox';
import { ContextApp } from '../../state';

const FGender: React.FC<IFGender> = memo(() => {
    const {
        languages: {
            form: { gender_female, gender_male },
        },
        athlete: { gender_value },
        ChangeFormGender,
    } = useContext(ContextApp);

    const genderMap = [
        {
            label: gender_male,
            value: 'MEN',
        },
        {
            label: gender_female,
            value: 'WOMEN',
        },
    ];

    const getLabel = (value: string) => {
        if (value === 'MALE') return gender_male;
        return gender_female;
    };

    const selectedOption = {
        label: getLabel(gender_value),
        value: gender_value,
    };

    return <SelectorBox selectedOption={selectedOption} items={genderMap} selectChange={ChangeFormGender} />;
});
export default FGender;
