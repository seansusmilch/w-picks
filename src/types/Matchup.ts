import Pick from './Pick';
import { TeamAbbrv } from './Team';

export type Matchup = {
    id: string;
    home_team: TeamAbbrv;
    away_team: TeamAbbrv;
    matchup_timestamp: string;
}

export default Matchup;