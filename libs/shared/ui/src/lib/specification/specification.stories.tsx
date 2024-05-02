import styled from 'styled-components';
import type { Meta, StoryObj } from '@storybook/react';
import { EN } from '@e-shop/i18n';
import { Specification } from './specification.component';
import { Button } from '../button';

// @todo add sizes to the button component
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
      <Specification.Property>
        {EN.SPECIFICATION.PROPERTY.BRAND}
      </Specification.Property>
      <Specification.Details>NexSUS Tech Company</Specification.Details>

      <Specification.Property>
        {EN.SPECIFICATION.PROPERTY.SIZE}
      </Specification.Property>
      <Specification.Details>
        15.7 x 11.1 x 1.0 inches ({EN.SPECIFICATION.SIZE.DIMENSIONS})
      </Specification.Details>

      <Specification.Property>
        {EN.SPECIFICATION.PROPERTY.WEIGHT}
      </Specification.Property>
      <Specification.Details>6.28 pounds</Specification.Details>

      <Specification.Property>
        {EN.SPECIFICATION.PROPERTY.DELIVERY}
      </Specification.Property>
      <Specification.Details>Worldwide</Specification.Details>

      <Specification.Property>
        {EN.SPECIFICATION.PROPERTY.VARIANT}
      </Specification.Property>
      <Specification.Details>
        {BUTTONS.map(({ label, ...args }) => (
          <SmallButton key={label} variant="outline" {...args}>
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
