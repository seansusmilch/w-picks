import Team, { TeamAbbrv } from './TeamType';

/**
 * Pick is locked after start time of matchup
 */
export type PickType = {
    // composite primary key
    user_id: string;
    matchup_id: number;

    parlay_id: number | null;
    created_at: string;
    updated_at: string;
    winner: string;
    comment: string | null;
};

export type DBPickType = {
    // composite primary key
    user_id: string;
    matchup_id: number;

    parlay_id: number | null;
    created_at: string;
    updated_at: string;
    winner: string;
    comment: string | null;
};
