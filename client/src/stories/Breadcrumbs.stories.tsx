import "bulma/css/bulma.css";
import React from "react";

import {
  Container,
  Section,
  Breadcrumb,
  Breadcrumbs,
} from "../components/bulma";

export default {
  title: "Breadcrumb",
};

export const basic = () => {
  return (
    <Section>
      <Container>
        <Breadcrumbs>
          <Breadcrumb to="#">Documentation</Breadcrumb>
          <Breadcrumb to="#">Components</Breadcrumb>
          <Breadcrumb isActive to="#">
            Breadcrumb
          </Breadcrumb>
        </Breadcrumbs>
      </Container>
    </Section>
  );
};

export const alignment = () => {
  return (
    <Section>
      <Container>
        <Breadcrumbs isAligned="center">
          <Breadcrumb to="#">Documentation</Breadcrumb>
          <Breadcrumb to="#">Components</Breadcrumb>
          <Breadcrumb to="#">Breadcrumb</Breadcrumb>
        </Breadcrumbs>
        <Breadcrumbs isAligned="right">
          <Breadcrumb to="#">Documentation</Breadcrumb>
          <Breadcrumb to="#">Components</Breadcrumb>
          <Breadcrumb to="#">Breadcrumb</Breadcrumb>
        </Breadcrumbs>
      </Container>
    </Section>
  );
};

export const separators = () => {
  return (
    <Section>
      <Container>
        {[undefined, "arrow", "bullet", "dot", "succeeds"].map(
          (separator: any) => (
            <Breadcrumbs hasSeparator={separator}>
              <Breadcrumb to="#">Documentation</Breadcrumb>
              <Breadcrumb to="#">Components</Breadcrumb>
              <Breadcrumb to="#">Breadcrumb</Breadcrumb>
            </Breadcrumbs>
          )
        )}
      </Container>
    </Section>
  );
};

export const sizes = () => {
  return (
    <Section>
      <Container>
        {[undefined, "small", "medium", "large"].map((size: any) => (
          <Breadcrumbs isSize={size}>
            <Breadcrumb to="#">Documentation</Breadcrumb>
            <Breadcrumb to="#">Components</Breadcrumb>
            <Breadcrumb to="#">Breadcrumb</Breadcrumb>
          </Breadcrumbs>
        ))}
      </Container>
    </Section>
  );
};
