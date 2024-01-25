import classNames from 'classnames';
import styles from './team-logo.module.scss';
import Logos from './Logos';

export type TeamLogoProps = {
    className?: string;
    team: keyof typeof Logos;
    teamName?: string;
    size?: number;
};

export const TeamLogo = ({ className, team='NBA', teamName='NBA', size=100 }: TeamLogoProps) => {
    const TeamLogo = Logos[team];
    return (
        <span className={classNames(styles.logo, className)}>
            <img
                title={`${teamName} logo`}
                width={size}
                height={size}
                src={TeamLogo}
                />
        </span>
    );
};
