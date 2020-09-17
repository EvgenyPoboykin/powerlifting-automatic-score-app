import React, { memo, useCallback, useContext, useState } from 'react';
import { Container, Logo, Form } from './style';
import {} from './interfaces';
import Button from '../Button';
import { ContextApp } from '../../state';
import Input from '../Input';

const StartAppMenu: React.FC = memo(() => {
    const [value, SetValue] = useState('');
    const { CreateEventAndGoTournament } = useContext(ContextApp);

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
                <Input placeholder='Event Name' value={value} onKeyDown={onKeyDown} onChange={onChange} />
                {value !== '' ? (
                    <Button name='create event' mode='red' onClick={PROXY_CreateEventAndGoTournament} />
                ) : null}
            </Form>
        </Container>
    );
});
export default StartAppMenu;
