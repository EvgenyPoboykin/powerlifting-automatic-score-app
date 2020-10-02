import React, { memo, useContext } from 'react';
import { Container, EmptyDiv, ContainerFrame, Bar } from './style';
import {} from './interfaces';
import { ContextApp } from '../../state';
import Button from '../Button';

const TBottombar: React.FC = memo(() => {
    const {
        event: { athletesList },
        languages: { save_as, add_athlete },
        GoToForm,
    } = useContext(ContextApp);
    return athletesList && athletesList.length > 0 ? (
        <Container>
            <ContainerFrame>
                <Bar>
                    <Button name={save_as} width={180} onClick={() => console.log('save as')} />
                </Bar>
                <Button name={add_athlete} width={180} onClick={GoToForm} />
            </ContainerFrame>
        </Container>
    ) : (
        <EmptyDiv></EmptyDiv>
    );
});
export default TBottombar;
