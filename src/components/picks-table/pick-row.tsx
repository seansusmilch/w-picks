import classNames from 'classnames';
import styles from './picks-table.module.scss';
import Pick from 'types/Pick';
import { TeamLogo } from 'components/team-logo/team-logo';
import { Table } from '@mantine/core';

export type PickRowProps = {
    className?: string;
    pick?: Pick;
};

export const PickRow = ({ className, pick }: PickRowProps) => {
    const team = Math.round(Math.random()) ? 'MIN' : 'DEN';
    return (
        <Table.Tr>
            <Table.Td>Glizzy Gobbler</Table.Td>
            <Table.Td><TeamLogo team={team} size={40}/></Table.Td>
            <Table.Td>Otto</Table.Td>
        </Table.Tr>
    );
};