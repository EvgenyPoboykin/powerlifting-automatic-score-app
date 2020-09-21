import React, { memo, useCallback, useContext } from 'react';
import { Container, Logo, Form } from './style';
import {} from './interfaces';
import Button from '../Button';
import { ContextApp } from '../../state';
import Input from '../Input';

const SAMenu: React.FC = memo(() => {
    const { CreateEventAndGoTournament, languages, SAInputRef } = useContext(ContextApp);

    const PROXY_CreateEventAndGoTournament = useCallback(() => {
        CreateEventAndGoTournament(SAInputRef.current!.value);
        SAInputRef.current!.value = '';
    }, [SAInputRef, CreateEventAndGoTournament]);

    return (
        <Container>
            <Logo />
            <Form>
                <Input placeholder={languages.event_name} inputRef={SAInputRef} />

                <Button
                    name={languages.create_event}
                    mode={SAInputRef.current && SAInputRef.current!.value === '' ? '' : 'red'}
                    onClick={PROXY_CreateEventAndGoTournament}
                    disabled={SAInputRef.current && SAInputRef.current!.value === '' ? true : false}
                />
            </Form>
        </Container>
    );
});
export default SAMenu;
