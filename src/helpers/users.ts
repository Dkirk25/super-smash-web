import _ from "lodash";
import sort from "./sort";

const fighter: IFighter = {
  name: "samus",
  imageURI:
    "http://s3.amazonaws.com/mlg-profile-production/user_avatars/defaultUserAvatar.png",
};

const fighter2: IFighter = {
  name: "kirby",
  imageURI:
    "http://s3.amazonaws.com/mlg-profile-production/user_avatars/defaultUserAvatar.png",
};

const users: IUser[] = _.range(0, 10).map((i) => ({
  email: `user-${i}@example.com`,
  firstName: `User ${i}`,
  friendCode: `XXXXXXXXXXX${i}`,
  fullName: `User ${i} Name`,
  id: `${i}`,
  lastName: "Name",
  loss: 0,
  mainCharacter: fighter,
  points: 2 * i,
  secondaryCharacter: fighter2,
  createdAt: `${Date.now}`,
  updatedAt: `${Date.now}`,
  username: `username_${i}`,
  win: 0,
}));

export default sort(users);
