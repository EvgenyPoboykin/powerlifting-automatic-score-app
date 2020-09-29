import React, { memo, useCallback, useContext } from 'react';
import { Container, Icon } from './style';
import { ITAthleteDisciplineClose } from './interfaces';
import { ContextApp } from '../../state';

const TAthleteDisciplineClose: React.FC<ITAthleteDisciplineClose> = memo(({ name }) => {
    const { ClickTabOpen } = useContext(ContextApp);
    const onClickOpen = useCallback(() => ClickTabOpen(name), [ClickTabOpen, name]);
    return (
        <Container>
            <Icon onClick={onClickOpen} />
        </Container>
    );
});
export default TAthleteDisciplineClose;
