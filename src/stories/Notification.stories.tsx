import "bulma/css/bulma.css";
import React from "react";

import { Notification, Container, Button } from "../components/bulma";
import { BulmaColorVariant } from "../components/bulma/modifiers";

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
  title: "Notification",
  component: Notification
};

export const Variants = () => (
  <Container>
    {colors.map(color => (
      <>
        <Notification variant={color}>
          <Button isDelete></Button>
          <span>{color} Notification</span>
        </Notification>
        <Notification variant={color} shade="light">
          <Button isDelete></Button>
          <span>{color} Notification (light)</span>
        </Notification>
      </>
    ))}
  </Container>
);

export const Modifiers = () => (
  <Container>
    <Notification variant="primary">
      <Button isDelete></Button>
      <span>Notification</span>
    </Notification>

    <Notification variant="primary" isPaddingLess>
      <Button isDelete></Button>
      <span>Notification (isPaddingLess)</span>
    </Notification>

    <Notification variant="primary" isMarginless>
      <Button isDelete></Button>
      <span>Notification (isMarginless)</span>
    </Notification>

    <Notification variant="primary" isRadiusLess>
      <Button isDelete></Button>
      <span>Notification (isRadiusLess)</span>
    </Notification>

    <Notification variant="primary" isShadowless>
      <Button isDelete></Button>
      <span>Notification (isShadowless)</span>
    </Notification>

    <Notification variant="primary" isPulled="left">
      <Button isDelete></Button>
      <span>Notification (Pulled Left)</span>
    </Notification>

    <Notification variant="primary" isPulled="right">
      <Button isDelete></Button>
      <span>Notification (Pulled Right)</span>
    </Notification>
  </Container>
);
