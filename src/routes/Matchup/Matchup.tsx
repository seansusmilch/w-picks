import classNames from 'classnames';
import styles from './Matchup.module.scss';
import { MatchupInfo } from '@/components/matchup-info/matchup-info';
import { PicksTable } from '@/components/picks-table/picks-table';

export interface MatchupProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Matchup = ({ className }: MatchupProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames('container')}>
                <MatchupInfo />
                <PicksTable picks={[]} />
            </div>
        </div>
    );
};
