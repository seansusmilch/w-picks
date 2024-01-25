import { Pick } from './Pick';

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