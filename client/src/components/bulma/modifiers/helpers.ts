import clsx from "clsx";
import { createBreakpointClasses, ViewportValue } from "./viewport";

export interface BulmaBaseHelper {
  isAligned?: 'left' | 'center' | 'right',
  isClearFix?: boolean;
  isPulled?: 'left' | 'right';
  isMarginless?: boolean;
  isPaddingLess?: boolean;
  isOverlay?: boolean;
  isClipped?: boolean;
  isRadiusLess?: boolean;
  isShadowless?: boolean;
  isUnselectable?: boolean;
  isInvisible?: boolean;
  isHidden?: ViewportValue<boolean>;
  isSrOnly?: boolean;
  isRelative?: boolean;
}

export default function <T extends BulmaBaseHelper>(props?: T) {
  if (props) {
    return clsx(
      createBreakpointClasses('is-hidden', props.isHidden),
      {
        'is-left': props.isAligned === 'left',
        'is-centered': props.isAligned === 'center',
        'is-right': props.isAligned === 'right',
        'is-clearfix': props.isClearFix,
        'is-pulled-left': props.isPulled === 'left',
        'is-pulled-right': props.isPulled === 'right',
        'is-marginless': props.isMarginless,
        'is-paddingless': props.isPaddingLess,
        'is-overlay': props.isOverlay,
        'is-clipped': props.isClipped,
        'is-radiusless': props.isRadiusLess,
        'is-shadowless': props.isShadowless,
        'is-unselectable': props.isUnselectable,
        'is-invisible': props.isInvisible,
        'is-sr-only': props.isSrOnly,
        'is-relative': props.isRelative,

      })
  }
  return undefined;
}