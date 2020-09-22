import React, { memo, useContext } from 'react';
import { Container } from './style';
import {} from './interfaces';
import TAddColumnBtn from '../TAddColumnBtn';
import { ContextApp } from '../../state';

const TAddColumn: React.FC = memo(() => {
    const { event, languages } = useContext(ContextApp);
    return (
        <Container>
            <TAddColumnBtn name={'+T4'} disabled={event.disFourBtn} />
            <TAddColumnBtn name={'+T5'} disabled={event.disFiveBtn} />
            <TAddColumnBtn name={languages.delete_btn} disabled={event.disDelBtn} />
        </Container>
    );
});
export default TAddColumn;
