import clsx from "clsx"

export type ThemeColorVariant =
  | 'primary'
  | 'secondary'
  | 'link'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'text'
  | 'white'
  | 'black'


export interface BulmaVariantModifier {
  variant?: ThemeColorVariant;
  shade?: 'light' | 'dark';
}

export default function <T extends BulmaVariantModifier>(props?: T) {
  if (props) {
    return clsx({
      [`is-${props.variant}`]: !!props.variant,
      "is-light": props.shade === "light",
      "is-dark": props.shade === "dark",
    })
  }
  return undefined;
}