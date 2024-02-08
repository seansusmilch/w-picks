import { effect, signal } from '@preact/signals-react';
import { ScoreboardType } from '~/types';
import { todaysMatchupsSignal } from './MatchupsSignals';

export const todaysScoreboardsSignal = signal<ScoreboardType[]>([]);

effect(async () => {
    const { getScoreboardsByIds } = await import('~/middleware/supabase/scoreboards');
    if (todaysMatchupsSignal.value.length === 0) return;

    const matchIds = todaysMatchupsSignal.value.map((mu) => mu.game_id);
    todaysScoreboardsSignal.value = await getScoreboardsByIds(matchIds);
});
