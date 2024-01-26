import {
    RouteObject,
    createBrowserRouter,
} from 'react-router-dom'
import {MatchupInfo} from '@/components/matchup-info/matchup-info';
import {Matchup} from 'routes/Matchup/Matchup';
import { Navigation } from 'components/navigation/navigation';
import App from './App';


export const routes:RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Matchup />
            },
            {
                path: '/MatchupInfo',
                element: <MatchupInfo />
            },
            {
                path: '/Profile',
                element: <Matchup />
            }
        ]
    },
    
]

export const router = createBrowserRouter(routes);