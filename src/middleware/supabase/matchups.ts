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

export const todaysMatchups = async () => {
    console.log('todaysMatchups not implemented yet, getting all matchups');
    return await getMatchups();
}

export const getMatchupById = async (id: string) => {
    console.log('getMatchupById not implemented yet, getting first matchup');
    return (await getMatchups())[0];
    const { data, error } = await supa.from('matchups').select().eq('id', id);
    if (error) {
        throw error;
    }
    return data;
}