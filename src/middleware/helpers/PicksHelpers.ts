import { TeamAbbrv, PickType } from '~/types';
import {
    upsertPick,
    getPicksByMatchupId,
    deletePick,
    getPickByMatchupAndUserId,
} from '../supabase/picks';
import { currentUserSignal } from '~/middleware/signals/AuthSignals';

/**
 * TODO: Need to account for when the user has already made a pick
 */
export const upsertPickHelper = async (pick: PickType) => {
    if (!currentUserSignal.value) throw new Error('You must be logged in to make a pick.');

    const { user_id, matchup_id, parlay_id, created_at, updated_at, winner, comment } = pick;

    return await upsertPick({
        user_id: user_id,
        matchup_id: matchup_id,
        parlay_id: parlay_id,
        created_at: created_at,
        updated_at: updated_at,
        winner: winner,
        comment: comment,
    });
};

export const getMatchupPicksHelper = async (matchupId: number) => {
    return await getPicksByMatchupId(matchupId);
};

export const deletePickHelper = async (user_id: string, matchup_id: number) => {
    if (!currentUserSignal.value) throw new Error('You must be logged in to delete a pick.');

    return await deletePick(user_id, matchup_id);
};

export const getMyPickByMatchup = async (user_id: string, matchup_id: number) => {
    return await getPickByMatchupAndUserId(user_id, matchup_id);
};
