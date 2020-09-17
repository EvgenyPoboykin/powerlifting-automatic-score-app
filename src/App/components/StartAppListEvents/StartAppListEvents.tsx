import React, { memo, useCallback, useContext } from 'react';
import { Container } from './style';
import {} from './interfaces';
import { ContextApp } from '../../state';
import StartAppEvent from '../StartAppEvent';

const StartAppListEvents: React.FC = memo(() => {
    const { state, onClickEvent, onClickDeleteEvent } = useContext(ContextApp);

    const ProxyOnClickEvent = useCallback((id: number) => onClickEvent(id), [onClickEvent]);
    return (
        <Container>
            {state.eventsList &&
                state.eventsList.map((item: any) => (
                    <StartAppEvent
                        key={item.id}
                        item={item}
                        onClick={() => onClickEvent(item.id)}
                        onClickDelete={() => onClickDeleteEvent(item.id)}
                    />
                ))}
        </Container>
    );
});
export default StartAppListEvents;