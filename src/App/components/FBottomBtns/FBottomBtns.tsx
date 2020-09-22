import React, { memo, useContext } from 'react';
import { Container, Content } from './style';
import {} from './interfaces';
import Button from '../Button';
import { ContextApp } from '../../state';

const FBottomBtns: React.FC = memo(() => {
    const { languages, GoToTournamentFromForm, sportsman } = useContext(ContextApp);

    return (
        <Container>
            <Content>
                <Button name={languages.form.cansel} onClick={GoToTournamentFromForm} />
                <Button
                    name={sportsman && sportsman.sportsmanid !== '' ? languages.form.save : languages.form.save_as}
                    onClick={GoToTournamentFromForm}
                />
            </Content>
        </Container>
    );
});
export default FBottomBtns;
