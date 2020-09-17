import React, { memo, useContext } from 'react';
import Page from '../Page';
import { Container, Content } from './style';
import { IStartAppPage } from './interfaces';
import { ContextApp } from '../../state';
import StartAppMenu from '../StartAppMenu';
import StartAppListEvents from '../StartAppListEvents';

const StartAppPage: React.FC<IStartAppPage> = memo(({ name }) => {
    const { settings, state } = useContext(ContextApp);

    const grids = () => {
        if (state.eventslist && state.eventslist.length > 0) {
            return 'repeat(2, minmax(450px, 1fr))';
        } else {
            return 'minmax(450px, 1fr)';
        }
    };
    return (
        <Page trigger={settings[name]} inpoint='0%' outpoint='-100%'>
            <Container>
                <Content grid={grids()}>
                    <StartAppMenu />
                    {state.eventslist && state.eventslist.length > 0 ? <StartAppListEvents /> : null}
                </Content>
            </Container>
        </Page>
    );
});
export default StartAppPage;
