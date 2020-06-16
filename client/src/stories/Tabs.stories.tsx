import "bulma/css/bulma.css";
import React from "react";

import {
  Tabs,
  Tab,
  Section,
  Container,
  Text,
  Content,
} from "../components/bulma";

export default {
  title: "Tabs",
};

export const basic = () => {
  return (
    <Section>
      <Container>
        <Tabs>
          <Tab tabKey="Home">Home</Tab>
          <Tab tabKey="About">About</Tab>
          <Tab tabKey="Contact">Contact</Tab>
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
          <Tab tabKey="Home">Home</Tab>
          <Tab tabKey="About">About</Tab>
          <Tab tabKey="Contact">Contact</Tab>
        </Tabs>
        <Tabs isSize="medium">
          <Tab tabKey="Home">Home</Tab>
          <Tab tabKey="About">About</Tab>
          <Tab tabKey="Contact">Contact</Tab>
        </Tabs>
        <Tabs isSize="large">
          <Tab tabKey="Home">Home</Tab>
          <Tab tabKey="About">About</Tab>
          <Tab tabKey="Contact">Contact</Tab>
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
          <Tab tabKey="Home">Home</Tab>
          <Tab tabKey="About">About</Tab>
          <Tab tabKey="Contact">Contact</Tab>
        </Tabs>
        <Tabs isAligned="right">
          <Tab tabKey="Home">Home</Tab>
          <Tab tabKey="About">About</Tab>
          <Tab tabKey="Contact">Contact</Tab>
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
          <Tab tabKey="Home">Home</Tab>
          <Tab tabKey="About">About</Tab>
          <Tab tabKey="Contact" isActive>
            Contact
          </Tab>
        </Tabs>
        <Tabs isVariant="toggle">
          <Tab tabKey="Home">Home</Tab>
          <Tab tabKey="About" isActive>
            About
          </Tab>
          <Tab tabKey="Contact">Contact</Tab>
        </Tabs>
        <Tabs isVariant="toggle-rounded">
          <Tab tabKey="Home" isActive>
            Home
          </Tab>
          <Tab tabKey="About">About</Tab>
          <Tab tabKey="Contact">Contact</Tab>
        </Tabs>
      </Container>
    </Section>
  );
};
export const Controlled: React.FC<any> = () => {
  const [tab, setTab] = React.useState<string>("home");
  return (
    <Section>
      <Container>
        <Text>Active Tab: {tab || "none"}</Text>
        <Tabs isVariant="boxed" activeTab={tab} onTabChange={setTab}>
          <Tab tabKey="home">Home</Tab>
          <Tab tabKey="about">About</Tab>
          <Tab tabKey="contact" isActive>
            Contact
          </Tab>
          {(tab === "more" || tab === "home") && (
            <Tab tabKey="more" disabled>
              More
            </Tab>
          )}
        </Tabs>
      </Container>
      <Container>
        {tab === "home" && <Content>Home Content</Content>}
        {tab === "about" && <Content>Abount Content</Content>}
        {tab === "contact" && <Content>Contact Content</Content>}
        {tab === "more" && <Content>More Content</Content>}
      </Container>
    </Section>
  );
};
