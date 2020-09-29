import React, { memo, useContext } from 'react';
import { Container, EmptyDiv, ContainerFrame, Bar } from './style';
import {} from './interfaces';
import { ContextApp } from '../../state';
import Button from '../Button';

const TBottombar: React.FC = memo(() => {
    const { event, languages, GoToForm } = useContext(ContextApp);
    return event.athletesList && event.athletesList.length > 0 ? (
        <Container>
            <ContainerFrame>
                <Bar>
                    <Button name={languages.save_as} width={180} onClick={() => console.log('save as')} />
                </Bar>
                <Button name={languages.add_athlete} width={180} onClick={GoToForm} />
            </ContainerFrame>
        </Container>
    ) : (
        <EmptyDiv></EmptyDiv>
    );
});
export default TBottombar;
