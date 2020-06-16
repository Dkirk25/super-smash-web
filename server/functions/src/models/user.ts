export interface IUser {
  uid: string;
  // at least 12 characters
  switchFriendCode?: string;
  switchUsername?: string;

  mFighterId?: string;
  sFighterId?: string;


  // firebase auth data
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  photoURL?: string;
}


export class User implements IUser {
  // auth context data
  uid: string;
  fullName?: string | undefined;
  email?: string | undefined;
  phoneNumber?: string | undefined;
  photoURL?: string | undefined;

  // firestore data
  switchFriendCode?: string | undefined;
  switchUsername?: string | undefined;
  mFighterId?: string | undefined;
  sFighterId?: string | undefined;
  constructor(data: IUser) {
    this.uid = data.uid;
    this.switchFriendCode = data.switchFriendCode;
    this.switchUsername = data.switchUsername

    this.mFighterId = data.mFighterId;
    this.sFighterId = data.sFighterId;

  }
}