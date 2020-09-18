import React, { memo, useContext } from 'react';
import { Container } from './style';
// import {} from './interfaces';
import TAddColumnBtn from '../TAddColumnBtn';
import { ContextApp } from '../../state';

const TAddColumn: React.FC = memo(() => {
    const { state, languages } = useContext(ContextApp);
    return (
        <Container>
            <TAddColumnBtn name={'+T4'} disabled={state.event.disFourBtn} />
            <TAddColumnBtn name={'+T5'} disabled={state.event.disFiveBtn} />
            <TAddColumnBtn name={languages.delete_btn} disabled={state.event.disDelBtn} />
        </Container>
    );
});
export default TAddColumn;
