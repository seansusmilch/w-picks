import { signal } from '@preact/signals-react';
import * as Matchups from '~/middleware/supabase/matchups';
import { MatchupType } from '~/types';

export const matchupsSignal = signal(await Matchups.getMatchups());
export const todaysMatchupsSignal = signal<MatchupType[]>(await Matchups.getTodaysMatchups());
export const usersSignal = signal('None yet');
