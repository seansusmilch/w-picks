import classNames from 'classnames';
import styles from './picks-table.module.scss';
import {PickType} from '~/types';
import { PickRow } from './pick-row';
import { Table } from '@mantine/core';

export type PicksTableProps = {
    className?: string;
    picks: PickType[];
};

export const PicksTable = ({ className, picks }: PicksTableProps) => {
    const rows = Array(10)
        .fill(0)
        .map((_, i) => <PickRow key={i} />);
    return (
        <>
            <Table striped highlightOnHover>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Name</Table.Th>
                        <Table.Th>Pick</Table.Th>
                        <Table.Th>Comment</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </>
    );
};
