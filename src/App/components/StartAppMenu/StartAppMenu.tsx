import React, { memo, useContext } from 'react';
import { Container, Logo, Form } from './style';
import {} from './interfaces';
import Button from '../Button';
import { ContextApp } from '../../state';
import Input from '../Input';

const StartAppMenu: React.FC = memo(() => {
    const { CreateEventAndGoTournament, onChangeCreateEvent, valueStartAppInput, onKeyDownCreateEvent } = useContext(
        ContextApp
    );
    return (
        <Container>
            <Logo />
            <Form>
                <Input
                    onChangeInput={onChangeCreateEvent}
                    value={valueStartAppInput}
                    onKeyDown={onKeyDownCreateEvent}
                />

                {valueStartAppInput !== '' ? (
                    <Button name='create event' mode='red' onClick={CreateEventAndGoTournament} />
                ) : null}
            </Form>
        </Container>
    );
});
export default StartAppMenu;
