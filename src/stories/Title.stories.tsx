import "bulma/css/bulma.css";
import React from "react";

import { Title, Container, Section } from "../components/bulma";

export default {
  title: "Title",
  component: Title
};

export const Variants = () => (
  <Section>
    <Container>
      <Title>Hello</Title>
      <Title type="subtitle">World</Title>
    </Container>
  </Section>
);

export const Spacing = () => (
  <Section>
    <Container>
      <Title isSpaced>Hello</Title>
      <Title type="subtitle">World</Title>
    </Container>
  </Section>
);

export const Sizes = () => (
  <Section>
    <Container>
      {[1, 2, 3, 4, 5, 6, 7].map(size => (
        <>
          <Title textSize={size as any}>Title Size: {size}</Title>
          <Title type="subtitle" textSize={size as any}>
            Subtitle Size: {size}
          </Title>
        </>
      ))}
    </Container>
  </Section>
);
