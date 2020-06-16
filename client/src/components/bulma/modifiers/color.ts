import clsx from "clsx"
import { ThemeColorVariant } from "./variant";

export type BulmaColor =
  ThemeColorVariant
  | 'white-ter'
  | 'white-bis'
  | 'black-bis'
  | 'black-ter'
  | 'grey'
  | 'grey-light'
  | 'grey-lighter'
  | 'grey-dark'
  | 'grey-darker'

export interface BulmaTextColorModifier {
  textColor?: BulmaColor;
  backgroundColor?: BulmaColor;
}

export const defaultColorProps: BulmaTextColorModifier = {
  backgroundColor: undefined,
  textColor: undefined,
}

export default function <T extends BulmaTextColorModifier>(props?: T) {
  if (props) {
    return clsx({
      [`has-text-${props.textColor}`]: props.textColor,
      [`has-background-${props.backgroundColor}`]: props.backgroundColor,
    })
  }
  return undefined;
}