import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './breadcrumb.component';

export default {
  component: Breadcrumb,
  title: 'Breadcrumb',
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Computers & Tablets</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Laptop</Breadcrumb.Item>
      <Breadcrumb.Item href="#" isCurrent>
        NexSUS ROCK Strix Scar 17 Gaming Laptop
      </Breadcrumb.Item>
    </Breadcrumb>
  ),
} satisfies Meta<typeof Breadcrumb>;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {},
};
