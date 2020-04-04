import React from "react";
import clsx from "clsx";

export interface TagListProps extends React.HTMLAttributes<HTMLDivElement> {
  hasAddons?: boolean;
}

export const TagList: React.FC<TagListProps> = props => {
  const { className, children, hasAddons, ...rest } = props;
  return (
    <div
      className={clsx(
        "tags",
        {
          "has-addons": hasAddons
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
