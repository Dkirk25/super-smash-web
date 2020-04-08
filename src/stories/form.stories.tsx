import "bulma/css/bulma.css";
import React from "react";
import { action } from "@storybook/addon-actions";

import {
  RadioButton,
  Container,
  Field,
  Select,
  TextInput,
  Control,
  TextArea,
  Checkbox,
  Button,
} from "../components/bulma";

export default {
  title: "Form",
};

export const Variants = () => (
  <Container>
    <Field label="Name">
      <Control>
        <TextInput placeholder="Text Input" onChange={action("onChange")} />
      </Control>
    </Field>

    <Field label="Username" variant="success" helpText="This is available">
      <Control>
        <TextInput
          type="text"
          placeholder="Text Input"
          value="@username"
          onChange={action("onChange")}
        />
      </Control>
    </Field>

    <Field label="Email" variant="danger" helpText="Invalid email">
      <Control>
        <TextInput
          type="text"
          placeholder="Text Input"
          value="a fake email"
          onChange={action("onChange")}
        />
      </Control>
    </Field>

    <Field label="Subject">
      <Control>
        <Select
          onChange={(e) => action("onChange")(e.target.value)}
          placeholder="Select Dropdown"
          value={undefined}
        >
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </Control>
    </Field>

    <Field label="Message">
      <Control>
        <TextArea placeholder="Textarea"></TextArea>
      </Control>
    </Field>

    <Field>
      <Control>
        <Checkbox onChange={action("onChange")}>
          I agree to the <a href="#">terms and conditions</a>
        </Checkbox>
      </Control>
    </Field>

    <Field>
      <Control>
        <Checkbox labelPosition="left" onChange={action("onChange")}>
          I agree to the <a href="#">terms and conditions</a>
        </Checkbox>
      </Control>
    </Field>

    <Field>
      <Control>
        <RadioButton name="question" onChange={action("onChange")}>
          Yes
        </RadioButton>
        <RadioButton name="question" onChange={action("onChange")}>
          No
        </RadioButton>
      </Control>
    </Field>

    <Field grouped>
      <Control>
        <Button variant="link">Submit</Button>
      </Control>
      <Control>
        <Button variant="link" shade="light">
          Cancel
        </Button>
      </Control>
    </Field>
  </Container>
);
