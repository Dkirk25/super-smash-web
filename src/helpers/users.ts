import _ from "lodash";
import sort from "./sort";

const fighter: IFighter = {
  id: "0LK7pNWzbbx4VYDOLAyb",
  name: "samus",
  imageURI: "gs://super-smash-web.appspot.com/fighters/portraits/samus.png",
};

const fighter2: IFighter = {
  id: "oJtRSlt1MzZ1JeZEZbLX",
  name: "kirby",
  imageURI: "gs://super-smash-web.appspot.com/fighters/portraits/kirby.png",
};

const users: IUser[] = _.range(0, 10).map((i) => ({
  email: `user-${i}@example.com`,
  firstName: `User ${i}`,
  switchFriendCode: `XXXXXXXXXXX${i}`,
  fullName: `User ${i} Name`,
  id: `${i}`,
  lastName: "Name",
  loss: 0,
  mFighterId: fighter.id,
  points: 2 * i,
  sFighterId: fighter2.id,
  createdAt: Date.now(),
  updatedAt: Date.now(),
  switchUsername: `username_${i}`,
  win: 0,
}));

export default sort(users);
