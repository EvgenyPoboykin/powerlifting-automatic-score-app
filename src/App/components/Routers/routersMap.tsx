import StartAppPage from '../StartAppPage';
import TournamentPage from '../TournamentPage';
import FormAddAthletePage from '../FormAddAthletePage';
import Dialogs from '../Dialogs';
export const routersMap = [
    { id: 1, path: '/', component: StartAppPage },
    { id: 2, path: '/:event_id', component: TournamentPage },
    { id: 3, path: '/:event_id/form', component: FormAddAthletePage },
    { id: 4, path: '/:event_id/form/:athlete_id', component: FormAddAthletePage },
    { id: 5, path: '/:event_id/dialog', component: Dialogs },
];
