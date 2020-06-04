import "bulma/css/bulma.css";
import React from "react";

import {
  Panel,
  PanelBlock,
  PanelHeading,
  PanelTabs,
  Section,
  Container,
  Button,
} from "../components/bulma";
import { ThemeColorVariant } from "../components/bulma/modifiers";

export default {
  title: "Panel",
};

export const basic = () => {
  return (
    <Section>
      <Container>
        <Panel>
          <PanelHeading>Repositories</PanelHeading>
          <PanelBlock>
            <p className="control has-icons-left">
              <input className="input" type="text" placeholder="Search" />
            </p>
          </PanelBlock>
          <PanelTabs>
            <a>All</a>
            <a>Public</a>
            <a>Private</a>
            <a>Sources</a>
            <a>Forks</a>
          </PanelTabs>
          <PanelBlock isActive component="a">
            bulma
          </PanelBlock>
          <PanelBlock component="a">marksheet</PanelBlock>
          <PanelBlock component="a">minireset.css</PanelBlock>
          <PanelBlock component="label">
            <input type="checkbox" />
            remember me
          </PanelBlock>
          <PanelBlock>
            <Button variant="link" isOutlined isFullWidth>
              Reset all filters
            </Button>
          </PanelBlock>
        </Panel>
      </Container>
    </Section>
  );
};

const colorVariants: Array<ThemeColorVariant> = [
  "primary",
  "secondary",
  "link",
  "info",
  "warning",
  "danger",
  "text",
  "success",
];
export const colors = () => {
  return (
    <Section>
      <Container>
        {colorVariants.map((color) => (
          <Panel color={color} key={color}>
            <PanelHeading>Repositories ({color})</PanelHeading>
            <PanelBlock>
              <p className="control has-icons-left">
                <input className="input" type="text" placeholder="Search" />
              </p>
            </PanelBlock>
            <PanelTabs>
              <a className="is-active">All</a>
              <a>Public</a>
              <a>Private</a>
              <a>Sources</a>
              <a>Forks</a>
            </PanelTabs>
            <PanelBlock isActive component="a">
              bulma
            </PanelBlock>
            <PanelBlock component="a">marksheet</PanelBlock>
            <PanelBlock component="a">minireset.css</PanelBlock>
            <PanelBlock component="label">
              <input type="checkbox" />
              remember me
            </PanelBlock>
            <PanelBlock>
              <Button variant="link" isOutlined isFullWidth>
                Reset all filters
              </Button>
            </PanelBlock>
          </Panel>
        ))}
      </Container>
    </Section>
  );
};
