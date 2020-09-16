import React, { memo, useContext } from 'react';
import Page from '../Page';
import { Container } from './style';
import { IStartAppPage } from './interfaces';
import { ContextApp } from '../../state';
import Button from '../Button';

const StartAppPage: React.FC<IStartAppPage> = memo(({ name }) => {
    const { state, GoToTournament } = useContext(ContextApp);

    return (
        <Page trigger={state.settingsApp[name]} inpoint='0%' outpoint='-100%'>
            <Container>
                <Button mode='red' onClick={GoToTournament} name='create event' width={170}></Button>
            </Container>
        </Page>
    );
});
export default StartAppPage;
