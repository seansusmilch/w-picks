import { Paper, Title, Text, Container, Image, MantineProvider, Button } from '@mantine/core';
import { theme } from '@/theme';
import { Link } from 'react-router-dom';
import { IconHome } from '@tabler/icons-react';
import { ErrorMessage } from '~/components/error-message/error-message';

export const Error = () => {

    return (
        <MantineProvider theme={theme}>
            <Container size="md" mt="lg">
                <ErrorMessage />
            </Container>
        </MantineProvider>
    );
};
