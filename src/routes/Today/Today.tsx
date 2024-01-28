import classNames from 'classnames';
import { Card, Flex } from '@mantine/core';
import { Link } from 'react-router-dom';
import { MatchupInfo } from '@/components/matchup-info/matchup-info';
import { todaysMatchupsSignal } from '~/middleware/signals/MatchupsSignals';

export interface MatchupProps {
    className?: string;
}

export const Today = ({ className }: MatchupProps) => {

    const shownMatchups = todaysMatchupsSignal.value.map((matchup) => 
    <Card component={Link} to={`/Matchup/${matchup.id}`} key={matchup.id} maw='500px' shadow="sm" padding="sm" radius="md" withBorder>
        <MatchupInfo matchup={matchup} />
    </Card>
        
    );

    return (
        <Flex
            direction='column'
            gap='sm'>
            {shownMatchups}
        </Flex>
    );
};
