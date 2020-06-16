declare interface IFighter {
  id: string;
  name: string;
  file?: string;
}

/**
 * Individual PvP matchup
 */
declare interface IMatch {
  // ID of fighter
  fighter1Id: string;
  // ID of fighter
  fighter2Id: string;
  id: string;
  // User ID of player who is "home"
  home: string;
  // ID of player (IUser)
  p1Id: string;
  // ID of player (IUser)
  p2Id: string;
  // DateTime of the match starting
  start: string;
  // User ID of the winner
  winner?: string;

  score: IMatchScore;
}

declare interface IMatchScore {
  id: string;
  // Number of PvP fights in a match
  numberOfRounds: number;
  // User ID of the winning player
  leaderId: string;
  // the number of rounds won for leader
  leaderWins: number;
}
