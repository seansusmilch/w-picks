export type ScoreboardType = {
    game_id: number;
    created_at: string;
    updated_at: string;
    game_status: number;
    game_code: string;
    home_score: number;
    away_score: number;
    game_status_text: string;
};

export type DBScoreboardType = {
    game_id: number;
    created_at: string;
    updated_at: string;
    game_status: number;
    game_code: string;
    home_score: number;
    away_score: number;
    game_status_text: string;
};

export const parseDBScoreboard = (scoreboard: DBScoreboardType): ScoreboardType => {
    return {
        game_id: scoreboard.game_id,
        created_at: scoreboard.created_at,
        updated_at: scoreboard.updated_at,
        game_status: scoreboard.game_status,
        game_code: scoreboard.game_code,
        home_score: scoreboard.home_score,
        away_score: scoreboard.away_score,
        game_status_text: scoreboard.game_status_text,
    };
};
