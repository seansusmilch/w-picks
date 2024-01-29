import { supa } from './supabaseClient';

export const getSession = async () => {
    const { data, error } = await supa.auth.getSession();
    if (error) console.error('getSession error: ', error);
    const { session } = data;
    return session;
};

export const getUser = async () => {
    const { data, error } = await supa.auth.getUser();
    if (error) {
        console.error('getUser error: ', error);
        await logOutUser();
        return null;
    }
    const { user } = data;
    return user;
};

export const signUpNewUser = async ({
    email,
    password,
    display_name,
}: {
    email: string;
    password: string;
    display_name: string;
}) => {
    const { data, error } = await supa.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                display_name: display_name,
            },
        },
    });
    console.log('data: ', data);
    console.log('error: ', error);
    return { ...data, error };
};

export const logInUser = async (email: string, password: string) => {
    const { data, error } = await supa.auth.signInWithPassword({
        email: email,
        password: password,
    });

    return { ...data, error };
};

export const logOutUser = async () => {
    const { error } = await supa.auth.signOut();
    if (error) {
        throw error;
    }
};
