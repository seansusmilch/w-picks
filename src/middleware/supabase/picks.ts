import { PickType, parseDBPick } from '~/types';
import { supa } from './supabaseClient';

export const getPicks = async () => {
    const { data, error } = await supa.from('picks').select();
    if (error) {
        throw error;
    }
    return data.map((pick) => parseDBPick(pick));
};

export const getPicksByMatchupId = async (matchupId: number) => {
    const { data, error } = await supa.from('picks').select().eq('matchup_id', matchupId);
    if (error) {
        throw error;
    }
    return data.map((pick) => parseDBPick(pick));
};

export const getPicksByUserId = async (userId: string) => {
    const { data, error } = await supa.from('picks').select().eq('user_id', userId);
    if (error) {
        throw error;
    }
    return data.map((pick) => parseDBPick(pick));
};

export const getPickByMatchupAndUserId = async (userId: string, matchupId: number) => {
    const { data, error } = await supa
        .from('picks')
        .select()
        .eq('matchup_id', matchupId)
        .eq('user_id', userId)
        .single();
    if (error) {
        throw error;
    }
    return parseDBPick(data);
};

export const upsertPick = async (pick: PickType) => {
    const { error } = await supa.from('picks').upsert(pick);
    if (error) return { error };
    return {};
};

export const deletePick = async (user_id: string, matchup_id: number) => {
    const { error } = await supa
        .from('picks')
        .delete()
        .eq('matchup_id', matchup_id)
        .eq('user_id', user_id);
    if (error) return { error };
    return {};
};
