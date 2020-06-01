import "bulma/css/bulma.css";
import React from "react";

import {
  Column,
  Container,
  Section,
  Title,
  Columns,
  Box,
} from "../components/bulma";

export default {
  title: "Column",
  component: Column,
};

export const basic = () => (
  <Section>
    <Container>
      <Columns>
        <Column>
          <Box>
            <Title>One</Title>
          </Box>
        </Column>
        <Column>
          <Box>
            <Title>Two</Title>
          </Box>
        </Column>
        <Column>
          <Box>
            <Title>Three</Title>
          </Box>
        </Column>
        <Column>
          <Box>
            <Title>Four</Title>
          </Box>
        </Column>
      </Columns>
    </Container>
  </Section>
);

export const Sizes = () => (
  <Section>
    <Container>
      {[
        "full",
        "four-fifths",
        "three-quarters",
        "two-thirds",
        "three-fifths",
        "half",
        "two-fifths",
        "one-third",
        "one-quarter",
        "one-fifth",
      ].map((span: any) => (
        <Columns>
          <Column spanSize={span}>
            <Box>
              <Title>{span}</Title>
            </Box>
          </Column>
          {span !== "full" && (
            <Column>
              <Box>
                <Title>Auto</Title>
              </Box>
            </Column>
          )}
          {span !== "full" && (
            <Column>
              <Box>
                <Title>Auto</Title>
              </Box>
            </Column>
          )}
        </Columns>
      ))}
    </Container>
  </Section>
);

export const twelveColumn = () => (
  <Section>
    <Container>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i: any) => (
        <Columns>
          <Column spanSize={i}>
            <Box>
              <Title>{i}</Title>
            </Box>
          </Column>
          {i !== 12 && (
            <Column>
              <Box>
                <Title>Auto</Title>
              </Box>
            </Column>
          )}
        </Columns>
      ))}
    </Container>
  </Section>
);

export const offset = () => (
  <Section>
    <Container>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i: any) => (
        <Columns>
          <Column spanOffset={i}>
            <Box>
              <Title>{i}</Title>
            </Box>
          </Column>
          {i < 11 && (
            <Column>
              <Box>
                <Title>Auto</Title>
              </Box>
            </Column>
          )}
        </Columns>
      ))}
    </Container>
  </Section>
);

export const narrow = () => (
  <Section>
    <Container>
      <Columns>
        <Column isNarrow style={{ width: 200 }}>
          <Box>
            <Title>Narrow Column</Title>
            <p>This column is only 200px wide</p>
          </Box>
        </Column>
        <Column>
          <Box>
            <Title>Auto</Title>
            <p>this column will take up the remaining space</p>
          </Box>
        </Column>
      </Columns>
    </Container>
  </Section>
);

export const isMobile = () => (
  <Section>
    <Container>
      <Columns isMobile>
        <Column>
          <Box>
            <Title>One</Title>
          </Box>
        </Column>
        <Column>
          <Box>
            <Title>Two</Title>
          </Box>
        </Column>
        <Column>
          <Box>
            <Title>Three</Title>
          </Box>
        </Column>
        <Column>
          <Box>
            <Title>Four</Title>
          </Box>
        </Column>
      </Columns>
    </Container>
  </Section>
);
