import React, { memo } from 'react';
import TopBar_Logic from './logic';
import {
    Container,
    ContainerControls,
    ContainerName,
    ContainerSettings,
    Control,
    Name,
    AutorsLink,
    WrapperControls,
} from './style';
import json from '../../../../package.json';

const TopBar: React.FC = memo(() => {
    const {
        onClickClose,
        onClickMaximize,
        onClickMinimize,
        onDoubleClick,
        GoDialog,
        ChangeLang,
        settings,
    } = TopBar_Logic();
    return (
        <Container>
            <ContainerControls>
                <WrapperControls>
                    <Control onClick={onClickClose} colorBtn='rgb(255, 0, 8)'></Control>
                    <Control onClick={onClickMinimize} colorBtn='rgb(255, 234, 0)'></Control>
                    <Control onClick={onClickMaximize} colorBtn='#39b54a'></Control>
                </WrapperControls>
            </ContainerControls>
            <ContainerName onDoubleClick={onDoubleClick}>
                <Name>Powerlifting Automatic Score v {json.version} (Standalone)</Name>
            </ContainerName>
            <ContainerSettings>
                <AutorsLink onClick={(e) => ChangeLang(e.currentTarget!.textContent)}>
                    {settings.lang ? 'EN' : 'RU'}
                </AutorsLink>
                <AutorsLink onClick={GoDialog}>Autors</AutorsLink>
            </ContainerSettings>
        </Container>
    );
});
export default TopBar;
