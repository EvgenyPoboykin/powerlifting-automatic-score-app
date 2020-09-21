import React, { memo, useContext } from 'react';
import Page from '../Page';
import { Container, Content, Frame } from './style';
import { IFormAddSportsmanPage } from './interfaces';
import { ContextApp } from '../../state';
import FRadioBtns from '../FRadioBtns';
import FBottomBtns from '../FBottomBtns';
import FForm from '../FForm';

const FormAddSportsmanPage: React.FC<IFormAddSportsmanPage> = memo(({ name }) => {
    const { settings } = useContext(ContextApp);
    return (
        <Page trigger={settings[name]} inpoint='0%' outpoint='100%'>
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
export default FormAddSportsmanPage;
