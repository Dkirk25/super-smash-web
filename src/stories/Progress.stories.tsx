import "bulma/css/bulma.css";
import React from "react";
import { action } from "@storybook/addon-actions";

import { ProgressBar, Container } from "../components/bulma";
import { ThemeColorVariant, BulmaSize } from "../components/bulma/modifiers";

const colors: Array<ThemeColorVariant | undefined> = [
  undefined,
  "white",
  "black",
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "danger",
  "text",
  "link",
];

export default {
  title: "ProgressBar",
  component: ProgressBar,
};

export const Variants = () => (
  <Container>
    <ProgressBar>ProgressBar</ProgressBar>
    {colors.map((variant, vIdx) => (
      <ProgressBar
        value={(vIdx + 1) * 5}
        max={100}
        key={vIdx}
        variant={variant}
      >
        {(vIdx + 1) * 5}
      </ProgressBar>
    ))}
  </Container>
);

export const Sizes = () => (
  <Container>
    {["small", "normal", "medium", "large"].map((size, vIdx) => (
      <ProgressBar
        value={33}
        max={100}
        key={vIdx}
        isSize={size as BulmaSize}
        onClick={action("clicked")}
      >
        ProgressBar ({size})
      </ProgressBar>
    ))}
  </Container>
);
