import React, { memo, useContext } from 'react';
import Page from '../Page';
import { Container, ContentPage, BtnWrapper } from './style';
import { ITournamentPage } from './interfaces';
import { ContextApp } from '../../state';
import ButtonArrow from '../ButtonArrow';
import Button from '../Button';
import TournamentTopbar from '../TournamentTopbar';
import TournamentMenu from '../TournamentMenu';
import TournamentTopTable from '../TournamentTopTable';
import TournamentSportsmanList from '../TournamentSportsmanList';
import TournamentBottombar from '../TournamentBottombar';

const TournamentPage: React.FC<ITournamentPage> = memo(({ name }) => {
    const { settings, GoToStartFromTournament, GoToForm, state, languages } = useContext(ContextApp);

    return (
        <Page trigger={settings[name]} inpoint='0%' outpoint={settings.form ? '-100%' : '100%'}>
            <Container>
                <ButtonArrow directional='up' onClick={GoToStartFromTournament} />
                <ContentPage>
                    <TournamentTopbar />

                    <TournamentMenu />

                    {state.event && state.event.length > 0 ? <TournamentTopTable /> : null}

                    {state.event && state.event.length > 0 ? (
                        <TournamentSportsmanList />
                    ) : (
                        <BtnWrapper>
                            <Button name={languages.add_spostsman} width={280} onClick={GoToForm} />
                        </BtnWrapper>
                    )}

                    <TournamentBottombar />
                </ContentPage>
            </Container>
        </Page>
    );
});
export default TournamentPage;
