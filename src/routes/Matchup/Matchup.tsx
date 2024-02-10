import classNames from 'classnames';
import styles from './Matchup.module.scss';
import { MatchupInfo } from '@/components/matchup-info/matchup-info';
import { PicksTable } from '@/components/picks-table/picks-table';
import { signal, useSignal, useSignalEffect } from '@preact/signals-react';
import { useParams } from 'react-router-dom';
import { getMatchupById } from '~/middleware/supabase/matchups';
import { ScrollArea, Stack, Space, Container } from '@mantine/core';
import { useSignals } from '@preact/signals-react/runtime';
import { ErrorMessage } from '~/components/error-message/error-message';
import { MatchupType } from '~/types/MatchupType';
import { PickForm } from '~/components/pick-form/pick-form';
import { useViewportSize } from '@mantine/hooks';

export interface MatchupProps {
    className?: string;
}

export const Matchup = ({ className }: MatchupProps) => {
    useSignals();

    const id = useParams<{ id: string }>().id;
    if (!id) {
        console.log('no id');
        return <ErrorMessage title='No Matchup ID' message='No matchup id provided' />;
    }

    const matchupIdSignal = useSignal(id);
    const matchupSignal = useSignal<any>(null);
    useSignalEffect(() => {
        getMatchupById(matchupIdSignal.value).then((matchup) => (matchupSignal.value = matchup));
    });
    const { height } = useViewportSize();

    console.log(matchupSignal.value);
    return (
        <>
            {matchupSignal.value ? (
                <>
                    <MatchupInfo matchup={matchupSignal.value} />

                    <ScrollArea
                        maw='100%'
                        h={height - 230}
                        pt='lg'
                        scrollbars='y'
                        scrollbarSize='xs'
                    >
                        <Stack gap='lg' pt='xl'>
                            <PickForm matchup={matchupSignal.value} scoreboard={null} />
                            <PicksTable picks={[]} />
                        </Stack>
                    </ScrollArea>
                </>
            ) : (
                <>Loading...</>
            )}
        </>
    );
};
