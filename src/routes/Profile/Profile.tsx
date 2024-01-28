import * as ProfilesSignals from '~/middleware/signals/ProfilesSignals';
import * as AuthSignals from '~/middleware/signals/AuthSignals';
import { ProgressCard } from '~/components/stats/progress-card';
import { Grid } from '@mantine/core';
import { UserCard } from '~/components/user-card/user-card';
import { Card, Text, Stack, Button } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react'
import { logOutUser } from '~/middleware/supabase/auth';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const navigate = useNavigate();
    const currentUser = AuthSignals.currentUserSignal.value;
    const currentSession = AuthSignals.currentSessionSignal.value;
    const currentProfile = ProfilesSignals.currentProfile.value;

    const logoutButtonHandler = async () => {
        
        await logOutUser();
        AuthSignals.currentUserSignal.value = null;
        AuthSignals.currentSessionSignal.value = null;
        ProfilesSignals.currentProfile.value = null;
        navigate('/');
    }
    return (
        <Grid>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <UserCard />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <ProgressCard label="W Pick Percentage" text='17 / 38' value={(17 / 38) * 100} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <Card withBorder p='xl' radius='md'>
                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                        Pick History
                    </Text>
                </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <Card withBorder p='xl' radius='md'>
                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                        Settings
                    </Text>
                    <Stack>
                        <Button variant='light' leftSection={<IconLogout/>} onClick={logoutButtonHandler} autoContrast>Logout</Button>
                    </Stack>
                </Card>
            </Grid.Col>
        </Grid>
    );
};