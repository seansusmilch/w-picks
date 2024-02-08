import { Grid, Title, Text, Flex, Space, Badge } from '@mantine/core';
import { IconArrowBigLeft, IconArrowBigRight } from '@tabler/icons-react';
import { TeamLogo } from '~/components/team-logo/team-logo';
import { Teams, MatchupType, ScoreboardType } from '~/types';

export type ScoreboardProps = {
    className?: string;
    matchup: MatchupType;
    scoreboard: ScoreboardType;
};

const GameStatusIndicator = ({
    gameStatus,
    gameStatusText,
}: {
    gameStatus: number;
    gameStatusText: string;
}) => {
    switch (gameStatus) {
        case 1:
            return (
                <Badge variant='light' color='gray'>
                    Scheduled
                </Badge>
            );
        case 2:
            return (
                <Badge
                    size='lg'
                    variant='gradient'
                    gradient={{ from: 'yellow', to: 'pink', deg: 100 }}
                >
                    {gameStatusText}
                </Badge>
            );
        case 3:
            return (
                <Badge
                    size='lg'
                    variant='gradient'
                    gradient={{ from: 'violet', to: 'cyan', deg: 80 }}
                >
                    {gameStatusText}
                </Badge>
            );
        default:
            return <Space w='md' />;
    }
};

const WLIndicator = ({
    homeScore,
    awayScore,
    team,
}: {
    homeScore: number;
    awayScore: number;
    team: 'home' | 'away';
}) => {
    const size = 40;
    if (team === 'home') {
        return homeScore > awayScore ? (
            <Text c='green' fw={900}>
                W
            </Text>
        ) : (
            <Text c='red' fw={900}>
                L
            </Text>
        );
    }
    return awayScore > homeScore ? (
        <Text c='green' fw={900}>
            W
        </Text>
    ) : (
        <Text c='red' fw={900}>
            L
        </Text>
    );
};

export const Scoreboard = ({ scoreboard, matchup }: ScoreboardProps) => {
    if (!matchup || !scoreboard || !matchup.home_team_tricode || !matchup.away_team_tricode) {
        console.error('Scoreboard component requires a matchup and a scoreboard');
        return null;
    }
    const homeTeamName = Teams[matchup.home_team_tricode].name;
    const awayTeamName = Teams[matchup.away_team_tricode].name;

    return (
        <Grid>
            <Grid.Col span={3}>
                <Flex direction='column' align='center'>
                    <TeamLogo team={matchup.away_team_tricode} size={60} />
                    <Text size='md'>{awayTeamName}</Text>
                </Flex>
            </Grid.Col>
            <Grid.Col span={6}>
                <Flex direction='column' align='center' justify='center' h='100%'>
                    <Flex direction='row' align='center' gap='xl' justify='center' h='100%'>
                        <Flex direction='column' align='center' justify='center' w='100%'>
                            {scoreboard.game_status === 3 && (
                                <WLIndicator
                                    homeScore={scoreboard.home_score}
                                    awayScore={scoreboard.away_score}
                                    team='away'
                                />
                            )}
                            <Title order={2}>{scoreboard.away_score}</Title>
                        </Flex>
                        <Space w='lg' />
                        <Flex direction='column' align='center' justify='center' w='100%'>
                            {scoreboard.game_status === 3 && (
                                <WLIndicator
                                    homeScore={scoreboard.home_score}
                                    awayScore={scoreboard.away_score}
                                    team='home'
                                />
                            )}

                            <Title order={2}>{scoreboard.home_score}</Title>
                        </Flex>
                    </Flex>
                    <GameStatusIndicator
                        gameStatus={scoreboard.game_status}
                        gameStatusText={scoreboard.game_status_text}
                    />
                </Flex>
            </Grid.Col>
            <Grid.Col span={3} ta='right'>
                <Flex direction='column' align='center'>
                    <TeamLogo team={matchup.home_team_tricode} size={60} />
                    <Text size='md'>{homeTeamName}</Text>
                </Flex>
            </Grid.Col>
        </Grid>
    );
};
