import React, { memo, useContext } from 'react';
import { Container, Content } from './style';
import { IFFormLeftSection } from './interfaces';
import FFormSection from '../FFormSection';
import FInput from '../FInput';
import { ContextApp } from '../../state';
import FGender from '../FGender';

const FFormLeftSection: React.FC<IFFormLeftSection> = memo(() => {
    const { languages, event } = useContext(ContextApp);

    return (
        <FFormSection>
            <Container>
                <FInput placeholder={languages.form.first_name} nameField='firstName' />

                <FInput placeholder={languages.form.last_name} nameField='lastName' />

                <Content>
                    <FGender />

                    <FInput nameField='age' placeholder='1990' type='int' />

                    <FInput nameField='selfWeight' placeholder='00.0' type='float' />
                </Content>

                {event && event.card === 1 ? (
                    <>
                        <FInput nameField='country' placeholder={languages.form.country} />

                        <FInput nameField='city' placeholder={languages.form.city} />

                        <FInput nameField='coach' placeholder={languages.form.coach} />

                        <FInput nameField='team' placeholder={languages.form.team} />
                    </>
                ) : null}
            </Container>
        </FFormSection>
    );
});
export default FFormLeftSection;
