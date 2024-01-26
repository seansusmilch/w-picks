import {Team} from './Team';

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

/**
 * Parlay is a collection of picks
 * 
 * Only create parlay if user submits picks for all matchups in a day
 * 
 * Parlay is locked if any picks are locked
 */
export type Parlay = {
    id: string;
    picks: Pick[];
    date: number;   // Match with dates of matchups
    userId: string;
    timestamp: number;
}