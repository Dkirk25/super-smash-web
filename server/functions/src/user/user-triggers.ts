import * as functions from 'firebase-functions';
import { firestore, auth } from '../services/firebase';

/**
 * Authentication trigger
 *
 * When a user is created in firebase auth, this will run passing in the created user context.
 */
export const onUserRegistration = functions.auth.user().onCreate(async (user) => {
  const { disabled, email, phoneNumber, uid } = user;

  // create the user profile with the data gotten from registration
  await firestore.collection('users').doc(uid).set({
    disabled, email, phoneNumber
  })
  return null;
})

/**
 * Authentication trigger
 *
 * When a user context is deleted from auth, this will run
 */
export const onUserRemoval = functions.auth.user().onDelete(async (user) => {
  const { uid } = user;

  await firestore.collection('users').doc(uid).delete();
  return null;
})

export const onUserProfileUpdate = functions.firestore.document('users/{uid}/{field}').onUpdate(async (change, context) => {
  const { uid, field } = context.params;

  if (['email', 'phoneNumber', 'fullname'].includes(field)) {
    const prev = change.before.data();
    const current = change.after.data();

    switch (field) {
      case 'email':
        if (prev !== current && !current) {
          change.after.ref.set(prev);
        }
        break;
      case 'phoneNumber':
        if (prev !== current && !current) {
          change.after.ref.set(prev);
        }
        break;
      case 'fullName':
        if (prev !== current && !current) {
          change.after.ref.set(prev);
        }
        break;
      default:
        console.log(uid, field);
    }
  }



})

/**
 * Manages the disabled status between the auth and profile, keeping them in sync
 */
export const onSyncProfileDisabled = functions.database.ref('users/{userId}/disabled').onWrite(async (change, context) => {
  try {
    const { userId } = context.params;

    const previous: boolean | undefined = change.before.val();
    const current: boolean | undefined = change.after.val();

    const isCurrentPresent = current ?? false;


    console.log("Syncing active status", previous, current)
    const user = await auth.getUser(userId);
    if (isCurrentPresent && previous === current) {
      return null;
    } else if (!isCurrentPresent && (user.disabled ?? false)) {
      await change.after.ref.set(user.disabled);
    } else if (isCurrentPresent && current !== user.disabled) {
      // new status in profile doesn't match auth status, update auth
      await auth.updateUser(userId, { disabled: current });
    }

  } catch (error) {
    console.log('Unable to update user status', error);
  }
  return null;
});