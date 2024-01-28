import classNames from 'classnames';
import styles from './Matchup.module.scss';
import { MatchupInfo } from '@/components/matchup-info/matchup-info';
import { PicksTable } from '@/components/picks-table/picks-table';
import { signal } from '@preact/signals-react';
import { getMatchupById } from '~/middleware/supabase/matchups';
export interface MatchupProps {
    className?: string;
}

const thisMatchup = signal(await getMatchupById('not a real id'));

export const Matchup = ({ className }: MatchupProps) => {

    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames('container')}>
                <MatchupInfo matchup={thisMatchup.value} />
                <PicksTable picks={[]} />
            </div>
        </div>
    );
};
