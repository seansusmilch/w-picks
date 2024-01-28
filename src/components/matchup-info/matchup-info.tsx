import '@/index.css';
import classNames from 'classnames';
import styles from './matchup-info.module.scss';
import { TeamLogo } from 'components/team-logo/team-logo';
import { Grid, Flex, Text, Title } from '@mantine/core';
import { MatchupType, Teams } from '~/types'

export interface MatchupInfoProps {
    className?: string;
    matchup: MatchupType;
}

export const MatchupInfo = ({ className, matchup}: MatchupInfoProps) => {
    const gameTime = new Date(Date.parse(matchup.matchup_timestamp));
    const homeTeamName = Teams[matchup.home_team].name
    const awayTeamName = Teams[matchup.away_team].name

    return (
        <Grid>
            <Grid.Col span={5} className={classNames(styles.awayteam)}>
                <TeamLogo team={matchup.away_team} />
                <Title visibleFrom='md' size="h2">{awayTeamName}</Title>
                <Title hiddenFrom='md' order={4} size="h4">{awayTeamName}</Title>
            </Grid.Col>
            <Grid.Col span={2}>
                <Flex direction="column" align="center" justify="center" h='100%'>
                    <Text size="sm" fw={900}>
                        {gameTime.toLocaleString('en-US', { weekday: 'short' }).toUpperCase()}
                    </Text>
                    <Text size="md" fw={700}>
                        {gameTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).replace(' AM', 'a').replace(' PM', 'p')}
                    </Text>
                </Flex>
            </Grid.Col>
            <Grid.Col span={5} className={classNames(styles.hometeam)}>
                <TeamLogo team={matchup.home_team} />
                <Title visibleFrom='md' size="h2">{homeTeamName}</Title>
                <Title hiddenFrom='md' order={4} size="h4">{homeTeamName}</Title>
            </Grid.Col>
        </Grid>
    );
};
