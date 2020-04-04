import clsx from "clsx";
import { ViewportValue, createBreakpointClasses } from "./viewport";

export type BulmaDisplay = 'block' | 'flex' | 'inline' | 'inline-block' | 'inline-flex';

export interface BulmaResponsiveHelper {
  display?: ViewportValue<BulmaDisplay>;
}

export default function <T extends BulmaResponsiveHelper>(props?: T) {
  if (props) {
    return clsx({
      [createBreakpointClasses('is-block', props.display)]: props.display === 'block',
      [createBreakpointClasses('is-flex', props.display)]: props.display === 'flex',
      [createBreakpointClasses('is-inline', props.display)]: props.display === 'inline',
      [createBreakpointClasses('is-inline-block', props.display)]: props.display === 'inline-block',
      [createBreakpointClasses('is-inline-flex', props.display)]: props.display === 'inline-flex',
    })
  }
  return undefined;
}