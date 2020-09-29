import React, { memo, useContext } from 'react';
import { Container } from './style';
import { IFInput } from './interfaces';
import Input from '../Input';
import { ContextApp } from '../../state';

const FInput: React.FC<IFInput> = memo(({ placeholder, nameField, type, disable }) => {
    const { athlete, SetAthlete } = useContext(ContextApp);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        e.persist();
        if (type === 'int') {
            const intValue = parseInt(value);
            SetAthlete((prev: any) => ({ ...prev, [nameField]: intValue }));
        } else if (type === 'float') {
            const floatValue = parseFloat(value);
            SetAthlete((prev: any) => ({ ...prev, [nameField]: floatValue }));
        } else {
            SetAthlete((prev: any) => ({ ...prev, [nameField]: value }));
        }
    };
    return (
        <Container>
            <Input
                disable={disable}
                placeholder={placeholder}
                defaultValue={athlete[nameField]}
                nameField={nameField}
                onChange={onChange}
            />
        </Container>
    );
});
export default FInput;
