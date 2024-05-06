import type { Meta, StoryObj } from '@storybook/react';
import { QuantitySelection } from './quantity-selection.component';

export default {
  component: QuantitySelection,
  title: 'QuantitySelection',
} satisfies Meta<typeof QuantitySelection>;

type Story = StoryObj<typeof QuantitySelection>;

export const Default: Story = {
  args: {},
};
