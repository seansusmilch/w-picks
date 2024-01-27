import { supa } from './supabaseClient';

export const getMatchups = async () => {
    const { data, error } = await supa.from('matchups').select();
    if (error) {
        throw error;
    }
    return data;
}

export const getPicks = async () => {
    const { data, error } = await supa.from('picks').select();
    if (error) {
        throw error;
    }
    return data;
}