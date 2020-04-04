import _ from 'lodash';
import sort from "./sort";

const users: IUser[] = _.range(0, 10).map(i => ({
  email: `user-${i}@example.com`,
  firstName: `User ${i}`,
  friendCode: `XXXXXXXXXXX${i}`,
  fullName: `User ${i} Name`,
  id: `${i}`,
  lastName: 'Name',
  loss: 0,
  mainCharacter: `Fighter ${i}`,
  points: 2 * i,
  secondaryCharacter: `Fighter ${i + 1}`,
  createdAt: `${Date.now}`,
  updatedAt: `${Date.now}`,
  username: `username_${i}`,
  win: 0
}));

export default sort(users);
