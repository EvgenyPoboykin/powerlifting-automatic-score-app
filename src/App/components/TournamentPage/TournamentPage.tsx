import React, { memo, useContext } from 'react';
import Page from '../Page';
import { Container, ContentPage, BtnWrapper } from './style';
import { ITournamentPage } from './interfaces';
import { ContextApp } from '../../state';
import ButtonArrow from '../ButtonArrow';
import Button from '../Button';
import TTopbar from '../TTopbar';
import TMenu from '../TMenu';
import TTopTable from '../TTopTable';
import TAthleteList from '../TAthleteList';
import TBottombar from '../TBottombar';

const TournamentPage: React.FC<ITournamentPage> = memo(({ name }) => {
    const { settings, GoToStartFromTournament, GoToForm, event, languages } = useContext(ContextApp);

    return (
        <Page trigger={settings[name]} inpoint='0%' outpoint={settings.form ? '-100%' : '100%'}>
            <Container>
                <ButtonArrow directional='up' onClick={GoToStartFromTournament} />
                <ContentPage>
                    <TTopbar />

                    <TMenu />

                    {event.athletesList && event.athletesList.length > 0 ? <TTopTable /> : <BtnWrapper></BtnWrapper>}

                    {event.athletesList && event.athletesList.length > 0 ? (
                        <TAthleteList athletesList={event.athletesList} />
                    ) : (
                        <BtnWrapper>
                            <Button name={languages.add_athlete} width={280} onClick={GoToForm} />
                        </BtnWrapper>
                    )}

                    <TBottombar />
                </ContentPage>
            </Container>
        </Page>
    );
});
export default TournamentPage;
