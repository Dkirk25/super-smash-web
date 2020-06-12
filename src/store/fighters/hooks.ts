import { atom, useRecoilState } from "recoil";
import { useEffect } from "react";

import { firestore } from "../../services/firebase";

const FIGHTERS_STATE_KEY = 'fighters'
const fightersState = atom<IFighter[]>({
  key: FIGHTERS_STATE_KEY,
  default: [
  ]
})

/**
 * A hook to fetch and store in state the fighters from firestore
 *
 * This isn't the "best" because anytime we use this hook it will fetch the fighters.
 * If we used this in multiple components on a page... then its useless to call it so many times.
 *
 * but for now, this will work exactly how we want.
 */
export function useFighters(): [ReadonlyArray<IFighter>] {
  const [fighters, setFighters] = useRecoilState(fightersState);

  /**
   * useEffect hook is "run this code any time whatever is in [] on line 42 changes (which is nothing, so run once)"
   */
  useEffect(() => {
    console.log('getting fighters')
    // This would be our "service" to get all of the fighters
    async function fetchFighters() {
      // do firebase stuff
      const fighterRef = firestore.collection('fighters')
      const snap = await fighterRef.get();

      const newFighters: IFighter[] = snap.docs.map(document => ({ ...document.data(), id: document.id }) as IFighter);
      setFighters(newFighters);
    }

    fetchFighters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [fighters];
}