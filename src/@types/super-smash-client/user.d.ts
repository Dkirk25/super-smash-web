declare interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;

  mainCharacter: string;
  secondaryCharacter: string;

  // at least 12 characters
  friendCode: string;
  createdAt: number;
  updatedAt: number;

  // firebase auth data
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  photoURL?: string;

}
