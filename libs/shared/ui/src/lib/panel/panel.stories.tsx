import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from './panel.component';

export default {
  component: Panel,
  title: 'Panel',
  render: (args) => (
    <Panel {...args}>
      <Panel.Title>Default (normal) title</Panel.Title>
      <Panel.Title size="small">Small title</Panel.Title>
    </Panel>
  ),
} satisfies Meta<typeof Panel>;

type Story = StoryObj<typeof Panel>;

export const Complete: Story = {
  args: {},
};
