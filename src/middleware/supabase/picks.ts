import { PickType } from '~/types';
import { supa } from './supabaseClient';

export const getPicks = async () => {
    const { data, error } = await supa.from('picks').select();
    if (error) {
        throw error;
    }
    return data;
};

export const upsertPick = async (pick: PickType) => {
    const { error } = await supa.from('picks').upsert(pick);
    if (error) return { error };
    return { pick };
};
