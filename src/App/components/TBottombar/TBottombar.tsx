import React, { memo, useContext } from 'react';
import { Container, EmptyDiv, ContainerFrame, Bar } from './style';
import {} from './interfaces';
import { ContextApp } from '../../state';
import Button from '../Button';

const TBottombar: React.FC = memo(() => {
    const { state, languages } = useContext(ContextApp);
    return state.event.sportsmans && state.event.sportsmans.length > 0 ? (
        <Container>
            <ContainerFrame>
                <Bar>
                    <Button name={languages.save_as} width={180} onClick={() => console.log('save as')} />
                    TournamentBottombar
                </Bar>
                <Button name={languages.add_spostsman} width={180} onClick={() => console.log('add')} />
            </ContainerFrame>
        </Container>
    ) : (
        <EmptyDiv></EmptyDiv>
    );
});
export default TBottombar;
