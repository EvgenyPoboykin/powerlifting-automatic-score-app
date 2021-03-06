import React, { memo, useContext } from 'react';
import Page from '../Page';
import { Container, ContainerBg } from './style';
import { IDialogs } from './interfaces';
import { ContextApp } from '../../state';
import ButtonArrow from '../ButtonArrow';
import AuthorsPage from '../AuthorsPage';

const Dialogs: React.FC<IDialogs> = memo(({ name }) => {
    const { settings, GoDialog } = useContext(ContextApp);
    return (
        <Page trigger={settings[name]} inpoint='0%' outpoint='-100%' indexZ={10}>
            <Container>
                <AuthorsPage />
                <ButtonArrow directional='up' onClick={GoDialog} />
                <ContainerBg></ContainerBg>
            </Container>
        </Page>
    );
});
export default Dialogs;
