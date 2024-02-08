import classNames from 'classnames';
import { Card, Flex } from '@mantine/core';
import { Link } from 'react-router-dom';
import { MatchupInfo } from '@/components/matchup-info/matchup-info';
import { todaysMatchupsSignal } from '~/middleware/signals/MatchupsSignals';
import { todaysScoreboardsSignal } from '~/middleware/signals/ScoreboardsSignals';
import { Scoreboard } from '~/components/scoreboard/scoreboard';
import { signal, useSignalEffect } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';
import { getScoreboardsByIds, getTodaysScoreboards } from '~/middleware/supabase/scoreboards';

export interface MatchupProps {
    className?: string;
}

const lastUpdated = signal<Date | null>(null);

export const Today = ({ className }: MatchupProps) => {
    useSignals();
    useSignalEffect(() => {
        const interval = setInterval(async () => {
            const matchIds = todaysMatchupsSignal.value.map((mu) => mu.game_id);

            // Allow update on first load or if there are games in progress
            if (
                !lastUpdated.value ||
                todaysScoreboardsSignal.value.some((sb) => sb.game_status === 2)
            ) {
                todaysScoreboardsSignal.value = await getScoreboardsByIds(matchIds);
                lastUpdated.value = new Date();
                console.log('Updated');
                return;
            }

            // if the last update was more than 1 minute ago, update
            if (lastUpdated.value && Date.now() - lastUpdated.value.getTime() > 1000 * 60) {
                todaysScoreboardsSignal.value = await getTodaysScoreboards();
                lastUpdated.value = new Date();
                console.log('Updated');
                return;
            }
        }, 1000 * 5);

        return () => clearInterval(interval);
    });

    const shownMatchups = todaysMatchupsSignal.value.map((matchup) => {
        const scoreboard = todaysScoreboardsSignal.value.find(
            (sb) => sb.game_id === matchup.game_id
        );
        return (
            <Card
                component={Link}
                to={`/Matchup/${matchup.game_id}`}
                key={matchup.game_id}
                maw='500px'
                shadow='sm'
                padding='sm'
                radius='md'
                withBorder
            >
                {scoreboard && scoreboard.game_status > 1 ? (
                    <Scoreboard matchup={matchup} scoreboard={scoreboard} />
                ) : (
                    <MatchupInfo matchup={matchup} />
                )}
            </Card>
        );
    });

    return (
        <Flex direction='column' gap='sm'>
            {shownMatchups}
            {lastUpdated.value && <>Last updated: {lastUpdated.value.toLocaleTimeString()}</>}
        </Flex>
    );
};
