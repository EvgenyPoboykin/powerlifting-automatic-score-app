import React, { memo, useContext } from 'react';
import { Container, Content } from './style';
import { IFFormLeftSection } from './interfaces';
import FFormSection from '../FFormSection';
import Input from '../Input';
import { ContextApp } from '../../state';
import SelectorBox from '../SelectorBox';

const FFormLeftSection: React.FC<IFFormLeftSection> = memo(({ selectChange, state, onChange }) => {
    const { languages, event } = useContext(ContextApp);

    const gender = [
        {
            label: languages.gender_male,
            value: 'MEN',
        },
        {
            label: languages.gender_female,
            value: 'WOMEN',
        },
    ];

    const selectedOption = {
        label: languages.gender_male,
        value: 'MEN',
    };

    return (
        <FFormSection>
            <Container>
                <Content>
                    <Input
                        placeholder={languages.f_first_name}
                        defaultValue={state.firstName}
                        nameField='firstName'
                        onChange={onChange}
                    />
                </Content>
                <Content>
                    <Input
                        placeholder={languages.f_last_name}
                        defaultValue={state.lastName}
                        nameField='lastName'
                        onChange={onChange}
                    />
                </Content>
                <Content>
                    <Content>
                        <SelectorBox selectedOption={selectedOption} items={gender} selectChange={selectChange} />
                    </Content>
                    <Content>
                        <Input onChange={onChange} defaultValue={state.age} nameField='age' placeholder='1990' />
                    </Content>
                    <Content>
                        <Input
                            onChange={onChange}
                            defaultValue={state.selfWeight}
                            nameField='selfWeight'
                            placeholder='00.0'
                        />
                    </Content>
                </Content>

                {event && event.card === 1 ? (
                    <>
                        <Content>
                            <Input
                                onChange={onChange}
                                defaultValue={state.country}
                                nameField='country'
                                placeholder={languages.f_country}
                            />
                        </Content>
                        <Content>
                            <Input
                                onChange={onChange}
                                defaultValue={state.city}
                                nameField='city'
                                placeholder={languages.f_city}
                            />
                        </Content>
                        <Content>
                            <Input
                                onChange={onChange}
                                defaultValue={state.coach}
                                nameField='coach'
                                placeholder={languages.f_coach}
                            />
                        </Content>
                        <Content>
                            <Input
                                onChange={onChange}
                                defaultValue={state.team}
                                nameField='team'
                                placeholder={languages.f_team}
                            />
                        </Content>
                    </>
                ) : null}
            </Container>
        </FFormSection>
    );
});
export default FFormLeftSection;
