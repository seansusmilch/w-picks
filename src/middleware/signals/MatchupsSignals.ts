import { signal } from '@preact/signals-react';
import * as Matchups from '~/middleware/supabase/matchups';
import { Matchup } from '~/types';

export const picksSignal = signal(await Matchups.getPicks());
export const matchupsSignal = signal(await Matchups.getMatchups());
export const todaysMatchupsSignal = signal<Matchup[]>(await Matchups.todaysMatchups());
export const usersSignal = signal('None yet');