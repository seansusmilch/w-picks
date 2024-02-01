import { PickType } from './PickType';
import { TeamAbbrv } from './TeamType';

export type MatchupType = {
    game_code: string;
    game_time_utc: string;
    home_team_tricode: TeamAbbrv | null;
    away_team_tricode: TeamAbbrv | null;
    game_id: number;
    meta: object | null;
};

export type DBMatchupType = {
    game_code: string;
    game_time_utc: string;
    home_team_tricode: TeamAbbrv | null;
    away_team_tricode: TeamAbbrv | null;
    game_id: number;
    meta: object | null;
};

export const parseDBMatchup = (matchup: DBMatchupType): MatchupType => {
    return {
        game_code: matchup.game_code,
        game_time_utc: matchup.game_time_utc,
        home_team_tricode: matchup.home_team_tricode,
        away_team_tricode: matchup.away_team_tricode,
        game_id: matchup.game_id,
        meta: matchup.meta,
    };
};
