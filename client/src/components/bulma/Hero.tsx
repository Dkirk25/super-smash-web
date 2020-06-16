import React from "react";
import clsx from "clsx";
import { BulmaComponentProps } from "./types";

export interface HeroProps
  extends BulmaComponentProps<React.HTMLAttributes<HTMLDivElement>> {}

export const Hero: React.FC<HeroProps> = props => {
  const { className, children, ...rest } = props;
  return (
    <section className={clsx("hero", className)} {...rest}>
      <div className="hero-body">
        <div className="container">{children}</div>
      </div>
    </section>
  );
};
