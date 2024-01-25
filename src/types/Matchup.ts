import Pick from './Pick';
import {Team} from './Team'

export type Matchup = {
    id: string;
    picks: Pick[];
    homeTeam: Team;
    awayTeam: Team;
    date: number; // Date of the game
    matchTimestamp: number;
}

export default Matchup;