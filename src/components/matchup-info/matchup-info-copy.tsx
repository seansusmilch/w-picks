import '@/index.css';
import classNames from 'classnames';
import styles from './matchup-info.module.scss';
import { Icon, Classes } from '@blueprintjs/core';

export interface MatchupInfoProps {
    className?: string;
}

export const MatchupInfo = ({ className }: MatchupInfoProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames('container')}>
                <div className="row">
                    <div className={classNames(styles.awayteam, 'col', 'text-center')}>
                        <Icon
                            icon={'team'}
                            size={70}
                            intent="primary"
                            className={styles['team-logo']}
                        />
                        <div className="fs-4 fw-bolder">Timberwolves</div>
                    </div>
                    <div className="col-2 position-relative">
                        <div className="d-inline text-center position-absolute top-50 start-50 translate-middle">
                            <div className="fs-6 fw-bold">Wed</div>
                            <div className="fs-6 fw-bold">6:30</div>
                        </div>
                    </div>
                    <div className={classNames(styles.hometeam, 'col', 'text-center')}>
                        <Icon
                            icon={'team'}
                            size={70}
                            intent="primary"
                            className={styles['team-logo']}
                        />
                        <div className="fs-4 fw-bolder">Nuggets</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
