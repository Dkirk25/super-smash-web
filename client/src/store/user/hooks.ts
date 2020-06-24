import { atom, useRecoilState } from "recoil";
import { useCallback } from "react";
import { useEffect } from "react";

import { firestore } from "../../services/firebase";

const USER_CONTEXT_KEY = "userContext";

const userContextState = atom<IUser | null>({
  key: USER_CONTEXT_KEY,
  default: null,
});

/**
 * React hook to get/set the current user in state
 */
export function useUserContext(): [
  IUser | null,
  (user: firebase.User | null) => void
] {
  const [user, setUser] = useRecoilState(userContextState);

  const handlePersistUser = useCallback(
    (fbUser: firebase.User | null) => {
      if (fbUser) {
        const { email, displayName, phoneNumber, photoURL, uid } = fbUser;
        setUser({
          fullName: displayName ?? undefined,
          email: email!,
          switchUsername: displayName! ?? "Kungpow",
          phoneNumber: phoneNumber ?? undefined,
          photoURL:
            photoURL ??
            "http://s3.amazonaws.com/mlg-profile-production/user_avatars/defaultUserAvatar.png",
          id: uid,

          // Mock additions to complete user
          switchFriendCode: "111111111111",
          mFighterId: "0LK7pNWzbbx4VYDOLAyb",
          sFighterId: "oJtRSlt1MzZ1JeZEZbLX",
          lastName: "Daniels",
          firstName: "Jack",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        });
      } else {
        setUser(null);
      }
    },
    [setUser]
  );

  return [user, handlePersistUser];
}

/**
 * A hook purely to get the current user in the system
 */
export function useCurrentUser(): IUser | null {
  const [user] = useUserContext();
  return user;
}

const LIST_USERS_STATE_KEY = "users";
const specificUsersContextState = atom<IUser[]>({
  key: LIST_USERS_STATE_KEY,
  default: [],
});

export function GetListOfUsers(): [IUser[]] {
  const [users, setUsers] = useRecoilState(specificUsersContextState);

  /**
   * useEffect hook is "run this code any time whatever is in [] on line 42 changes (which is nothing, so run once)"
   */
  useEffect(() => {
    console.log("getting user");
    // This would be our "service" to get all of the matches
    async function fetchUsers() {
      // do firebase stuff
      const userRef = firestore.collection("users");
      const snap = await userRef.get();

      const newUsers: IUser[] = snap.docs.map(
        (document) => ({ ...document.data(), id: document.id } as IUser)
      );
      setUsers(newUsers);
    }

    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  return [users];
}
