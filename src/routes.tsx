import {
    RouteObject,
    createBrowserRouter,
} from 'react-router-dom'
import {MatchupInfo} from '@/components/matchup-info/matchup-info';
import {Matchup} from 'routes/Matchup/Matchup';
import {Error} from 'routes/Error/Error';
import { Today } from 'routes/Today/Today';
import {Test} from 'routes/Test/Test';
import { Profile } from 'routes/Profile/Profile';
import App from './App';
import { AuthenticationForm } from 'routes/Authentication/Authentication';


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
                path: '/Today',
                element: <Today />
            },
            {
                path: '/Profile',
                element: <Profile />
            },
            {
                path: '/Matchup',
                element: <Matchup />
            },
            {
                path: '/Test',
                element: <Test />
            },
            {
                path: '/Login',
                element: <AuthenticationForm />
            },
        ]
    },
    
]

export const router = createBrowserRouter(routes);