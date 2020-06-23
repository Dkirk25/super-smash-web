export const MockFighter1: IFighter = {
  id: "0LK7pNWzbbx4VYDOLAyb",
  name: "samus",
  file: "gs://super-smash-web.appspot.com/fighters/portraits/samus.png",
};

export const MockFighter2: IFighter = {
  id: "oJtRSlt1MzZ1JeZEZbLX",
  name: "kirby",
  file: "gs://super-smash-web.appspot.com/fighters/portraits/kirby.png",
};

export const MockUser1: IUser = {
  email: `user-1234@example.com`,
  firstName: `User 1234`,
  switchFriendCode: `XXXXXXXXXXX1234`,
  fullName: `User 1234 Name`,
  id: "1234",
  lastName: "Name",
  mFighterId: MockFighter1.id,
  sFighterId: MockFighter2.id,
  createdAt: Date.now(),
  updatedAt: Date.now(),
  switchUsername: `username_1234`,
};

export const MockMatch1Score: IMatchScore = {
  id: "1",
  numberOfRounds: 5,
  leaderId: "1",
  leaderWins: 4,
};

export const MockMatch1: IMatch = {
  fighter1Id: "1",
  fighter2Id: "2",
  home: "1234",
  id: "1",
  p1Id: "1",
  p2Id: "2",
  start: "2020-01-01T00:00:00.000z",
  winner: "1",
  matchScore: MockMatch1Score,
};

export const MockMatchHistory = [MockMatch1];
