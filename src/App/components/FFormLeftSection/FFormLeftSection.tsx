import React, { memo, useContext } from 'react';
import { Container, Content } from './style';
import { IFFormLeftSection } from './interfaces';
import FFormSection from '../FFormSection';
import FInput from '../FInput';
import { ContextApp } from '../../state';
import FGender from '../FGender';

const FFormLeftSection: React.FC<IFFormLeftSection> = memo(({ selectChange, state, onChange }) => {
    const { languages, event } = useContext(ContextApp);

    return (
        <FFormSection>
            <Container>
                <FInput
                    placeholder={languages.form.first_name}
                    defaultValue={state.firstName}
                    nameField='firstName'
                    onChange={onChange}
                />

                <FInput
                    placeholder={languages.form.last_name}
                    defaultValue={state.lastName}
                    nameField='lastName'
                    onChange={onChange}
                />

                <Content>
                    <FGender selectChange={selectChange} />

                    <FInput onChange={onChange} defaultValue={state.age} nameField='age' placeholder='1990' />

                    <FInput
                        onChange={onChange}
                        defaultValue={state.selfWeight}
                        nameField='selfWeight'
                        placeholder='00.0'
                    />
                </Content>

                {event && event.card === 1 ? (
                    <>
                        <FInput
                            onChange={onChange}
                            defaultValue={state.country}
                            nameField='country'
                            placeholder={languages.form.country}
                        />

                        <FInput
                            onChange={onChange}
                            defaultValue={state.city}
                            nameField='city'
                            placeholder={languages.form.city}
                        />

                        <FInput
                            onChange={onChange}
                            defaultValue={state.coach}
                            nameField='coach'
                            placeholder={languages.form.coach}
                        />

                        <FInput
                            onChange={onChange}
                            defaultValue={state.team}
                            nameField='team'
                            placeholder={languages.form.team}
                        />
                    </>
                ) : null}
            </Container>
        </FFormSection>
    );
});
export default FFormLeftSection;
