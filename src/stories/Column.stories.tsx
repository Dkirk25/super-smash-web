import "bulma/css/bulma.css";
import React from "react";

import {
  Column,
  Container,
  Section,
  Title,
  Columns,
  Box
} from "../components/bulma";

export default {
  title: "Column",
  component: Column
};

export const Basic = () => (
  <Section>
    <Container>
      <Columns>
        <Column spanSize={3}>
          <Box>
            <Title>One</Title>
          </Box>
        </Column>
        <Column spanSize="one-third">
          <Box>
            <Title>Two</Title>
          </Box>
        </Column>
        <Column spanOffset={1}>
          <Box>
            <Title>Three</Title>
          </Box>
        </Column>
      </Columns>
    </Container>
  </Section>
);
