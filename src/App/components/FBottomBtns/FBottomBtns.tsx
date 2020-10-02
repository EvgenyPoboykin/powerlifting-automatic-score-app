import React, { memo, useContext } from 'react';
import { Container, Content } from './style';
import {} from './interfaces';
import Button from '../Button';
import { ContextApp } from '../../state';

const FBottomBtns: React.FC = memo(() => {
    const {
        languages: {
            form: { cancel, save_add, save_changes },
        },
        GoToTournamentFromForm,
        SaveAthleteFromForm,
        AddAthleteFromForm,
        athlete,
    } = useContext(ContextApp);

    return (
        <Container>
            <Content>
                <Button name={cancel} onClick={GoToTournamentFromForm} width={180} />
                <Button
                    name={athlete && athlete.id === '' ? save_add : save_changes}
                    onClick={athlete && athlete.id === '' ? AddAthleteFromForm : SaveAthleteFromForm}
                    width={180}
                />
            </Content>
        </Container>
    );
});
export default FBottomBtns;
