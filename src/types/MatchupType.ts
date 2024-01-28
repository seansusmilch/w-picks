import { PickType } from './PickType';
import { TeamAbbrv } from './TeamType';

export type MatchupType = {
    id: string;
    home_team: TeamAbbrv;
    away_team: TeamAbbrv;
    matchup_timestamp: string;
};

export type DBMatchupType = {
    id: string;
    created_at: string;
    matchup_timestamp: string;
    home_team: TeamAbbrv;
    away_team: TeamAbbrv;
};
