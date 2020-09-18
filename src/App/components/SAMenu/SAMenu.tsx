import React, { memo, useCallback, useContext, useState } from 'react';
import { Container, Logo, Form } from './style';
import {} from './interfaces';
import Button from '../Button';
import { ContextApp } from '../../state';
import Input from '../Input';

const SAMenu: React.FC = memo(() => {
    const [value, SetValue] = useState('');
    const { CreateEventAndGoTournament, languages } = useContext(ContextApp);

    const PROXY_CreateEventAndGoTournament = useCallback(() => {
        CreateEventAndGoTournament(value);
        SetValue('');
    }, [value, CreateEventAndGoTournament]);

    const onChange = (value: any) => {
        SetValue(value);
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            CreateEventAndGoTournament(value);
            SetValue('');
        }
    };

    return (
        <Container>
            <Logo />
            <Form>
                <Input placeholder={languages.event_name} value={value} onKeyDown={onKeyDown} onChange={onChange} />
                {value !== '' ? (
                    <Button name={languages.create_event} mode='red' onClick={PROXY_CreateEventAndGoTournament} />
                ) : null}
            </Form>
        </Container>
    );
});
export default SAMenu;
