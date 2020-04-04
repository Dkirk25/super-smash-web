
// is-three-quarters-mobile
// is-two-thirds-tablet
// is-half-desktop
// is-one-third-widescreen
// is-one-quarter-fullhd


export type BulmaComponentProps<T, P = {}, V extends keyof T = never> = StandardProps<T, V> & P;

// export type OverrideElementAttributes<T extends Element, P = {}> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T> & P;

export type StandardProps<C, Removals extends keyof C = never> = Omit<
  C,
  Removals
>
// &
  // StyledComponentProps<ClassKey>
  // & {
    // className?: string;
    // ref?: C extends { ref?: infer RefType } ? RefType : React.Ref<unknown>;
    // style?: React.CSSProperties;
  // };