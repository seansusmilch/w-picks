import Team from './Team';

/**
 * Pick is locked after start time of matchup
 */
export type Pick = {
    id: string;
    matchupId: string;
    userId: string;
    timestamp: number;
    winner: Team;
    comment: string;
}

export default Pick;