import React, { memo, useContext } from 'react';
import { Container, Content } from './style';
import {} from './interfaces';
import FRadioBtn from '../FRadioBtn/FRadioBtn';
import { ContextApp } from '../../state';

const FRadioBtns: React.FC = memo(() => {
    const { languages, event, onChangeFormRadioBtn } = useContext(ContextApp);

    return (
        <Container>
            <Content onChange={onChangeFormRadioBtn}>
                <FRadioBtn name={languages.standard} defaultValue='0' defaultChecked={event && event.card === 0} />
                <FRadioBtn name={languages.pro} defaultValue='1' defaultChecked={event && event.card === 1} />
            </Content>
        </Container>
    );
});
export default FRadioBtns;
