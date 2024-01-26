import '@/index.css';
import classNames from 'classnames';
import styles from './matchup-info.module.scss';
import { TeamLogo } from 'components/team-logo/team-logo';
import { Grid, Flex, Text, Title, Center } from '@mantine/core';

export interface MatchupInfoProps {
    className?: string;
}

export const MatchupInfo = ({ className }: MatchupInfoProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Grid>
                <Grid.Col span={5} className={classNames(styles.awayteam)}>
                    <TeamLogo team={'MIN'} />
                    <Title visibleFrom='md' size="h2">Timberwolves</Title>
                    <Title hiddenFrom='md' order={4} size="h4">Timberwolves</Title>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Flex direction="column" align="center" justify="center" h='100%'>
                        <Text size="lg" fw={700}>
                            Wed
                        </Text>
                        <Text size="lg" fw={700}>
                            6:30
                        </Text>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={5} className={classNames(styles.hometeam)}>
                    <TeamLogo team={'DEN'} />
                    <Title visibleFrom='md' size="h2">Nuggets</Title>
                    <Title hiddenFrom='md' order={4} size="h4">Nuggets</Title>
                </Grid.Col>
            </Grid>
        </div>
    );
};
