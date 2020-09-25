import React, { memo, useCallback, useContext } from 'react';
import { Container, Icon, Try } from './style';
import { ITDisciplineOpen } from './interfaces';
import { ContextApp } from '../../state';

const TDisciplineOpen: React.FC<ITDisciplineOpen> = memo(({ name, SortBy }) => {
    const { ClickTabClose } = useContext(ContextApp);
    const onClickClose = useCallback(() => ClickTabClose(name), [ClickTabClose, name]);
    const Sort = useCallback(() => {
        SortBy(`${name}1_weight`);
        console.log(`${name}1_weight`);
    }, [SortBy, name]);
    return (
        <Container>
            <Icon onClick={onClickClose} />
            <Try onClick={Sort}>{name}1</Try>
        </Container>
    );
});
export default TDisciplineOpen;
