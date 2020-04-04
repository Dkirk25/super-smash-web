import React from 'react';
import clsx from 'clsx';

import ColorModifier from '../modifiers/color';
import BaseHelper from '../modifiers/helpers';
import ResponsiveHelper from '../modifiers/responsive'
import SizeModifier from '../modifiers/size';
import TypographyHelper from '../modifiers/typography';
import VariantHelper from '../modifiers/variant';
import SpanSizeHelper from '../modifiers/span';


const getColumnOffsetClassName = (span?: any) => {
  if (typeof span === 'number') {
    return clsx({
      "is-1": span === 1,
      "is-2": span === 2,
      "is-3": span === 3,
      "is-4": span === 4,
      "is-5": span === 5,
      "is-6": span === 6,
      "is-7": span === 7,
      "is-8": span === 8,
      "is-9": span === 9,
      "is-10": span === 10,
      "is-11": span === 11,
      "is-12": span === 12,
    });
  } else if (typeof span === 'string') {
    return clsx({
      "is-three-quarters": span === '3/4',
      "is-two-thirds": span === '2/3',
      "is-half": span === '1/2',
      "is-one-third": span === '1/3',
      "is-one-quarter": span === '1/4',
      "is-four-fifths": span === '4/5',
      "is-three-fifths": span === '3/5',
      "is-two-fifths": span === '2/5',
      "is-one-fifth": span === '1/5'
    });
  }
  return undefined;
}






export type UseBulmaReturnType = [string, {
  columnOffset: typeof getColumnOffsetClassName,
}];


export function useBulma<P extends any>(props?: P) {
  const className = React.useMemo(() => clsx(
    ColorModifier(props as any),
    BaseHelper(props as any),
    ResponsiveHelper(props as any),
    SizeModifier(props as any),
    TypographyHelper(props as any),
    VariantHelper(props as any),
    SpanSizeHelper(props as any),
    // props && getColumnSpanClassName(props.span),
    props && getColumnOffsetClassName(props.offset)
  ), [props]);

  const helpers = React.useMemo(() => {
    return {
      columnOffset: getColumnOffsetClassName,
    };
  }, []);

  return [className, helpers];
}
