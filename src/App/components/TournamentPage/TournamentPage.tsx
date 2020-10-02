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
    const {
        GoToStartFromTournament,
        GoToForm,
        event: { athletesList },
        languages: { add_athlete },
    } = useContext(ContextApp);

    return (
        <Page>
            <Container>
                <ButtonArrow directional='up' onClick={GoToStartFromTournament} />
                <ContentPage>
                    <TTopbar />

                    <TMenu />

                    {athletesList && athletesList.length > 0 ? <TTopTable /> : <BtnWrapper></BtnWrapper>}

                    {athletesList && athletesList.length > 0 ? (
                        <TAthleteList athletesList={athletesList} />
                    ) : (
                        <BtnWrapper>
                            <Button name={add_athlete} width={280} onClick={GoToForm} />
                        </BtnWrapper>
                    )}

                    <TBottombar />
                </ContentPage>
            </Container>
        </Page>
    );
});
export default TournamentPage;
// trigger={settings[name]} inpoint='0%' outpoint={settings.form ? '-100%' : '100%'}
