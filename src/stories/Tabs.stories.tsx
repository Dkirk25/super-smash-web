import "bulma/css/bulma.css";
import React from "react";

import { Tabs, Tab, Section, Container } from "../components/bulma";

export default {
  title: "Tabs",
};

export const basic = () => {
  return (
    <Section>
      <Container>
        <Tabs>
          <Tab>Home</Tab>
          <Tab>About</Tab>
          <Tab>Contact</Tab>
        </Tabs>
      </Container>
    </Section>
  );
};

export const sizes = () => {
  return (
    <Section>
      <Container>
        <Tabs isSize="small">
          <Tab>Home</Tab>
          <Tab>About</Tab>
          <Tab>Contact</Tab>
        </Tabs>
        <Tabs isSize="medium">
          <Tab>Home</Tab>
          <Tab>About</Tab>
          <Tab>Contact</Tab>
        </Tabs>
        <Tabs isSize="large">
          <Tab>Home</Tab>
          <Tab>About</Tab>
          <Tab>Contact</Tab>
        </Tabs>
      </Container>
    </Section>
  );
};

export const alignment = () => {
  return (
    <Section>
      <Container>
        <Tabs isAligned="center">
          <Tab>Home</Tab>
          <Tab>About</Tab>
          <Tab>Contact</Tab>
        </Tabs>
        <Tabs isAligned="right">
          <Tab>Home</Tab>
          <Tab>About</Tab>
          <Tab>Contact</Tab>
        </Tabs>
      </Container>
    </Section>
  );
};

export const variants = () => {
  return (
    <Section>
      <Container>
        <Tabs isVariant="boxed">
          <Tab>Home</Tab>
          <Tab>About</Tab>
          <Tab isActive>Contact</Tab>
        </Tabs>
        <Tabs isVariant="toggle">
          <Tab>Home</Tab>
          <Tab isActive>About</Tab>
          <Tab>Contact</Tab>
        </Tabs>
        <Tabs isVariant="toggle-rounded">
          <Tab isActive>Home</Tab>
          <Tab>About</Tab>
          <Tab>Contact</Tab>
        </Tabs>
      </Container>
    </Section>
  );
};
