import {signal , effect} from '@preact/signals-react';
import { Session, User } from '@supabase/gotrue-js';
import * as Auth from '~/middleware/supabase/auth';
import { supa } from '~/middleware/supabase/supabaseClient';

export const currentUserSignal = signal<User|null>(await Auth.getUser());
export const currentSessionSignal = signal<Session|null>(await Auth.getSession());

supa.auth.onAuthStateChange((event, session) => {
    console.log('onAuthStateChange', event);
    currentSessionSignal.value = session;
});

effect(() => console.log('currentUserSignal changed', currentUserSignal.value))
effect(() => console.log('currentSessionSignal changed', currentSessionSignal.value))

export const testSignal = signal(0);
setInterval(() => testSignal.value = Math.random(), 500);
// effect(() => console.log('testSignal changed', testSignal.value));