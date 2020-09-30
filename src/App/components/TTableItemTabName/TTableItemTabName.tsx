import React, { memo, useContext, useCallback, useState } from 'react';
import { Container } from './style';
import { ITTableItemTabName } from './interfaces';
import { ContextApp } from '../../state';

const TTableItemTabName: React.FC<ITTableItemTabName> = memo(({ name, nameField }) => {
    const [trigger, SetTrigger] = useState(false);

    const { SortBy } = useContext(ContextApp);

    const Sort = useCallback(() => {
        SortBy(nameField, !trigger);
        SetTrigger(!trigger);
    }, [SortBy, nameField, trigger]);

    return (
        <Container nameField={nameField} onClick={nameField ? Sort : undefined}>
            {name}
        </Container>
    );
});
export default TTableItemTabName;
