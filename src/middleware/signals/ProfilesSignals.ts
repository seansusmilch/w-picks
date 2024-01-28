import { signal } from '@preact/signals-react';
import * as Profiles from '~/middleware/supabase/profiles';

export const profiles = signal(await Profiles.getProfiles());
export const currentProfile = signal(await Profiles.getProfileById('not implemented yet'));