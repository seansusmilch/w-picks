import { supa } from './supabaseClient';
import { MatchupType } from '~/types';

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

export const todaysMatchups = async () => {
    console.log('todaysMatchups not implemented yet, getting all matchups');
    return await getMatchups();
}

export const getMatchupById = async (id: string) => {
    const { data, error } = await supa.from('matchups').select().eq('id', id).single();
    if (error) {
        throw error;
    }
    return data;
}