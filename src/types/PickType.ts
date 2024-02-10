import Team, { TeamAbbrv } from './TeamType';

/**
 * Pick is locked after start time of matchup
 */
export type PickType = {
    // composite primary key
    user_id: string;
    matchup_id: number;

    parlay_id: number | null;
    created_at: string | null | undefined;
    updated_at: string | null | undefined;
    winner: string;
    comment: string;
};

export type DBPickType = {
    // composite primary key
    user_id: string;
    matchup_id: number;

    parlay_id: number | null;
    created_at: string;
    updated_at: string;
    winner: string;
    comment: string;
};

export const parseDBPick = (dbPick: DBPickType): PickType => {
    return {
        user_id: dbPick.user_id,
        matchup_id: dbPick.matchup_id,
        parlay_id: dbPick.parlay_id,
        created_at: dbPick.created_at,
        updated_at: dbPick.updated_at,
        winner: dbPick.winner,
        comment: dbPick.comment,
    };
};
