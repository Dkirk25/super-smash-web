import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://super-smash-web.firebaseio.com"
});

export const auth = admin.auth();
export const firestore = admin.firestore();