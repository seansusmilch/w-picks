import classNames from 'classnames';
import styles from './picks-table.module.scss';
import { PickType } from '~/types';
import { Grid, Stack, Title } from '@mantine/core';

export type PicksTableProps = {
    className?: string;
    picks: PickType[];
};

export const PicksTable = ({ className, picks }: PicksTableProps) => {
    const rows = Array.from(Array(20)).map((_, i) => (
        <Grid w='100%' key={i}>
            <Grid.Col span={4}>Name</Grid.Col>
            <Grid.Col ta='center' span={4}>
                Pick
            </Grid.Col>
            <Grid.Col span={4}>This is pick {i}</Grid.Col>
        </Grid>
    ));

    console.log('Picks', rows);

    return (
        <>
            <Stack w='100%'>
                <Title order={3}>
                    <Grid w='100%'>
                        <Grid.Col span={4}>Name</Grid.Col>
                        <Grid.Col ta='center' span={4}>
                            Pick
                        </Grid.Col>
                        <Grid.Col span={4}>Comment</Grid.Col>
                    </Grid>
                </Title>

                {rows}
            </Stack>
        </>
    );
};
