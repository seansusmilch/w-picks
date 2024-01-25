export type User = {
    id: string;
    name: string;
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
