import React, { memo, useContext } from 'react';
import Page from '../Page';
import { Container, Content } from './style';
import { IStartAppPage } from './interfaces';
import { ContextApp } from '../../state';
import SAMenu from '../SAMenu';
import SAEventsList from '../SAEventsList';

const StartAppPage: React.FC<IStartAppPage> = memo(({ name }) => {
    const { settings, eventlist } = useContext(ContextApp);

    const grids = () => {
        if (eventlist && eventlist.length > 0) {
            return 'repeat(2, minmax(450px, 1fr))';
        } else {
            return 'minmax(450px, 1fr)';
        }
    };
    return (
        <Page trigger={settings[name]} inpoint='0%' outpoint='-100%'>
            <Container>
                <Content grid={grids()}>
                    <SAMenu />
                    {eventlist && eventlist.length > 0 ? <SAEventsList /> : null}
                </Content>
            </Container>
        </Page>
    );
});
export default StartAppPage;
