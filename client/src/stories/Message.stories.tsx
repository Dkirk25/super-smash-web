import "bulma/css/bulma.css";
import React from "react";

import {
  Container,
  Section,
  Message,
  MessageHeader,
  MessageBody,
} from "../components/bulma";
import { BulmaColor, ThemeColorVariant } from "../components/bulma/modifiers";

export default {
  title: "Message",
};

export const basic = () => {
  return (
    <Section>
      <Container>
        <Message>
          <MessageHeader>
            <p>Optional Header</p>
          </MessageHeader>
          <MessageBody>
            <p>Content goes here</p>
          </MessageBody>
        </Message>
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
        {colorVariants.map((color: BulmaColor) => (
          <>
            <Message color={color}>
              <MessageHeader>
                <p>Optional Header</p>
              </MessageHeader>
              <MessageBody>
                <p>Content goes here</p>
              </MessageBody>
            </Message>
            <Message color={color}>
              <MessageBody>
                <p>Content goes here</p>
              </MessageBody>
            </Message>
          </>
        ))}
      </Container>
    </Section>
  );
};
