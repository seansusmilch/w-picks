import {
    RouteObject,
    createBrowserRouter,
} from 'react-router-dom'
import {MatchupInfo} from '@/components/matchup-info/matchup-info';
import {Matchup} from 'routes/Matchup/Matchup';
import {Error} from 'routes/Error/Error';
import {Test} from 'routes/Test/Test';
import { Navigation } from 'components/navigation/navigation';
import App from './App';


export const routes:RouteObject[] = [
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
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
            },
            {
                path: '/Test',
                element: <Test />
            }
        ]
    },
    
]

export const router = createBrowserRouter(routes);