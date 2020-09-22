import React, { memo, useContext } from 'react';
import { Container } from './style';
import {} from './interfaces';
import { ContextApp } from '../../state';
import SAEvent from '../SAEvent';

const SAEventsList: React.FC = memo(() => {
    const { eventlist, onClickEvent, onClickDeleteEvent } = useContext(ContextApp);

    return (
        <Container>
            {eventlist &&
                eventlist.map((item: any) => (
                    <SAEvent
                        key={item.id}
                        item={item}
                        onClick={() => onClickEvent(item.id)}
                        onClickDelete={() => onClickDeleteEvent(item.id)}
                    />
                ))}
        </Container>
    );
});
export default SAEventsList;
