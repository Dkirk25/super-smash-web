import { createBreakpointClasses } from "./viewport";
import clsx from "clsx";

export type BulmaGridSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type BulmaPercentSpan =
  | 'three-quarters'
  | 'two-thirds'
  | 'one-half'
  | 'one-third'
  | 'one-quarter'
  | 'four-fifths'
  | 'three-fifths'
  | 'two-fifts'
  | 'one-fifth'
  | 'full';


export interface BulmaSpanSizeModifier<T = undefined> {
  spanSize?: BulmaGridSpan | T;
}

export interface BulmaSpanOffsetModifier<T = undefined> {
  spanOffset?: BulmaGridSpan | T;
}

export const defaultSizeProps: BulmaSpanSizeModifier = {
  spanSize: undefined
}

export default function <T extends BulmaSpanSizeModifier & BulmaSpanOffsetModifier>(props?: T) {
  if (props) {
    return clsx(createBreakpointClasses('is', props.spanSize), createBreakpointClasses('is-offset', props.spanOffset));
  }
  return undefined;
}