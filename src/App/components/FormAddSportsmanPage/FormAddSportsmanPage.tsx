import React, { memo, useContext } from 'react';
import Page from '../Page';
import { Container } from './style';
import { IFormAddSportsmanPage } from './interfaces';
import { ContextApp } from '../../state';

const FormAddSportsmanPage: React.FC<IFormAddSportsmanPage> = memo(({ name }) => {
    const { state, GoToTournamentFromForm } = useContext(ContextApp);
    return (
        <Page trigger={state.settingsApp[name]} inpoint='0%' outpoint='100%'>
            <Container>
                FormAddSportsmanPage
                <button onClick={GoToTournamentFromForm} style={{ height: '30px', pointerEvents: 'all' }}>
                    go in tournament
                </button>
            </Container>
        </Page>
    );
});
export default FormAddSportsmanPage;
