import { Paper, Title, Text, Container, Image, MantineProvider, Button } from '@mantine/core';
import { theme } from '@/theme';
import { Link } from 'react-router-dom';
import { IconHome } from '@tabler/icons-react';
import { ErrorMessage } from '~/components/error-message/error-message';
import { useRouteError } from 'react-router-dom';

export const Error = () => {
    const error = useRouteError();
    console.log('Error', error);
    return (
        <MantineProvider theme={theme}>
            <ErrorMessage />
        </MantineProvider>
    );
};
