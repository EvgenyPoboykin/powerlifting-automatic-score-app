import React, { memo } from 'react';
import TopBar_Logic from './logic';
import { Container, ContainerControls, ContainerName, ContainerSettings, Control, Name } from './style';
import json from '../../../../package.json';

const TopBar: React.FC = memo(() => {
    const { onClickClose, onClickMaximize, onClickMinimize, onDoubleClick } = TopBar_Logic();
    return (
        <Container>
            <ContainerControls>
                <Control onClick={onClickClose} colorBtn='rgb(255, 0, 8)'></Control>
                <Control onClick={onClickMinimize} colorBtn='rgb(255, 234, 0)'></Control>
                <Control onClick={onClickMaximize} colorBtn='#39b54a'></Control>
            </ContainerControls>
            <ContainerName onDoubleClick={onDoubleClick}>
                <Name>Powerlifting Automatic Score v {json.version}</Name>
            </ContainerName>
            <ContainerSettings></ContainerSettings>
        </Container>
    );
});
export default TopBar;
