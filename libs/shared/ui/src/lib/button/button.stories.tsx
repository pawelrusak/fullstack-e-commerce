import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button.component';

export default {
  component: Button,
  title: 'Button',
  args: {
    children: 'Shop Now',
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const SolidPrimary: Story = {
  args: {},
};

export const SolidFullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const SolidSecondary: Story = {
  args: {
    colorVariant: 'secondary',
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

export const OutlineSecondary: Story = {
  args: {
    variant: 'outline',
    colorVariant: 'secondary',
  },
};

export const OutlineDisabled: Story = {
  args: {
    variant: 'outline',
    disabled: true,
  },
};
