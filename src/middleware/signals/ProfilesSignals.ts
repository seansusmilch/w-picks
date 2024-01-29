import { signal, effect } from '@preact/signals-react';
import { getProfiles, getProfileById } from '~/middleware/supabase/profiles';
import { currentUserSignal } from '~/middleware/signals/AuthSignals';
import { DBProfileType, ProfileType } from '~/types';

export const profiles = signal<DBProfileType[] | null>(await getProfiles());
export const myProfileSignal = signal<ProfileType | null>(null);

effect(() => {
    if (!currentUserSignal.value) return;
    if (myProfileSignal.value && myProfileSignal.value.id === currentUserSignal.value.id) return;

    getProfileById(currentUserSignal.value.id).then((profile) => {
        myProfileSignal.value = profile.data;
    });
});
