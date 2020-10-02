import React, { memo, useContext } from 'react';
import { Container } from './style';
import {} from './interfaces';
import TAddColumnBtn from '../TAddColumnBtn';
import { ContextApp } from '../../state';

const TAddColumn: React.FC = memo(() => {
    const {
        event: { disFourBtn, disFiveBtn, disDelBtn },
        languages: { delete_btn },
        onClickT4,
        onClickT5,
        onClickDeleteT4T5,
    } = useContext(ContextApp);
    return (
        <Container>
            <TAddColumnBtn name={'+T4'} disabled={disFourBtn} onClick={onClickT4} />
            <TAddColumnBtn name={'+T5'} disabled={disFiveBtn} onClick={onClickT5} />
            <TAddColumnBtn name={delete_btn} disabled={disDelBtn} onClick={onClickDeleteT4T5} />
        </Container>
    );
});
export default TAddColumn;
