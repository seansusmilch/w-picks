import classNames from 'classnames';
import styles from './picks-table.module.scss';
import Pick from 'types/Pick';
import Table from 'react-bootstrap/Table';
import { PickRow } from './pick-row';

export type PicksTableProps = {
    className?: string;
    picks: Pick[];
};

export const PicksTable = ({ className, picks }: PicksTableProps) => {
    const rows = Array(10).fill(0).map((_, i) => <PickRow key={i} />)
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Pick</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
    );
};
