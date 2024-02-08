import { supa } from './supabaseClient';
import { MatchupType, DBMatchupType, parseDBMatchup } from '~/types';

export const getMatchups = async (): Promise<MatchupType[]> => {
    const { data, error } = await supa.from('matchups').select();
    if (error) {
        throw error;
    }

    return data.map((matchup: DBMatchupType) => parseDBMatchup(matchup));
};

export const todaysMatchups = async () => {
    console.log('todaysMatchups not implemented yet, getting all matchups');
    return await getMatchups();
};

export const getMatchupById = async (id: string): Promise<MatchupType> => {
    const { data, error } = await supa.from('matchups').select().eq('game_id', id).single();
    if (error) {
        throw error;
    }
    return parseDBMatchup(data);
};

export const getMatchupsByIds = async (ids: number[]): Promise<MatchupType[]> => {
    const { data, error } = await supa.from('matchups').select().in('game_id', ids);
    if (error) {
        throw error;
    }
    return data.map((matchup: DBMatchupType) => parseDBMatchup(matchup));
};

export const getMatchupByCode = async (code: string): Promise<MatchupType> => {
    const { data, error } = await supa.from('matchups').select().eq('game_code', code).single();
    if (error) {
        throw error;
    }
    return parseDBMatchup(data);
};

/**
 * Takes two date ISO strings and returns all matchups between\
 * ex. '2024-02-02T06:00:00.000Z'
 * @param lower lower limit (inclusive)
 * @param upper upper limit (inclusive) Date.toISOString() ex. '2021-10-01T00:00:00.000Z'
 * @returns
 */
export const getMatchupByDateRange = async (
    lower: string,
    upper: string
): Promise<MatchupType[]> => {
    const { data, error } = await supa
        .from('matchups')
        .select()
        .gte('game_time_utc', lower)
        .lte('game_time_utc', upper)
        .order('game_time_utc', { ascending: true });

    if (error) {
        throw error;
    }

    return data.map((matchup: DBMatchupType) => parseDBMatchup(matchup));
};

export const getTodaysMatchups = async (): Promise<MatchupType[]> => {
    const dt = new Date();
    dt.setHours(0, 0, 0, 0);
    const todayString = dt.toISOString();
    dt.setHours(23, 59, 59, 999);
    const tomorrowString = dt.toISOString();
    console.log('lower', todayString, 'upper', tomorrowString);
    return await getMatchupByDateRange(todayString, tomorrowString);
};
