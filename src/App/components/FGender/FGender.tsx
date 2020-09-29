import React, { memo, useContext } from 'react';
import {} from './style';
import { IFGender } from './interfaces';
import SelectorBox from '../SelectorBox';
import { ContextApp } from '../../state';

const FGender: React.FC<IFGender> = memo(() => {
    const { languages, athlete, ChangeFormGender } = useContext(ContextApp);

    const genderMap = [
        {
            label: languages.form.gender_male,
            value: 'MEN',
        },
        {
            label: languages.form.gender_female,
            value: 'WOMEN',
        },
    ];

    const getLabel = (value: string) => {
        if (value === 'MALE') return languages.form.gender_male;
        return languages.form.gender_female;
    };

    const selectedOption = {
        label: getLabel(athlete.gender_value),
        value: athlete.gender_value,
    };

    return <SelectorBox selectedOption={selectedOption} items={genderMap} selectChange={ChangeFormGender} />;
});
export default FGender;
