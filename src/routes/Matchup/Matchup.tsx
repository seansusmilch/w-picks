import classNames from 'classnames';
import styles from './Matchup.module.scss';
import { MatchupInfo } from '@/components/matchup-info/matchup-info';
import { PicksTable } from '@/components/picks-table/picks-table';
import { signal, useSignal, useSignalEffect } from '@preact/signals-react';
import { useParams } from 'react-router-dom';
import { getMatchupById } from '~/middleware/supabase/matchups';
import { useSignals } from '@preact/signals-react/runtime';
import { ErrorMessage } from '~/components/error-message/error-message';
import { MatchupType } from '~/types/MatchupType';
export interface MatchupProps {
    className?: string;
}

export const Matchup = ({ className }: MatchupProps) => {
    useSignals();

    const id = useParams<{ id: string }>().id;
    if (!id) {
        console.log('no id');
        return <ErrorMessage title="No Matchup ID" message="No matchup id provided" />;
    }

    const matchupIdSignal = useSignal(id);
    const matchupSignal = useSignal<any>(null);
    useSignalEffect(() => {
        getMatchupById(matchupIdSignal.value).then((matchup) => (matchupSignal.value = matchup));
    });

    console.log(matchupSignal.value)
    return(<>
        {matchupSignal.value ? (
            <div className={classNames(styles.root, className)}>
                <div className={classNames('container')}>
                    <MatchupInfo matchup={matchupSignal.value} />
                    <PicksTable picks={[]} />
                </div>
            </div>
        ):(<>Loading...</>)}
    </>)
};
