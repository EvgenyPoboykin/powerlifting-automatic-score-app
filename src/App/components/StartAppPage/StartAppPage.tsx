import React, { memo, useContext } from 'react';
import Page from '../Page';
import { Container } from './style';
import { IStartAppPage } from './interfaces';
import { ContextApp } from '../../state';

const StartAppPage: React.FC<IStartAppPage> = memo(({ name }) => {
    const { state, GoToTournament } = useContext(ContextApp);

    return (
        <Page trigger={state.settingsApp[name]} inpoint='0%' outpoint='-100%'>
            <Container>
                StartAppPage
                <button onClick={GoToTournament} style={{ height: '30px', pointerEvents: 'all' }}>
                    go in tournament
                </button>
            </Container>
        </Page>
    );
});
export default StartAppPage;
