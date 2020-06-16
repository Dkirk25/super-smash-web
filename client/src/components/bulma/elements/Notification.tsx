import React from "react";
import clsx from "clsx";

import { BulmaComponentProps } from "../types";
import { useBulma } from "../utils/helpers";
import {
  BulmaVariantModifier,
  BulmaBaseHelper,
  BulmaResponsiveHelper
} from "../modifiers";

export interface NotificationProps
  extends BulmaComponentProps<React.HTMLAttributes<HTMLDivElement>, {}>,
    BulmaVariantModifier,
    BulmaBaseHelper,
    BulmaResponsiveHelper {}

/**
 * Bulma v0.8.1
 *
 * Notification: https://bulma.io/documentation/elements/notification/
 */
export const Notification: React.FC<NotificationProps> = props => {
  const { children, className, color, variant, ...rest } = props;
  const [bulma] = useBulma(props);
  return (
    <div className={clsx("notification", bulma, className)} {...rest}>
      {children}
    </div>
  );
};
