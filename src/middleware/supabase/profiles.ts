import { supa } from './supabaseClient';

export const getProfiles = async () => {
    const { data, error } = await supa.from('profiles').select();
    if (error) {
        throw error;
    }
    return data;
}

export const getProfileById = async (id: string) => {
    const { data, error } = await supa.from('profiles').select().eq('id', id);
    if (error) console.log('getProfileById error: ', error)
    return data;
}