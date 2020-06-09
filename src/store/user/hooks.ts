import { atom, useRecoilState } from "recoil";
import { useCallback } from "react";

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
          mainCharacter: "1",
          secondaryCharacter: "2",
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
