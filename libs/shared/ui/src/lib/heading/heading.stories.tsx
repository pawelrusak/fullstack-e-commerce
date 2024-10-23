import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './heading.component';

import { HEADING_LEVEL } from './heading.utils';

export default {
  component: Heading,
  title: 'Heading',
  args: {
    children: 'Hello World!',
  },
  argTypes: {
    level: {
      control: 'select',
      options: Object.values(HEADING_LEVEL),
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'strong'],
    },
  },
} satisfies Meta<typeof Heading>;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {},
};

export const Overview: Story = {
  render: ({ children }) => (
    <>
      <Heading level="1">h1. {children}</Heading>
      <Heading level="2">h2. {children}</Heading>
      <Heading level="3">h3. {children}</Heading>
      <Heading level="4">h4. {children}</Heading>
      <Heading level="5">h5. {children}</Heading>
      <Heading level="6">h6. {children}</Heading>
      <Heading level="7">h7. {children}</Heading>
      <Heading level="8">h8. {children}</Heading>
    </>
  ),
};

export const H1: Story = {
  args: {
    level: '1',
  },
};

export const H2: Story = {
  args: {
    as: 'h2',
    level: '2',
  },
};

export const H3: Story = {
  args: {
    as: 'h3',
    level: '3',
  },
};

export const H4: Story = {
  args: {
    as: 'h4',
    level: '4',
  },
};

export const H5: Story = {
  args: {
    as: 'h5',
    level: '5',
  },
};

export const H6: Story = {
  args: {
    as: 'h6',
    level: '6',
  },
};

export const H7: Story = {
  args: {
    as: 'p',
    level: '7',
    'aria-level': '7',
  },
};

export const H8: Story = {
  args: {
    as: 'p',
    level: '8',
    'aria-level': '8',
  },
};
