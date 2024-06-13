import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './navbar.component';

export default {
  component: Navbar,
  title: 'Navbar',
} satisfies Meta<typeof Navbar>;

type Story = StoryObj<typeof Navbar>;

export const Complete: Story = {
  args: {},
};

export const CompleteWithFilledCartAndNumberBadge: Story = {
  args: {
    cartAmount: 150,
    cartItemsCount: 1,
    cartBadgeVariant: 'number',
  },
  render: (args) => <Navbar {...args} />,
};

export const CompleteWithFilledCartAndDotBadge: Story = {
  args: {
    cartAmount: 150,
    cartItemsCount: 1,
  },
  render: (args) => <Navbar {...args} />,
};

export const WithoutProductBar: Story = {
  args: {},
  render: (args) => (
    <Navbar {...args}>
      <Navbar.ContactBar />
      <Navbar.UserBar hasBorder />
    </Navbar>
  ),
};
