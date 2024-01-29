import { supa } from './supabaseClient';
import { DBProfileType } from '~/types';

export const getProfiles = async () => {
    const { data, error } = await supa.from('profiles').select();
    if (error) {
        throw error;
    }
    return data;
};

export const getProfileById = async (id: string) => {
    const { data, error } = await supa.from('profiles').select().eq('id', id).single();
    if (error) console.log('getProfileById error: ', error);
    return { data, error };
};

/**
 * Updates or inserts a profile into the database
 * @param profile profile to upsert
 * @returns upserted profile or error
 */
export const upsertProfile = async (profile: DBProfileType) => {
    const { data, error } = await supa.from('profiles').upsert(profile).select();
    if (error) {
        console.log('upsertProfile error: ', error);
    }

    return { data, error };
};
