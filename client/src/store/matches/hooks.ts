import { atom, useRecoilState } from "recoil";
import { useEffect } from "react";

import { firestore } from "../../services/firebase";

const MATCHES_STATE_KEY = "matches";
const matchesContextState = atom<IMatch[]>({
  key: MATCHES_STATE_KEY,
  default: [],
});

export function useMatches(): [Array<IMatch>] {
  const [matches, setMatches] = useRecoilState(matchesContextState);

  /**
   * useEffect hook is "run this code any time whatever is in [] on line 42 changes (which is nothing, so run once)"
   */
  useEffect(() => {
    console.log("getting matches");
    // This would be our "service" to get all of the matches
    async function fetchMatches() {
      // do firebase stuff
      const matchesRef = firestore.collection("matches");
      const snap = await matchesRef.get();

      const newMatches: IMatch[] = snap.docs.map(
        (document) => ({ ...document.data(), id: document.id } as IMatch)
      );
      setMatches(newMatches);
    }

    fetchMatches();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("matches" + matches);

  return [matches];
}
