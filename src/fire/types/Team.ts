import {Pick} from './Picks';

export type Team = {
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    fullName: string;
    name: string;
    id: string;
}

export type Matchup = {
    id: string;
    picks: Pick[];
    homeTeam: Team;
    awayTeam: Team;
    date: number; // Date of the game
    matchTimestamp: number;
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
    CHI: Team = {
        abbreviation: "CHI",
        city: "Chicago",
        conference: "East",
        division: "Central",
        fullName: "Chicago Bulls",
        name: "Bulls",
        id: "1610612741"
    }
    CLE: Team = {
        abbreviation: "CLE",
        city: "Cleveland",
        conference: "East",
        division: "Central",
        fullName: "Cleveland Cavaliers",
        name: "Cavaliers",
        id: "1610612739"
    }
    DAL: Team = {
        abbreviation: "DAL",
        city: "Dallas",
        conference: "West",
        division: "Southwest",
        fullName: "Dallas Mavericks",
        name: "Mavericks",
        id: "1610612742"
    }
    DEN: Team = {
        abbreviation: "DEN",
        city: "Denver",
        conference: "West",
        division: "Northwest",
        fullName: "Denver Nuggets",
        name: "Nuggets",
        id: "1610612743"
    }
    DET: Team = {
        abbreviation: "DET",
        city: "Detroit",
        conference: "East",
        division: "Central",
        fullName: "Detroit Pistons",
        name: "Pistons",
        id: "1610612765"
    }
    GSW: Team = {
        abbreviation: "GSW",
        city: "Golden State",
        conference: "West",
        division: "Pacific",
        fullName: "Golden State Warriors",
        name: "Warriors",
        id: "1610612744"
    }
    HOU: Team = {
        abbreviation: "HOU",
        city: "Houston",
        conference: "West",
        division: "Southwest",
        fullName: "Houston Rockets",
        name: "Rockets",
        id: "1610612745"
    }
    IND: Team = {
        abbreviation: "IND",
        city: "Indiana",
        conference: "East",
        division: "Central",
        fullName: "Indiana Pacers",
        name: "Pacers",
        id: "1610612754"
    }
    LAC: Team = {
        abbreviation: "LAC",
        city: "LA",
        conference: "West",
        division: "Pacific",
        fullName: "LA Clippers",
        name: "Clippers",
        id: "1610612746"
    }
    LAL: Team = {
        abbreviation: "LAL",
        city: "Los Angeles",
        conference: "West",
        division: "Pacific",
        fullName: "Los Angeles Lakers",
        name: "Lakers",
        id: "1610612747"
    }
    MEM: Team = {
        abbreviation: "MEM",
        city: "Memphis",
        conference: "West",
        division: "Southwest",
        fullName: "Memphis Grizzlies",
        name: "Grizzlies",
        id: "1610612763"
    }
    MIA: Team = {
        abbreviation: "MIA",
        city: "Miami",
        conference: "East",
        division: "Southeast",
        fullName: "Miami Heat",
        name: "Heat",
        id: "1610612748"
    }
    MIL: Team = {
        abbreviation: "MIL",
        city: "Milwaukee",
        conference: "East",
        division: "Central",
        fullName: "Milwaukee Bucks",
        name: "Bucks",
        id: "1610612749"
    }
    MIN: Team = {
        abbreviation: "MIN",
        city: "Minnesota",
        conference: "West",
        division: "Northwest",
        fullName: "Minnesota Timberwolves",
        name: "Timberwolves",
        id: "1610612750"
    }
    NOP: Team = {
        abbreviation: "NOP",
        city: "New Orleans",
        conference: "West",
        division: "Southwest",
        fullName: "New Orleans Pelicans",
        name: "Pelicans",
        id: "1610612740"
    }
    NYK: Team = {
        abbreviation: "NYK",
        city: "New York",
        conference: "East",
        division: "Atlantic",
        fullName: "New York Knicks",
        name: "Knicks",
        id: "1610612752"
    }
    OKC: Team = {
        abbreviation: "OKC",
        city: "Oklahoma City",
        conference: "West",
        division: "Northwest",
        fullName: "Oklahoma City Thunder",
        name: "Thunder",
        id: "1610612760"
    }
    ORL: Team = {
        abbreviation: "ORL",
        city: "Orlando",
        conference: "East",
        division: "Southeast",
        fullName: "Orlando Magic",
        name: "Magic",
        id: "1610612753"
    }
    PHI: Team = {
        abbreviation: "PHI",
        city: "Philadelphia",
        conference: "East",
        division: "Atlantic",
        fullName: "Philadelphia 76ers",
        name: "76ers",
        id: "1610612755"
    }
    PHX: Team = {
        abbreviation: "PHX",
        city: "Phoenix",
        conference: "West",
        division: "Pacific",
        fullName: "Phoenix Suns",
        name: "Suns",
        id: "1610612756"
    }
    POR: Team = {
        abbreviation: "POR",
        city: "Portland",
        conference: "West",
        division: "Northwest",
        fullName: "Portland Trail Blazers",
        name: "Trail Blazers",
        id: "1610612757"
    }
    SAC: Team = {
        abbreviation: "SAC",
        city: "Sacramento",
        conference: "West",
        division: "Pacific",
        fullName: "Sacramento Kings",
        name: "Kings",
        id: "1610612758"
    }
    SAS: Team = {
        abbreviation: "SAS",
        city: "San Antonio",
        conference: "West",
        division: "Southwest",
        fullName: "San Antonio Spurs",
        name: "Spurs",
        id: "1610612759"
    }
    TOR: Team = {
        abbreviation: "TOR",
        city: "Toronto",
        conference: "East",
        division: "Atlantic",
        fullName: "Toronto Raptors",
        name: "Raptors",
        id: "1610612761"
    }
    UTA: Team = {
        abbreviation: "UTA",
        city: "Utah",
        conference: "West",
        division: "Northwest",
        fullName: "Utah Jazz",
        name: "Jazz",
        id: "1610612762"
    }
    WAS: Team = {
        abbreviation: "WAS",
        city: "Washington",
        conference: "East",
        division: "Southeast",
        fullName: "Washington Wizards",
        name: "Wizards",
        id: "1610612764"
    }
}