import { supa } from './supabaseClient';

export const getSession = async ({setSession}:{setSession?: Function, setUser?:Function}) => {
    const {data, error} = await supa.auth.getSession();
    const {session} = data;

    if (setSession) {
        setSession(session);
        supa.auth.onAuthStateChange((event, session) => setSession(session))
    }
}

export const signUpNewUser = async ({email, password, display_name}:{email:string, password:string, display_name:string}) => {
    const { data, error } = await supa.auth.signUp({
        email: email,
        password: password,
        options: {
            data:{
                display_name: display_name
            }
        }
    });
    console.log('data: ', data);
    console.log('error: ', error);
}

export const logInUser = async (email: string, password: string) => {
    const { data, error } = await supa.auth.signInWithPassword({
        email: email,
        password: password,
    });
    if (error) {
        throw error;
    }
}

export const logOutUser = async () => {
    const { error } = await supa.auth.signOut();
    if (error) {
        throw error;
    }
}