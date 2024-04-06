import { Ui } from './ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Ui> = {
  component: Ui,
  title: 'Ui',
};
type Story = StoryObj<typeof Ui>;

export const Primary: Story = {
  args: {},
};

export default meta;
