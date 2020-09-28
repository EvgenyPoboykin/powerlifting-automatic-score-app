import React, { memo, useContext } from 'react';
import {} from './style';
import {} from './interfaces';
import SelectorBox from '../SelectorBox';
import { ContextApp } from '../../state';

const Formulas = [
    { label: 'IPF (Classic)', value: 'IPF-Classic' },
    { label: 'IPF (Classic Bench)', value: 'IPF-Classic-Bench' },
    { label: 'IPF (Classic Equipped)', value: 'IPF-Classic-Equipped' },
    { label: 'IPF Classic Bench Equipped', value: 'IPF-Classic-Bench-Equipped' },
    { label: 'Wilks', value: 'Wilks' },
    { label: 'Glossbrenner', value: 'Glossbrenner' },
    { label: 'Reshel', value: 'Reshel' },
    { label: 'Schwartz / Malone', value: 'Schwartz-Malone' },
];

const TFormulasSelector: React.FC = memo(() => {
    const { event, SelectFormulaEvent } = useContext(ContextApp);

    const selectedOption = { label: event.label, value: event.value };

    return <SelectorBox selectedOption={selectedOption} items={Formulas} selectChange={SelectFormulaEvent} />;
});
export default TFormulasSelector;
