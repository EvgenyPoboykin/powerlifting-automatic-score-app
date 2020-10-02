import React, { memo, useContext } from 'react';
import { Container, Content } from './style';
import { IFFormLeftSection } from './interfaces';
import FFormSection from '../FFormSection';
import FInput from '../FInput';
import { ContextApp } from '../../state';
import FGender from '../FGender';

const FFormLeftSection: React.FC<IFFormLeftSection> = memo(() => {
    const {
        languages: {
            form: { first_name, last_name, country, city, coach, team },
        },
        event: { card },
    } = useContext(ContextApp);

    return (
        <FFormSection>
            <Container>
                <FInput placeholder={first_name} nameField='firstName' />

                <FInput placeholder={last_name} nameField='lastName' />

                <Content>
                    <FGender />

                    <FInput nameField='bornYear' placeholder='1990' type='int' />

                    <FInput nameField='selfWeight' placeholder='00.0' type='float' />
                </Content>

                {card === 1 ? (
                    <>
                        <FInput nameField='country' placeholder={country} />

                        <FInput nameField='city' placeholder={city} />

                        <FInput nameField='coach' placeholder={coach} />

                        <FInput nameField='team' placeholder={team} />
                    </>
                ) : null}
            </Container>
        </FFormSection>
    );
});
export default FFormLeftSection;
