import React, { memo, useContext } from 'react';
import { Link } from 'react-router-dom';
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
    const {
        settings: { lang },
    } = useContext(ContextApp);
    const now = new Date(item.date);

    var optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };

    // date format usa and ru
    const rus = now.toLocaleString('ru-RU', optionsDate);
    const eng = now.toLocaleString('en-US', optionsDate);

    const time = now.toLocaleString('ru-RU', { hour: 'numeric', minute: 'numeric', hour12: false });
    const timeUSA = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    return (
        <Link to={`/${item.id}`}>
            <Container>
                <EventItem>
                    <EventItemName>
                        {item.event && item.eventName.length > 70
                            ? `${item.eventName.substr(0, 70)}...`
                            : item.eventName}
                    </EventItemName>
                    <EventItemTimestamp>{lang ? `${eng} ( ${timeUSA} )` : `${rus} ( ${time} )`}</EventItemTimestamp>
                    <EventItemDeleteBorder>
                        <EventItemDelete onClick={onClickDelete}>
                            <EventIconDelete></EventIconDelete>
                        </EventItemDelete>
                    </EventItemDeleteBorder>
                </EventItem>
            </Container>
        </Link>
    );
});
export default SAEvent;
