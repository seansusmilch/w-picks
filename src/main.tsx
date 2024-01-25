import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router, routes } from './routes';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from 'components/navigation/navigation';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Navigation routes={routes} />
        <RouterProvider router={router} />
    </React.StrictMode>
);
