import React, { memo, useCallback, useContext, useRef, useState } from 'react';
import { Container, Logo, Form } from './style';
import {} from './interfaces';
import Button from '../Button';
import { ContextApp } from '../../state';
import Input from '../Input';

const SAMenu: React.FC = memo(() => {
    const [checkInput, SetCheckInput] = useState<boolean>(true);
    const { CreateEventAndGoTournament, languages } = useContext(ContextApp);
    const ref = useRef<HTMLInputElement>(null);

    const PROXY_CreateEventAndGoTournament = useCallback(() => {
        CreateEventAndGoTournament(ref.current!.value);
        ref.current!.value = '';
    }, [ref, CreateEventAndGoTournament]);

    const onChange = (value: string) => {
        console.log(typeof value);
        if (value !== '') {
            SetCheckInput(false);
        }
    };

    return (
        <Container>
            <Logo />
            <Form>
                <Input placeholder={languages.event_name} inputRef={ref} onChange={onChange} />

                <Button
                    name={languages.create_event}
                    mode={checkInput ? '' : 'red'}
                    onClick={PROXY_CreateEventAndGoTournament}
                    disabled={checkInput}
                />
            </Form>
        </Container>
    );
});
export default SAMenu;
