import React, { memo, useCallback, useContext } from 'react';
import { Container, Icon } from './style';
import { ITDisciplineClose } from './interfaces';
import { ContextApp } from '../../state';

const TDisciplineClose: React.FC<ITDisciplineClose> = memo(({ name }) => {
    const { ClickTabOpen } = useContext(ContextApp);
    const onClickOpen = useCallback(() => ClickTabOpen(name), [ClickTabOpen, name]);
    return (
        <Container>
            <Icon onClick={onClickOpen} />
        </Container>
    );
});
export default TDisciplineClose;
