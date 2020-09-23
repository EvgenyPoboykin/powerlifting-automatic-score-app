import React, { memo, useContext } from 'react';
import { Container } from './style';
import {} from './interfaces';
import TAddColumnBtn from '../TAddColumnBtn';
import { ContextApp } from '../../state';

const TAddColumn: React.FC = memo(() => {
    const { event, languages, onClickT4, onClickT5, onClickDeleteT4T5 } = useContext(ContextApp);
    return (
        <Container>
            <TAddColumnBtn name={'+T4'} disabled={event.disFourBtn} onClick={onClickT4} />
            <TAddColumnBtn name={'+T5'} disabled={event.disFiveBtn} onClick={onClickT5} />
            <TAddColumnBtn name={languages.delete_btn} disabled={event.disDelBtn} onClick={onClickDeleteT4T5} />
        </Container>
    );
});
export default TAddColumn;
