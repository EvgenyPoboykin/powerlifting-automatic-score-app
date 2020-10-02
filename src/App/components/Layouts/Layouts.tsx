import React, { memo, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container, ContainerContent } from './style';
// import Dialogs from '../Dialogs';
import { ContextApp } from '../../state';
import Routers from '../Routers';

const Layouts: React.FC = memo(() => {
    const {
        settings: { dialog },
    } = useContext(ContextApp);
    return (
        <BrowserRouter>
            <Container>
                {/* <Dialogs name='dialog' /> */}
                <ContainerContent disabled={dialog}>
                    <Routers />
                </ContainerContent>
            </Container>
        </BrowserRouter>
    );
});
export default Layouts;
