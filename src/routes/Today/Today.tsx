import classNames from 'classnames';
import { Card, Flex} from '@mantine/core';
import { MatchupInfo } from '@/components/matchup-info/matchup-info';
import { todaysMatchupsSignal } from '~/middleware/signals/MatchupsSignals';

export interface MatchupProps {
    className?: string;
}

export const Today = ({ className }: MatchupProps) => {

    const shownMatchups = todaysMatchupsSignal.value.map((matchup) => 
    <Card key={matchup.id} maw='500px' shadow="sm" padding="sm" radius="md" withBorder>
        <MatchupInfo matchup={matchup} />
    </Card>
        
    );

    return (
        <div className={classNames(className)}>
            <Flex
                direction='column'
                gap='sm'>
                {shownMatchups}
            </Flex>
        </div>
    );
};
