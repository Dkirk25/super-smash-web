import { atom, useRecoilState } from "recoil";
import { MockFighter1, MockFighter2 } from "../../models/__mocks__/mock-user";

const FIGHTERS_STATE_KEY = 'fighters'
const fightersState = atom({
  key: FIGHTERS_STATE_KEY,
  default: [
    MockFighter1,
    MockFighter2
  ]
})

export function useFighters(): [ReadonlyArray<IFighter>] {
  const [fighters] = useRecoilState(fightersState);

  return [fighters];
}