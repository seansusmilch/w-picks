import * as ProfilesSignals from '~/middleware/signals/ProfilesSignals';
import * as AuthSignals from '~/middleware/signals/AuthSignals';
import { ProgressCard } from '~/components/stats/progress-card';
import { Grid } from '@mantine/core';
import { UserCard } from '~/components/user-card/user-card';
import { Card, Text, Stack, Button } from '@mantine/core';
import { IconLogout, IconLogin } from '@tabler/icons-react';
import { logOutUser } from '~/middleware/supabase/auth';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from '~/components/error-message/error-message';

const stats = [
    { value: '34K', label: 'Followers' },
    { value: '187', label: 'Follows' },
    { value: '1.6K', label: 'Posts' },
];

export const Profile = () => {
    const navigate = useNavigate();
    const currentUser = AuthSignals.currentUserSignal.value;
    const currentSession = AuthSignals.currentSessionSignal.value;
    const currentProfile = ProfilesSignals.myProfileSignal.value;

    if (!currentUser || !currentSession || !currentProfile) {
        return (
            <ErrorMessage
                title='Oopsie poopsie'
                message='You must be logged in to view this page'
                returnTo='/Login'
                icon={<IconLogin />}
                btnLabel='Login'
            />
        );
    }

    const logoutButtonHandler = async () => {
        await logOutUser();
        AuthSignals.currentUserSignal.value = null;
        AuthSignals.currentSessionSignal.value = null;
        ProfilesSignals.myProfileSignal.value = null;
        navigate('/');
    };
    return (
        <Grid>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <UserCard profile={currentProfile} stats={stats} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <ProgressCard label='W Pick Percentage' text='17 / 38' value={(17 / 38) * 100} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <Card withBorder p='xl' radius='md'>
                    <Text fz='xs' tt='uppercase' fw={700} c='dimmed'>
                        Pick History
                    </Text>
                </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <Card withBorder p='xl' radius='md'>
                    <Text fz='xs' tt='uppercase' fw={700} c='dimmed'>
                        Settings
                    </Text>
                    <Stack>
                        <Button
                            variant='light'
                            leftSection={<IconLogout />}
                            onClick={logoutButtonHandler}
                            autoContrast
                        >
                            Logout
                        </Button>
                    </Stack>
                </Card>
            </Grid.Col>
        </Grid>
    );
};
