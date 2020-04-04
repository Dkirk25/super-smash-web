import "bulma/css/bulma.css";
import React from "react";

import { Tile, Container, Section, Title } from "../components/bulma";

export default {
  title: "Tile",
  component: Tile
};

export const Layout = () => (
  <Section>
    <Container>
      <Tile isAncestor>
        <Tile isVertical isParent spanSize={3}>
          <Tile isChild isBox>
            <Title>One</Title>
          </Tile>
          <Tile isChild isBox>
            <Title>Two</Title>
          </Tile>
        </Tile>
        <Tile isParent>
          <Tile isChild isBox>
            <Title>Three</Title>
          </Tile>
        </Tile>
      </Tile>
    </Container>
  </Section>
);
