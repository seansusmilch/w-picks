import Team, { TeamAbbrv } from './TeamType';

/**
 * Pick is locked after start time of matchup
 */
export type PickType = {
    id: string;
    matchupId: string;
    userId: string;
    timestamp: number;
    winner: Team;
    comment: string;
}

export type DBPickType = {
    id: string;
    created_at: string;
    matchup_id: string;
    user_id: string;
    parlay_id: string|null;
    winnier: TeamAbbrv;
    comment: string|null;
}