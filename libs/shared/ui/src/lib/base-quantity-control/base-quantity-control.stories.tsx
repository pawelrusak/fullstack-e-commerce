import type { Meta, StoryObj } from '@storybook/react';
import BaseQuantityControl from './base-quantity-control.component';

export default {
  component: BaseQuantityControl,
  title: 'BaseQuantityControl',
  render: ({ maxQuantity = 10, ...args }) => (
    <BaseQuantityControl maxQuantity={maxQuantity} {...args}>
      <BaseQuantityControl.IncreaseButton>
        +1
      </BaseQuantityControl.IncreaseButton>
      <BaseQuantityControl.DecreaseButton>
        -1
      </BaseQuantityControl.DecreaseButton>
      <BaseQuantityControl.Input />
    </BaseQuantityControl>
  ),
} satisfies Meta<typeof BaseQuantityControl>;

type Story = StoryObj<typeof BaseQuantityControl>;

export const Default: Story = {
  args: {},
};
