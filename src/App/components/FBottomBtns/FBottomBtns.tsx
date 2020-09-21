import React, { memo, useContext } from 'react';
import { Container, Content } from './style';
import {} from './interfaces';
import Button from '../Button';
import { ContextApp } from '../../state';

const FBottomBtns: React.FC = memo(() => {
    const { languages, GoToTournamentFromForm, state } = useContext(ContextApp);
    const { sportsman } = state;

    return (
        <Container>
            <Content>
                <Button name={languages.f_cansel} onClick={GoToTournamentFromForm} />
                <Button
                    name={sportsman.sportsmanid === '' ? languages.f_save : languages.f_save_as}
                    onClick={GoToTournamentFromForm}
                />
            </Content>
        </Container>
    );
});
export default FBottomBtns;
