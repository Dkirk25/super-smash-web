import * as React from "react";
import clsx from "clsx";

import { TabProps } from "./Tab";

export interface TabsProps {
  readonly isAligned?: "center" | "right";
  readonly isSize?: "small" | "medium" | "large";
  readonly isVariant?: "boxed" | "toggle" | "toggle-rounded";
  readonly isFullWidth?: boolean;

  readonly activeTab?: string;
  readonly onTabChange?: (tab: string) => void;
  readonly children?: Array<null | false | React.ReactElement<TabProps>>;
}

export const Tabs: React.FC<TabsProps> = (props) => {
  const {
    activeTab,
    children,
    isAligned,
    isSize,
    isVariant,
    isFullWidth,
    onTabChange,
  } = props;
  const state = React.useState<string>(activeTab || '');
  const [active, setActive] = state;

  React.useEffect(() => {
    if (activeTab !== active) {
      setActive(activeTab || '');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  React.useEffect(() => {
    if (onTabChange) {
      if ((!activeTab && active !== '') || activeTab !== active) {
        onTabChange(active);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const handleClick = React.useCallback(
    (event, newTab: string) => {
      if (newTab !== active) {
        setActive(newTab);
      }
    },
    [active, setActive]
  );
  return (
    <div
      className={clsx("tabs", {
        "is-toggle": isVariant === "toggle" || isVariant === "toggle-rounded",
        "is-toggle-rounded": isVariant === "toggle-rounded",
        "is-boxed": isVariant === "boxed",
        [`is-${isSize}`]: !!isSize,
        "is-fullwidth": isFullWidth,
        "is-centered": isAligned === "center",
        "is-right": isAligned === "right",
      })}
    >
      <ul>
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                onClick: handleClick,
                isActive: active === child.props.tabKey,
              })
            : child
        )}
      </ul>
    </div>
  );
};
