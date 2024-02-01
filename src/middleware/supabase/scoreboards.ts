import { supa } from './supabaseClient';
import { ScoreboardType, DBScoreboardType, parseDBScoreboard } from '~/types';

export const getScoreboards = async (): Promise<ScoreboardType[]> => {
    const { data, error } = await supa.from('scoreboards').select();
    if (error) {
        throw error;
    }
    return data.map((scoreboard: DBScoreboardType) => parseDBScoreboard(scoreboard));
};

export const getScoreboardById = async (id: string): Promise<ScoreboardType> => {
    const { data, error } = await supa.from('scoreboards').select().eq('game_id', id).single();
    if (error) {
        throw error;
    }
    return parseDBScoreboard(data);
};

export const getScoreboardByCode = async (code: string): Promise<ScoreboardType> => {
    const { data, error } = await supa.from('scoreboards').select().eq('game_code', code).single();
    if (error) {
        throw error;
    }
    return parseDBScoreboard(data);
};
