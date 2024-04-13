import React from 'react';
import { Field } from './field.component';
import styled from 'styled-components';
import { CheckIcon, EyeSlashIcon } from '../icons';
import type { FieldControlInputProps } from './field.component';
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
        type="text"
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
