import clsx from "clsx";

export type BulmaSize = 'small' | 'medium' | 'large' | 'normal';


export interface BulmaIsSizeModifier {
  isSize?: BulmaSize | 'small' | 'medium' | 'large' | 'normal';
}

export const defaultIsSizeProps: BulmaIsSizeModifier = {
  isSize: undefined
}

export default function <T extends BulmaIsSizeModifier>(props?: T) {
  if (props) {
    return clsx({
      [`is-${props.isSize}`]: !!props.isSize,
    })
  }
  return undefined;
}