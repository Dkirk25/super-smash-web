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

/**
 * Database trigger
 *
 * Any time you update a property in a user document, this function will run.
 *
 * We need to compare the old to the knew and merge any new data (or old) to auth and back.
 */
export const onUserProfileUpdate = functions.firestore.document('users/{uid}').onUpdate(async (change, context) => {
  const { uid } = context.params;

  // old user profile
  const prev = change.before.data();
  // new user profile
  const current = change.after.data();

  console.log(uid, prev, current)
  return null;
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