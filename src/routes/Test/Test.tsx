import { Code, Title, Grid, Paper, Card, Flex, Space } from '@mantine/core';
import * as Matchups from '~/middleware/signals/MatchupsSignals';
import * as Profiles from '~/middleware/signals/ProfilesSignals';
import * as Auth from '~/middleware/signals/AuthSignals';
import { useSignals } from '@preact/signals-react/runtime';
import { useSignal, useSignalEffect } from '@preact/signals-react';
import { getMatchupsByIds, getTodaysMatchups } from '~/middleware/supabase/matchups';
import { MatchupType, ScoreboardType } from '~/types';
import { getScoreboards, getScoreboardsByIds } from '~/middleware/supabase/scoreboards';
import { Scoreboard } from '~/components/scoreboard/scoreboard';
import { MatchupInfo } from '~/components/matchup-info/matchup-info';
import { PickForm } from '~/components/pick-form/pick-form';
import { Suspense } from 'react';

export const Test = () => {
    useSignals();
    const currentUser = Auth.currentUserSignal.value;
    const currentSession = Auth.currentSessionSignal.value;
    const matchupsSig = useSignal<MatchupType[]>([]);
    const scoreboardsSig = useSignal<ScoreboardType[]>([]);
    const loading = useSignal<boolean>(true);
    useSignalEffect(() => {
        loading.value = true;
        getScoreboards().then((scoreboards) => {
            scoreboardsSig.value = scoreboards;
            const ids = scoreboards.map((sc) => sc.game_id);
            getMatchupsByIds(ids).then((ma) => {
                matchupsSig.value = ma;
                loading.value = false;
            });
        });
    });

    return (
        <Grid grow>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <Title>Scoreboard</Title>
                {loading.value ? (
                    <>Loading...</>
                ) : (
                    <>
                        <Card radius='md' w='100%' maw='400px' shadow='xl'>
                            <MatchupInfo matchup={matchupsSig.value[0]} />
                        </Card>
                        <Space h='lg' />
                        <Card radius='md' w='100%' maw='400px' shadow='xl'>
                            <Scoreboard
                                matchup={matchupsSig.value[0]}
                                scoreboard={
                                    scoreboardsSig.value.find(
                                        (sc) => sc.game_id === matchupsSig.value[0].game_id
                                    ) ?? scoreboardsSig.value[0]
                                }
                            />
                        </Card>
                    </>
                )}
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <Title>Picks</Title>
                <Card radius='md' w='100%' maw='400px' shadow='xl'>
                    {loading.value ? (
                        <>Loading...</>
                    ) : (
                        <PickForm
                            matchup={matchupsSig.value[0]}
                            scoreboard={
                                scoreboardsSig.value.find(
                                    (sc) => sc.game_id === matchupsSig.value[0].game_id
                                ) ?? scoreboardsSig.value[0]
                            }
                        />
                    )}
                </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <Title>Todays Matchups</Title>
                <Code block>{JSON.stringify(matchupsSig.value, null, 4)}</Code>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <Title>Todays Scoreboards</Title>
                <Code block>{JSON.stringify(scoreboardsSig.value, null, 4)}</Code>
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
