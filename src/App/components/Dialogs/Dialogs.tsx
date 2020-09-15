import React, { memo, useContext } from 'react';
import Page from '../Page';
import { Container, ContainerBg } from './style';
import { IDialogs } from './interfaces';
import { ContextApp } from '../../state';

const Dialogs: React.FC<IDialogs> = memo(({ name }) => {
    const { state, CloseDialog } = useContext(ContextApp);
    return (
        <Page trigger={state.settingsApp[name]} inpoint='0%' outpoint='-105%' indexZ={10}>
            <Container>
                AutorsPage
                <button onClick={CloseDialog} style={{ height: '30px', pointerEvents: 'all' }}>
                    close autors
                </button>
                <ContainerBg></ContainerBg>
            </Container>
        </Page>
    );
});
export default Dialogs;
