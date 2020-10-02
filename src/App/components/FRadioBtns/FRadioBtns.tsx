import React, { memo, useContext } from 'react';
import { Container, Content } from './style';
import {} from './interfaces';
import FRadioBtn from '../FRadioBtn/FRadioBtn';
import { ContextApp } from '../../state';

const FRadioBtns: React.FC = memo(() => {
    const {
        languages: { standard, pro },
        event: { card },
        onChangeFormRadioBtn,
    } = useContext(ContextApp);

    return (
        <Container>
            <Content onChange={onChangeFormRadioBtn}>
                <FRadioBtn name={standard} defaultValue='0' defaultChecked={card === 0} />
                <FRadioBtn name={pro} defaultValue='1' defaultChecked={card === 1} />
            </Content>
        </Container>
    );
});
export default FRadioBtns;
