import { supa } from './supabaseClient';

export const getPicks = async () => {
    const { data, error } = await supa.from('picks').select();
    if (error) {
        throw error;
    }
    return data;
};
