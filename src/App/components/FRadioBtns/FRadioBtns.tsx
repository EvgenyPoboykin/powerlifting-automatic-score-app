import React, { memo, useContext } from 'react';
import { Container, Content } from './style';
import {} from './interfaces';
import FRadioBtn from '../FRadioBtn/FRadioBtn';
import { ContextApp } from '../../state';

const FRadioBtns: React.FC = memo(() => {
    const { languages, state } = useContext(ContextApp);
    const { event } = state;
    const { card } = event;
    return (
        <Container>
            <Content>
                <FRadioBtn name={languages.standart} defaultValue='0' defaultChecked={card === 0} />
                <FRadioBtn name={languages.pro} defaultValue='1' defaultChecked={card === 1} />
            </Content>
        </Container>
    );
});
export default FRadioBtns;
