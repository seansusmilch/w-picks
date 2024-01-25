import classNames from 'classnames';
import styles from './picks-table.module.scss';
import Pick from 'types/Pick';
import { TeamLogo } from 'components/team-logo/team-logo';

export type PickRowProps = {
    className?: string;
    pick?: Pick;
};

export const PickRow = ({ className, pick }: PickRowProps) => {
    const team = Math.round(Math.random()) ? 'MIN' : 'DEN';
    return (
        <tr>
            <td>Glizzy Gobbler</td>
            <td><TeamLogo team={team} size={40}/></td>
            <td>Otto</td>
        </tr>
    );
};