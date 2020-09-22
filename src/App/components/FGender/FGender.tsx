import React, { memo, useContext } from 'react';
import {} from './style';
import { IFGender } from './interfaces';
import SelectorBox from '../SelectorBox';
import { ContextApp } from '../../state';

const FGender: React.FC<IFGender> = memo(({ selectChange }) => {
    const { languages } = useContext(ContextApp);

    const gender = [
        {
            label: languages.form.gender_male,
            value: 'MEN',
        },
        {
            label: languages.form.gender_female,
            value: 'WOMEN',
        },
    ];

    const selectedOption = {
        label: languages.form.gender_male,
        value: 'MEN',
    };

    return <SelectorBox selectedOption={selectedOption} items={gender} selectChange={selectChange} />;
});
export default FGender;
