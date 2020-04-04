import "bulma/css/bulma.css";
import React from "react";
import { action } from "@storybook/addon-actions";

import { Tag, Container, TagList } from "../components/bulma";
import { BulmaColorVariant, BulmaSize } from "../components/bulma/modifiers";

const colors: Array<BulmaColorVariant | undefined> = [
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
  "link"
];

export default {
  title: "Tag",
  component: Tag
};

export const Variants = () => (
  <Container>
    <TagList>
      <Tag>Tag</Tag>
      {colors.map((variant, vIdx) => (
        <>
          <Tag key={vIdx} variant={variant}>
            {(vIdx + 1) * 5}
          </Tag>
          <Tag key={vIdx + "-light"} variant={variant} shade="light">
            {(vIdx + 1) * 5}
          </Tag>
        </>
      ))}
    </TagList>
  </Container>
);

export const Sizes = () => (
  <Container>
    <TagList>
      {["small", "normal", "medium", "large"].map((size, vIdx) => (
        <Tag key={vIdx} isSize={size as BulmaSize} onClick={action("clicked")}>
          Tag ({size})
        </Tag>
      ))}
    </TagList>
  </Container>
);
