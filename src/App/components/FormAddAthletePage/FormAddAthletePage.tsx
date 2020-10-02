import React, { memo } from 'react';
import Page from '../Page';
import { Container, Content, Frame } from './style';
import { IFormAddAthletePage } from './interfaces';
import FRadioBtns from '../FRadioBtns';
import FBottomBtns from '../FBottomBtns';
import FForm from '../FForm';

const FormAddAthletePage: React.FC<IFormAddAthletePage> = memo(() => {
    return (
        <Page>
            <Container>
                <Content>
                    <Frame>
                        <FRadioBtns />
                        <FForm />
                        <FBottomBtns />
                    </Frame>
                </Content>
            </Container>
        </Page>
    );
});
export default FormAddAthletePage;

// trigger={settings[name]} inpoint='0%' outpoint='100%'
