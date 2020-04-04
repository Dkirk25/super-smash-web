import "bulma/css/bulma.css";
import React from "react";
import { action } from "@storybook/addon-actions";

import { Button, Container, ButtonList, Section } from "../components/bulma";
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
  title: "Button",
  component: Button
};

export const Variants = () => (
  <Section>
    <Container>
      <ButtonList>
        {colors.map((variant, vIdx) => (
          <>
            <Button key={vIdx} variant={variant} onClick={action("clicked")}>
              Button ({variant || "Default"})
            </Button>
            <Button
              key={vIdx}
              variant={variant}
              shade="light"
              onClick={action("clicked")}
            >
              Button ({variant || "Default"} - Light)
            </Button>
            <Button
              key={vIdx}
              variant={variant}
              shade="dark"
              onClick={action("clicked")}
            >
              Button ({variant || "Default"} - Dark)
            </Button>
          </>
        ))}
      </ButtonList>
    </Container>
  </Section>
);

export const Sizes = () => (
  <Section>
    <Container>
      <ButtonList>
        {["small", "normal", "medium", "large"].map((size, vIdx) => (
          <Button
            key={vIdx}
            isSize={size as BulmaSize}
            onClick={action("clicked")}
          >
            Button ({size})
          </Button>
        ))}
      </ButtonList>
    </Container>
  </Section>
);

export const Modifiers = () => (
  <Section>
    <Container>
      <ButtonList>
        <Button fullWidth>Full Width</Button>
        <Button isOutlined>Outlined</Button>
        <Button variant="primary" isInverted>
          Inverted
        </Button>
        <Button isRounded>Rounded</Button>
        <Button isFocused>Focus</Button>
        <Button isLoading>Loading</Button>

        <Button isStatic>Static</Button>
        <Button disabled>Disabled</Button>
      </ButtonList>
    </Container>
  </Section>
);
