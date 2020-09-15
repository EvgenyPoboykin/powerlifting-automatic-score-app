import React, { memo, useContext } from 'react';
import Page from '../Page';
import { Container, ContainerBg } from './style';
import { IAutorsPage } from './interfaces';
import { ContextApp } from '../../state';

const AutorsPage: React.FC<IAutorsPage> = memo(({ name }) => {
    const { state, CloseAutors } = useContext(ContextApp);
    return (
        <Page trigger={state.settingsApp[name]} inpoint='0%' outpoint='-105%'>
            <Container>
                AutorsPage
                <button onClick={CloseAutors} style={{ height: '30px', pointerEvents: 'all' }}>
                    close autors
                </button>
                <ContainerBg></ContainerBg>
            </Container>
        </Page>
    );
});
export default AutorsPage;
