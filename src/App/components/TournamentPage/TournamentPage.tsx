import React, { memo, useContext } from 'react';
import Page from '../Page';
import { Container } from './style';
import { ITournamentPage } from './interfaces';
import { ContextApp } from '../../state';
import ButtonArrow from '../ButtonArrow';
import Button from '../Button';

const TournamentPage: React.FC<ITournamentPage> = memo(({ name }) => {
    const { state, GoToStartFromTournament, GoToForm } = useContext(ContextApp);

    return (
        <Page trigger={state.settingsApp[name]} inpoint='0%' outpoint={state.settingsApp.form ? '-100%' : '100%'}>
            <Container>
                TournamentPage
                <ButtonArrow directional='up' onClick={GoToStartFromTournament} />
                <Button name='add sportsman' onClick={GoToForm} />
            </Container>
        </Page>
    );
});
export default TournamentPage;
