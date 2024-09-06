import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button.component';

export default {
  component: Button,
  title: 'Button',
  args: {
    children: 'Shop Now',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline'],
    },
    colorVariant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {},
};

export const SolidFullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const SolidDisabled: Story = {
  args: {
    disabled: true,
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const OutlineDisabled: Story = {
  args: {
    variant: 'outline',
    disabled: true,
  },
};
