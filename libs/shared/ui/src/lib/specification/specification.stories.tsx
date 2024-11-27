import styled from 'styled-components';
import type { Meta, StoryObj } from '@storybook/react';
import { Specification } from './specification.component';
import { Button } from '../button';

// TODO add sizes to the button component
const SmallButton = styled(Button)`
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding: 1.5rem 2.3rem;
`;

const BUTTONS = [
  { label: 'Off White', colorVariant: 'secondary' },
  { label: 'Space Gray', colorVariant: 'primary' },
  { label: 'Jet Black', colorVariant: 'secondary' },
  { label: 'Cinnamon Red', disabled: true },
] as const;

export default {
  component: Specification,
  title: 'Specification',
  render: () => (
    <Specification>
      <Specification.Property>Brand</Specification.Property>
      <Specification.Details>NexSUS Tech Company</Specification.Details>

      <Specification.Property>Size</Specification.Property>
      <Specification.Details>
        15.7 x 11.1 x 1.0 inches (W x D x H)
      </Specification.Details>

      <Specification.Property>Weight</Specification.Property>
      <Specification.Details>6.28 pounds</Specification.Details>

      <Specification.Property>Delivery</Specification.Property>
      <Specification.Details>Worldwide</Specification.Details>

      <Specification.Property>Variant</Specification.Property>
      <Specification.Details>
        {BUTTONS.map(({ label, ...args }) => (
          <SmallButton size="medium" key={label} variant="outline" {...args}>
            {label}
          </SmallButton>
        ))}
      </Specification.Details>
    </Specification>
  ),
} satisfies Meta<typeof Specification>;

type Story = StoryObj<typeof Specification>;

export const Default: Story = {
  args: {},
};
