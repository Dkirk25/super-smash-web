import clsx from "clsx";
import { ViewportValue, createBreakpointClasses } from "./viewport";

export type TypographySize = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type TypographyAlignment = 'centered' | 'justified' | 'left' | 'right';
export type TypographyTransform = 'capitalized' | 'lowercase' | 'uppercase';
export type TypographyWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type TypographyFontFamily = 'sans-serif' | 'monospace' | 'primary' | 'secondary' | 'code';


export interface BulmaTypographyModifier {
  readonly textSize?: ViewportValue<TypographySize>;
  readonly textAlign?: ViewportValue<TypographyAlignment>;
  readonly textTransform?: TypographyTransform;
  readonly textWeight?: TypographyWeight;
  readonly italic?: boolean;
  readonly fontFamily?: TypographyFontFamily;
}

export const defaultTypographyProps: BulmaTypographyModifier = {
  textAlign: undefined,
  textSize: undefined,
  italic: false,
  textTransform: undefined,
  fontFamily: undefined,
  textWeight: undefined,
}

export default function <T extends BulmaTypographyModifier>(props?: T) {
  if (props) {
    return clsx(
      createBreakpointClasses(`is-size`, props.textSize),
      createBreakpointClasses('has-text', props.textAlign),
      {
        [`is-family-${props.fontFamily}`]: !!props.fontFamily,
        [`has-text-weight-${props.textWeight}`]: !!props.textWeight,
        [`is-${props.textTransform}`]: !!props.textTransform,
        'is-italic': props.italic,
      }
    )
  }
  return undefined;
}