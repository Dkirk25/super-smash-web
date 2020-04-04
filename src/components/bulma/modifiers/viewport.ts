import clsx from "clsx";

export type BulmaViewportBreakpoint = 'mobile' | 'tablet' | 'desktop' | 'widescreen' | 'fullhd';

type BulmaBreakpointMap<T> = {
  [viewport in BulmaViewportBreakpoint]?: T;
};

export type ViewportValue<T> = T | BulmaBreakpointMap<T>;

export const x: ViewportValue<number> = {

}

function createBreakpointClassname(classname: string, value: unknown, breakpoint: BulmaViewportBreakpoint): string {
  if (typeof value === 'boolean') {
    return `${classname}-${breakpoint}`;
  }

  return `${classname}-${value}-${breakpoint}`
}

function isV<T>(value?: unknown): value is BulmaBreakpointMap<T> {
  if (typeof value === 'object') {
    return true;
  }
  return false;
}

export function createBreakpointClasses<T>(classname: string, prop: ViewportValue<T>): string {
  console.log(`${classname}`, prop, isV(prop));
  if (isV(prop)) {

    return clsx({
      [createBreakpointClassname(classname, prop.mobile, 'mobile')]: prop.mobile !== undefined,
      [createBreakpointClassname(classname, prop.tablet, 'tablet')]: prop.tablet !== undefined,
      [createBreakpointClassname(classname, prop.desktop, 'desktop')]: prop.desktop !== undefined,
      [createBreakpointClassname(classname, prop.widescreen, 'widescreen')]: prop.widescreen !== undefined,
      [createBreakpointClassname(classname, prop.fullhd, 'fullhd')]: prop.fullhd !== undefined
    })
  } else if (['string', 'number'].includes(typeof prop)) {
    return clsx({ [`${classname}-${prop}`]: !!prop })
  }
  return clsx({ [classname]: !!prop });
}


export default function <T = any>() {

}