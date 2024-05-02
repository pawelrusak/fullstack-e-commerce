import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './divider.component';

export default {
  component: Divider,
  title: 'Divider',
} satisfies Meta<typeof Divider>;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};
