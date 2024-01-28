import { PickType } from './PickType';

/**
 * Parlay is a collection of picks
 * 
 * Only create parlay if user submits picks for all matchups in a day
 * 
 * Parlay is locked if any picks are locked
 */
export type ParlayType = {
    id: string;
    picks: PickType[];
    date: number;   // Match with dates of matchups
    userId: string;
    timestamp: number;
}

export type DBParlayType = {
    id: string;
    created_at: string;
    user_id: string;
    date: string // TODO: need to figure what this is
    picks: string[];
}