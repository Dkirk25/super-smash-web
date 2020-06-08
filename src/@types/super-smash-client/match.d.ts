declare interface IFighter {
  id: number;
  name: string;
  imageURI?: string;
}

/**
 * Individual PvP matchup
 */
declare interface IMatch {
  // ID of fighter
  fighter1Id: number;
  // ID of fighter
  fighter2Id: number;
  id: number;
  // User ID of player who is "home"
  home: number;
  // ID of player (IUser)
  p1Id: number;
  // ID of player (IUser)
  p2Id: number;
  // DateTime of the match starting
  start: string;
  // User ID of the winner
  winner?: number;

  score: IMatchScore;
}

declare interface IMatchScore {
  id: number;
  // Number of PvP fights in a match
  numberOfRounds: number;
  // User ID of the winning player
  leaderId: number;
  // the number of rounds won for leader
  leaderWins: number;
}
