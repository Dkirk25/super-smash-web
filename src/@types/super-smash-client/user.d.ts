declare interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  switchUsername: string;

  mFighterId: string;
  sFighterId: string;

  // at least 12 characters
  switchFriendCode: string;
  createdAt: number;
  updatedAt: number;

  // firebase auth data
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  photoURL?: string;
}
