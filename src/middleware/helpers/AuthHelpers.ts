import { logInUser } from '~/middleware/supabase/auth';
import { currentSessionSignal, currentUserSignal } from '~/middleware/signals/AuthSignals';
import { getProfileById, upsertProfile } from '~/middleware/supabase/profiles';
import { DBProfileType } from '~/types';
import { minidenticon } from 'minidenticons';
import { myProfileSignal } from '../signals/ProfilesSignals';

/**
 * @description Will log in the user, set current session, user, and profile signals.
 * If user does not have profile, will create one.
 * @returns \{ error \} if there is one
 */
export const HandleLogin = async (email: string, password: string) => {
    const { user, session, error } = await logInUser(email, password);

    if (error) {
        console.log('Login error', error);
        error.name = 'Login Error';
        return { error };
    }

    if (!user) return { error: { name: 'Login Error', message: 'No user returned' } };
    if (!session) return { error: { name: 'Login Error', message: 'No session returned' } };

    console.log('logIn', user, session);
    currentSessionSignal.value = session;
    currentUserSignal.value = user;

    // set up profile
    const profileRes = await getProfileById(user.id);
    if (profileRes.error) {
        if (profileRes.error.code === 'PGRST116') {
            // result contains 0 rows, profile doenst exist yet
            const newProfile: DBProfileType = {
                id: user.id,
                display_name: user.user_metadata.display_name,
                created_at: new Date().toISOString(),
                avatar_url:
                    'data:image/svg+xml;utf8,' +
                    encodeURIComponent(minidenticon(user.user_metadata.display_name, 95, 50)),
            };

            const createProfileRes = await upsertProfile(newProfile);
            if (createProfileRes.error)
                return {
                    error: {
                        name: 'Create Profile Error',
                        message: createProfileRes.error.details,
                    },
                };
            const { data, error } = await getProfileById(user.id);
            if (error)
                return {
                    error: {
                        name: 'Login Error',
                        message: `Created profile but no profile returned. ${error.details}`,
                    },
                };
            if (!data) return { error: { name: 'Login Error', message: 'No profile returned' } };
            myProfileSignal.value = data;
            return { error: null };
        }
    }
    if (!profileRes.data) return { error: { name: 'Login Error', message: 'No profile returned' } };

    myProfileSignal.value = profileRes.data;
    return { error: null };
};

/**
 * @description Will register the user. The user must confirm their email before they can log in.
 */
export const HandleRegistration = async () => {};
