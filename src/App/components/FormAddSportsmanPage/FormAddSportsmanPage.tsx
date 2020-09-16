import React, { memo, useContext } from 'react';
import Page from '../Page';
import { Container } from './style';
import { IFormAddSportsmanPage } from './interfaces';
import { ContextApp } from '../../state';
import ButtonArrow from '../ButtonArrow';

const FormAddSportsmanPage: React.FC<IFormAddSportsmanPage> = memo(({ name }) => {
    const { state, GoToTournamentFromForm } = useContext(ContextApp);
    return (
        <Page trigger={state.settingsApp[name]} inpoint='0%' outpoint='100%'>
            <Container>
                <div>FormAddSportsmanPage</div>
                <ButtonArrow directional='up' onClick={GoToTournamentFromForm} />
            </Container>
        </Page>
    );
});
export default FormAddSportsmanPage;
