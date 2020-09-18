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
import TSportsmanList from '../TSportsmanList';
import TBottombar from '../TBottombar';

const TournamentPage: React.FC<ITournamentPage> = memo(({ name }) => {
    const { settings, GoToStartFromTournament, GoToForm, state, languages } = useContext(ContextApp);

    return (
        <Page trigger={settings[name]} inpoint='0%' outpoint={settings.form ? '-100%' : '100%'}>
            <Container>
                <ButtonArrow directional='up' onClick={GoToStartFromTournament} />
                <ContentPage>
                    <TTopbar />

                    <TMenu />

                    {state.event && state.event.length > 0 ? <TTopTable /> : <BtnWrapper></BtnWrapper>}

                    {state.event && state.event.length > 0 ? (
                        <TSportsmanList />
                    ) : (
                        <BtnWrapper>
                            <Button name={languages.add_spostsman} width={280} onClick={GoToForm} />
                        </BtnWrapper>
                    )}

                    <TBottombar />
                </ContentPage>
            </Container>
        </Page>
    );
});
export default TournamentPage;
