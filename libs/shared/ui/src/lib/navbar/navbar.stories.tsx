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

export const WithoutProductBar: Story = {
  args: {},
  render: (args) => (
    <Navbar {...args}>
      <Navbar.ContactBar />
      <Navbar.UserBar hasBorder />
    </Navbar>
  ),
};
