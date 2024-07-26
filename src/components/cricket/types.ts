interface TeamInfo {
  name: string;
  shortname: string;
  img: string;
}

interface ScoreInfo {
  r: number;
  w: number;
  o: number;
  inning: string;
}
interface MatchInfo {
  id: string;
  name: string;
  matchType: string;
  status: string;
  venue: string;
  date: string;
  dateTimeGMT: string;
  teams: string[];
  teamInfo: TeamInfo[];
  score: ScoreInfo[];
  series_id: string;
  fantasyEnabled: boolean;
  bbbEnabled: boolean;
  hasSquad: boolean;
  matchStarted: boolean;
  matchEnded: boolean;
}

export type { MatchInfo };
