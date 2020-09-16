import React, { memo, useContext } from 'react';
import Page from '../Page';
import { Container, ContainerBg } from './style';
import { IDialogs } from './interfaces';
import { ContextApp } from '../../state';
import ButtonArrow from '../ButtonArrow';

const Dialogs: React.FC<IDialogs> = memo(({ name }) => {
    const { state, CloseDialog } = useContext(ContextApp);
    return (
        <Page trigger={state.settingsApp[name]} inpoint='0%' outpoint='-100%' indexZ={10}>
            <Container>
                AutorsPage
                <ButtonArrow directional='up' onClick={CloseDialog} />
                <ContainerBg></ContainerBg>
            </Container>
        </Page>
    );
});
export default Dialogs;
