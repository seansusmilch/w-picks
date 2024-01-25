import '../../index.css';
import classNames from 'classnames';
import styles from './matchup-info.module.scss';
import { Icon, Classes } from '@blueprintjs/core';

export interface MatchupInfoProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const MatchupInfo = ({ className }: MatchupInfoProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames(styles['grid-container'], styles['matchup-info-container'])}>
                <div className={styles.awayteam}>
                    <Icon
                        icon={'team'}
                        size={80}
                        intent="primary"
                        className={styles['team-logo']}
                    />
                    <div>Timberwolves</div>
                </div>
                <div className="grid-item">
                    <h2 className={styles.versus}>VS</h2>
                </div>
                <div className={styles.hometeam}>
                    <Icon
                        icon={'team'}
                        size={80}
                        intent="primary"
                        className={styles['team-logo']}
                    />
                    <div>Nuggets</div>
                </div>
            </div>
        </div>
    );
};
