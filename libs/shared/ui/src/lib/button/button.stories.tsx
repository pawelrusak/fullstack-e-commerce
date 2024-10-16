import type { Meta, StoryObj } from '@storybook/react';
import {
  BUTTON_COLOR_VARIANT,
  BUTTON_VARIANT,
  BUTTON_SIZE,
} from './button.utils';
import { Button } from './button.component';

export default {
  component: Button,
  title: 'Button',
  args: {
    children: 'Shop Now',
  },
  argTypes: {
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: [BUTTON_VARIANT.SOLID, BUTTON_VARIANT.OUTLINE],
    },
    colorVariant: {
      control: 'select',
      options: [BUTTON_COLOR_VARIANT.PRIMARY, BUTTON_COLOR_VARIANT.SECONDARY],
    },
    size: {
      control: 'select',
      options: [BUTTON_SIZE.SMALL, BUTTON_SIZE.MEDIUM, BUTTON_SIZE.LARGE],
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
    variant: BUTTON_VARIANT.OUTLINE,
  },
};

export const OutlineDisabled: Story = {
  args: {
    variant: BUTTON_VARIANT.OUTLINE,
    disabled: true,
  },
};
