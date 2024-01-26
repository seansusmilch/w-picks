import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { theme } from "./theme";
import { MantineProvider } from '@mantine/core';
import App from './App';
import { router } from './routes';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
