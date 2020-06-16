import "bulma/css/bulma.css";
import React from "react";

import { Content, Container } from "../components/bulma";

export default {
  title: "Content",
  component: Content
};

export const Modifiers = () => (
  <Container>
    <Content style={{ border: "1px solid" }}>
      <span>** border to show bounds **</span>
    </Content>

    <Content style={{ border: "1px solid" }} isPaddingLess>
      <span>Paddingless</span>
    </Content>

    <Content style={{ border: "1px solid" }} isMarginless>
      <span>Marginless</span>
    </Content>

    <Content style={{ border: "1px solid" }} isRadiusLess>
      <span>Radiusless</span>
    </Content>

    <Content style={{ border: "1px solid" }} isShadowless>
      <span>Shadowless</span>
    </Content>

    <Content style={{ border: "1px solid" }} isSize="large">
      <span>Large Content</span>
    </Content>

    <Content style={{ border: "1px solid" }} isSize="medium">
      <span>Medium Content</span>
    </Content>

    <Content style={{ border: "1px solid" }} isSize="normal">
      <span>Normal Content</span>
    </Content>

    <Content style={{ border: "1px solid" }} isSize="small">
      <span>Small Content</span>
    </Content>

    <Content style={{ border: "1px solid" }} isPulled="right">
      <span>Pulled Right</span>
    </Content>

    <Content style={{ border: "1px solid" }} isPulled="left">
      <span>Pulled Left</span>
    </Content>
  </Container>
);
