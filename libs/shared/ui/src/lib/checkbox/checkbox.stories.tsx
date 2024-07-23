import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox.component';

export default {
  component: Checkbox,
  title: 'Checkbox',
  render: () => (
    <Checkbox defaultChecked>
      <Checkbox.Indicator>
        <Checkbox.CheckIcon />
      </Checkbox.Indicator>
    </Checkbox>
  ),
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Complete: Story = {
  args: {},
};

export const Simple: Story = {
  args: {},
  render: () => <Checkbox defaultChecked />,
};
