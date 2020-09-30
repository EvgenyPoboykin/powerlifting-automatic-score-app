import React, { memo, useCallback, useContext } from 'react';
import { Container, Icon, Try } from './style';
import { ITAthleteDisciplineOpen } from './interfaces';
import { ContextApp } from '../../state';
import TTableItemTabName from '../TTableItemTabName';

const TAthleteDisciplineOpen: React.FC<ITAthleteDisciplineOpen> = memo(({ name, nameField }) => {
    const { ClickTabClose } = useContext(ContextApp);
    const onClickClose = useCallback(() => ClickTabClose(name), [ClickTabClose, name]);

    return (
        <Container>
            <Icon onClick={onClickClose} />
            <Try>
                <TTableItemTabName name={`${name}1`} nameField={nameField} />
            </Try>
        </Container>
    );
});
export default TAthleteDisciplineOpen;
