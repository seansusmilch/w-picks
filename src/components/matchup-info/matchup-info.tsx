import '@/index.css';
import classNames from 'classnames';
import styles from './matchup-info.module.scss';
import { TeamLogo } from 'components/team-logo/team-logo';
import { Grid, Flex, Text, Title, Tooltip } from '@mantine/core';
import { MatchupType, Teams } from '~/types';

export interface MatchupInfoProps {
    className?: string;
    matchup: MatchupType;
}

// TODO: Add exact date and time on hover

export const MatchupInfo = ({ className, matchup }: MatchupInfoProps) => {
    const gameTime = new Date(Date.parse(matchup.game_time_utc));
    let homeTeamName = 'TBD';
    let awayTeamName = 'TBD';

    if (matchup.home_team_tricode) homeTeamName = Teams[matchup.home_team_tricode]?.name;
    if (matchup.away_team_tricode) awayTeamName = Teams[matchup.away_team_tricode]?.name;

    return (
        <Grid>
            <Grid.Col span={5} className={classNames(styles.awayteam)}>
                {matchup.away_team_tricode ? (
                    <TeamLogo team={matchup.away_team_tricode} />
                ) : (
                    <>TBD</>
                )}
                <Title visibleFrom='md' size='h2'>
                    {awayTeamName}
                </Title>
                <Title hiddenFrom='md' order={4} size='h4'>
                    {awayTeamName}
                </Title>
            </Grid.Col>
            <Grid.Col span={2}>
                <Flex direction='column' align='center' justify='center' h='100%'>
                    <Tooltip
                        label={gameTime.toLocaleString('en-US', {
                            timeZoneName: 'shortGeneric',
                        })}
                        openDelay={500}
                    >
                        <div>
                            <Text size='sm' fw={900} ta='center'>
                                {gameTime
                                    .toLocaleString('en-US', { weekday: 'short' })
                                    .toUpperCase()}
                            </Text>
                            <Text size='md' fw={700} ta='center'>
                                {gameTime
                                    .toLocaleString('en-US', {
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        hour12: true,
                                    })
                                    .replace(' AM', 'a')
                                    .replace(' PM', 'p')}
                            </Text>
                        </div>
                    </Tooltip>
                </Flex>
            </Grid.Col>
            <Grid.Col span={5} className={classNames(styles.hometeam)}>
                {matchup.home_team_tricode ? (
                    <TeamLogo team={matchup.home_team_tricode} />
                ) : (
                    <>TBD</>
                )}

                <Title visibleFrom='md' size='h2'>
                    {homeTeamName}
                </Title>
                <Title hiddenFrom='md' order={4} size='h4'>
                    {homeTeamName}
                </Title>
            </Grid.Col>
        </Grid>
    );
};
