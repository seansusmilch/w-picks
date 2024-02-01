import { Code, Title, Grid } from '@mantine/core';
import * as Matchups from '~/middleware/signals/MatchupsSignals';
import * as Profiles from '~/middleware/signals/ProfilesSignals';
import * as Auth from '~/middleware/signals/AuthSignals';
import { useSignals } from '@preact/signals-react/runtime';
import { useSignal, useSignalEffect } from '@preact/signals-react';
import { getTodaysMatchups } from '~/middleware/supabase/matchups';
import { MatchupType } from '~/types';

export const Test = () => {
    useSignals();
    const currentUser = Auth.currentUserSignal.value;
    const currentSession = Auth.currentSessionSignal.value;
    const todaysMatchups = useSignal<MatchupType[]>([]);
    useSignalEffect(() => {
        getTodaysMatchups().then((matchups) => (todaysMatchups.value = matchups));
    });

    return (
        <Grid grow>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <Title>Todays Matchups</Title>
                <Code block>{JSON.stringify(todaysMatchups.value, null, 4)}</Code>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <Title>My Profile</Title>
                <Code block>{JSON.stringify(Profiles.myProfileSignal, null, 4)}</Code>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <Title>User</Title>
                <Code block>{JSON.stringify(currentUser, null, 4)}</Code>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <Title>Session</Title>
                <Code block>{JSON.stringify(currentSession, null, 4)}</Code>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <Title>Matchups</Title>
                <Code block>{JSON.stringify(Matchups.matchupsSignal, null, 4)}</Code>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <Title>Profiles</Title>
                <Code block>{JSON.stringify(Profiles.profiles, null, 4)}</Code>
            </Grid.Col>
        </Grid>
    );
};
