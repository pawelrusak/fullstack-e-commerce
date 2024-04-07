import type { Meta, StoryObj } from '@storybook/react';
import { Brand } from './brand.component';

export default {
  component: Brand,
  title: 'Brand',
} satisfies Meta<typeof Brand>;

type Story = StoryObj<typeof Brand>;

export const Default: Story = {
  args: {},
};
