export type Team = {
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    fullName: string;
    name: string;
    id: string;
}

export class Teams {
    ATL: Team = {
        abbreviation: "ATL",
        city: "Atlanta",
        conference: "East",
        division: "Southeast",
        fullName: "Atlanta Hawks",
        name: "Hawks",
        id: "1610612737"
    }
    BOS: Team = {
        abbreviation: "BOS",
        city: "Boston",
        conference: "East",
        division: "Atlantic",
        fullName: "Boston Celtics",
        name: "Celtics",
        id: "1610612738"
    }
    BKN: Team = {
        abbreviation: "BKN",
        city: "Brooklyn",
        conference: "East",
        division: "Atlantic",
        fullName: "Brooklyn Nets",
        name: "Nets",
        id: "1610612751"
    }
    CHA: Team = {
        abbreviation: "CHA",
        city: "Charlotte",
        conference: "East",
        division: "Southeast",
        fullName: "Charlotte Hornets",
        name: "Hornets",
        id: "1610612766"
    }
    // CHI: string
    // CLE: string
    // DAL: string
    // DEN: string
    // DET: string
    // GSW: string
    // HOU: string
    // IND: string
    // LAC: string
    // LAL: string
    // MEM: string
    // MIA: string
    // MIL: string
    // MIN: string
    // NOP: string
    // NYK: string
    // OKC: string
    // ORL: string
    // PHI: string
    // PHX: string
    // POR: string
    // SAC: string
    // SAS: string
    // TOR: string
    // UTA: string
    // WAS: string
}

export default Team;