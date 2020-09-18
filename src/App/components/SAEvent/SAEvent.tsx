import React, { memo, useContext } from 'react';
import {
    Container,
    EventItem,
    EventItemName,
    EventItemTimestamp,
    EventItemDeleteBorder,
    EventItemDelete,
    EventIconDelete,
} from './style';
import { IStartAppEvent } from './interfaces';
import { ContextApp } from '../../state';

const SAEvent: React.FC<IStartAppEvent> = memo(({ item, onClick, onClickDelete }) => {
    const { settings } = useContext(ContextApp);
    const now = new Date(item.date);

    var optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };

    // date format usa and ru
    const rus = now.toLocaleString('ru-RU', optionsDate);
    const eng = now.toLocaleString('en-US', optionsDate);

    const time = now.toLocaleString('ru-RU', { hour: 'numeric', minute: 'numeric', hour12: false });
    const timeUSA = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    return (
        <Container>
            <EventItem>
                <EventItemName onClick={onClick}>
                    {item.event.substr(0, 70)}
                    {item.event.length > 70 ? '...' : ''}
                </EventItemName>
                <EventItemTimestamp>{settings.lang ? `${eng} / ${timeUSA}` : `${rus} / ${time}`}</EventItemTimestamp>
                <EventItemDeleteBorder>
                    <EventItemDelete onClick={onClickDelete}>
                        <EventIconDelete></EventIconDelete>
                    </EventItemDelete>
                </EventItemDeleteBorder>
            </EventItem>
        </Container>
    );
});
export default SAEvent;
