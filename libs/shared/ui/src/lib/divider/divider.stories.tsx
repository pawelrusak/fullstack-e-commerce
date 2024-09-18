import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './divider.component';
import { SpacingHighlightDecorator } from '../../../.storybook/decorators';

const marginControl = {
  control: 'select',
  options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

export default {
  component: Divider,
  title: 'Divider',
  argTypes: {
    mb: marginControl,
    mt: marginControl,
    mr: marginControl,
    ml: marginControl,
    m: marginControl,
    mx: marginControl,
    my: marginControl,
  },
} satisfies Meta<typeof Divider>;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};

export const WithSpacingHighlight: Story = {
  args: {},
  decorators: [SpacingHighlightDecorator],
};
