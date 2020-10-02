import React, { memo, useCallback, useContext, useState } from 'react';
import { Container, Logo, Form } from './style';
import {} from './interfaces';
import Button from '../Button';
import { ContextApp } from '../../state';
import Input from '../Input';

const SAMenu: React.FC = memo(() => {
    const [value, SetValue] = useState<string>('');
    const {
        CreateEventAndGoTournament,
        languages: { event_name, create_event },
    } = useContext(ContextApp);

    const PROXY_CreateEventAndGoTournament = useCallback(() => {
        CreateEventAndGoTournament(value);
        SetValue('');
    }, [value, SetValue, CreateEventAndGoTournament]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetValue(e.target.value);
    };

    return (
        <Container>
            <Logo />
            <Form>
                <Input placeholder={event_name} onChange={onChange} defaultValue={value} />

                <Button
                    name={create_event}
                    mode={value === '' ? '' : 'red'}
                    onClick={PROXY_CreateEventAndGoTournament}
                    disabled={value === '' ? true : false}
                />
            </Form>
        </Container>
    );
});
export default SAMenu;
