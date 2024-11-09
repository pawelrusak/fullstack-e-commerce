import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge.component';

export default {
  component: Badge,
  title: 'Badge',
} satisfies Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: '30%',
  },
};
