import "bulma/css/bulma.css";
import React from "react";

import { Box, Container } from "../components/bulma";

export default {
  title: "Box",
  component: Box
};

export const Modifiers = () => (
  <Container>
    <Box>
      <span>
        simply a container with a shadow, a border, a radius, and some padding.
      </span>
    </Box>
    <Box isPaddingLess>
      <span>Paddingless</span>
    </Box>
    <Box isMarginless>
      <span>Marginless</span>
    </Box>
    <Box isRadiusLess>
      <span>Radiusless</span>
    </Box>
    <Box isRadiusLess>
      <span>Shadowless</span>
    </Box>
    <Box isPulled="right">
      <span>Pulled Right</span>
    </Box>
    <Box isPulled="left">
      <span>Pulled Left</span>
    </Box>
  </Container>
);
