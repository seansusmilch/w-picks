export type User = {
    id: string;
    displayName: string;
    email?: string;
    parlayIds: string[];
    signupTimestamp: number;

    // move to another table
    stats: {
        PicksTotal: number;
        LPicksTotal: number;
        WPicksTotal: number;
        WPicksPercentage: number;
    };
};

/**
 * Profiles 
 * 
 * id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone not null default now(),
    display_name text null,
    avatar_url text null,
    constraint profiles_pkey primary key (id)
 */