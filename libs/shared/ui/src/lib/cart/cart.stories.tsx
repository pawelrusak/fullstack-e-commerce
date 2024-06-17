import type { Meta, StoryObj } from '@storybook/react';

import Cart, {
  CartStoryComplete,
  CartStoryEmptyState,
  CartStoryWithoutCoupon,
} from './cart.stories.component';

export default {
  component: Cart,
  title: 'Cart',
} satisfies Meta<typeof Cart>;

type Story = StoryObj<typeof Cart>;

export const Complete: Story = {
  args: {},
  render: () => <CartStoryComplete />,
};

export const WithoutCoupon: Story = {
  args: {},
  render: () => <CartStoryWithoutCoupon />,
};

export const EmptyState: Story = {
  args: {},
  render: () => <CartStoryEmptyState />,
};
