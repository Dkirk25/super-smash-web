declare interface IFighter {
  name: string;
  imageURI?: string;
}

declare interface IMatch {
  // ID if player (IUser)
  player1: IUser;
  // ID if player (IUser)
  player2: IUser;
  // ID if fighter
  fighter1: IFighter;
  // ID if fighter
  fighter2: IFighter;
  // ID if winner
  winner?: number;
}

declare interface IMatchEvent {
  id: string;
  startTime: string;
  endTime: string;
  title: string;
  updatedAt: number;
  home: string;
}