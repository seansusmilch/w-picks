import {
    createBrowserRouter,
} from 'react-router-dom'
import App from 'routes/App/App';
import {MatchupInfo} from '@/components/matchup-info/matchup-info';
import {Matchup} from 'routes/Matchup/Matchup';

export const routes = [
    {
        path: '/',
        element: <App />
    },
    {
        path: '/MatchupInfo',
        element: <MatchupInfo />
    },
    {
        path: '/Matchup',
        element: <Matchup />
    }
]

export const router = createBrowserRouter(routes);