export const MockFighter1: IFighter = {
  id: "1",
  name: "samus",
  imageURI:
    "http://s3.amazonaws.com/mlg-profile-production/user_avatars/defaultUserAvatar.png",
};

export const MockFighter2: IFighter = {
  id: "2",
  name: "kirby",
  imageURI:
    "http://s3.amazonaws.com/mlg-profile-production/user_avatars/defaultUserAvatar.png",
};

export const MockUser1: IUser = {
  email: `user-1234@example.com`,
  firstName: `User 1234`,
  switchFriendCode: `XXXXXXXXXXX1234`,
  fullName: `User 1234 Name`,
  id: "1234",
  lastName: "Name",
  mainCharacter: MockFighter1.id,
  secondaryCharacter: MockFighter2.id,
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
  score: MockMatch1Score,
};

export const MockMatchHistory = [MockMatch1];
