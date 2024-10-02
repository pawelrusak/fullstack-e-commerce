import React from 'react';
import { Field } from './field.component';
import styled from 'styled-components';
import { CheckIcon, EyeSlashIcon } from '@e-shop/icons';
import type { FieldControlInputProps, FieldProps } from './field.component';
import type { Meta, StoryObj } from '@storybook/react';

const Container = styled.div`
  width: 43rem;
`;

export default {
  component: Field,
  title: 'Field',
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
} satisfies Meta<typeof Field>;

type Story<TField = typeof Field> = StoryObj<TField>;

export const Simple: Story<FieldControlInputProps> = {
  args: {
    value: 'ameliawatson',
    placeholder: 'ameliawatson',
  },
  render: (args: FieldControlInputProps) => (
    <Field>
      <Field.Label>Username</Field.Label>
      {/* NOTE: Field.ControlInput and Field.Input have [type="text"] attribute as default  */}
      <Field.ControlInput {...args} />
    </Field>
  ),
};

export const Complete: Story<FieldControlInputProps> = {
  args: {
    type: 'text',
  },
  render: (args: FieldControlInputProps) => (
    <Field>
      <Field.Label isRequired>Username</Field.Label>
      <Field.ControlInput
        iconLeft={<CheckIcon />}
        iconRight={<EyeSlashIcon />}
        placeholder="ameliawatson"
        {...args}
      />
      <Field.Help>Some help text</Field.Help>
    </Field>
  ),
};

const StyleStrong = styled.strong`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const PasswordTemplate = (args: FieldControlInputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleChangeInputField = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Field>
      <Field.Label isRequired>Password</Field.Label>
      <Field.Control hasRightIcon>
        <Field.Input type={showPassword ? 'text' : 'password'} {...args} />
        <Field.ControlIcon isRight as="button" onClick={handleChangeInputField}>
          <EyeSlashIcon />
        </Field.ControlIcon>
      </Field.Control>

      <Field.Help>
        <StyleStrong>Password Strength:</StyleStrong> Perfect!
      </Field.Help>
    </Field>
  );
};

export const Password: Story<FieldControlInputProps> = {
  args: {
    value: 'secret password',
  },
  render: (args: FieldControlInputProps) => <PasswordTemplate {...args} />,
};

export const InValid: Story<FieldProps> = {
  args: {
    valid: false,
    controlId: 'username',
  },
  render: (args: FieldProps) => (
    <Field {...args}>
      <Field.Label>Username</Field.Label>
      <Field.ControlInput
        placeholder="ameliawatson"
        defaultValue="Wrong value"
      />
      <Field.Error>Some error message</Field.Error>
    </Field>
  ),
};
