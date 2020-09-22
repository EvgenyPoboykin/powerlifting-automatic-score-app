import React, { memo, useContext } from 'react';
import {} from './style';
import {} from './interfaces';
import SelectorBox from '../SelectorBox';
import { ContextApp } from '../../state';

const formules = [
    { label: 'IPF (Classic)', value: 'IPF-Classic' },
    { label: 'IPF (Classic Bench)', value: 'IPF-Classic-Bench' },
    { label: 'IPF (Classic Equipped)', value: 'IPF-Classic-Equipped' },
    { label: 'IPF Classic Bench Equipped', value: 'IPF-Classic-Bench-Equipped' },
    { label: 'Wilks', value: 'Wilks' },
    { label: 'Glossbrenner', value: 'Glossbrenner' },
    { label: 'Reshel', value: 'Reshel' },
    { label: 'Schwartz / Malone', value: 'Schwartz-Malone' },
];

const TFormulesSelector: React.FC = memo(() => {
    const { event } = useContext(ContextApp);
    const { label, value } = event;
    const selectedOption = { label: label, value: value };
    return <SelectorBox selectedOption={selectedOption} items={formules} selectChange={(item) => console.log(item)} />;
});
export default TFormulesSelector;
