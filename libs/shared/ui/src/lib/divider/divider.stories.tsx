import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './divider.component';

export default {
  component: Divider,
  title: 'Divider',
  argTypes: {
    mb: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    mt: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    mr: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    ml: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    m: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    mx: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    my: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  },
} satisfies Meta<typeof Divider>;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};
