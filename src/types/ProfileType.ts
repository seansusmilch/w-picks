export type UserType = {
    id: string;
    displayName: string;
    email?: string;
    parlayIds: string[];
    signupTimestamp: number;

    stats: {
        PicksTotal: number;
        LPicksTotal: number;
        WPicksTotal: number;
        WPicksPercentage: number;
    };
};

export type ProfileType = {
    id: string;
    created_at: string;
    display_name: string;
    avatar_url: string;
};

export type DBProfileType = {
    id: string;
    created_at: string;
    display_name: string;
    avatar_url: string;
};
