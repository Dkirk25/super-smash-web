declare interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  mainCharacter: IFighter;
  secondaryCharacter: IFighter;
  points: number;

  // at least 12 characters
  friendCode: string;
  createdAt: string;
  updatedAt: string;
  win: number;
  loss: number;
  fullName: string;
}
