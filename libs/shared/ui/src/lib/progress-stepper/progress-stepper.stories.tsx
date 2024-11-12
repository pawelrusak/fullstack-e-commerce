import type { Meta, StoryObj } from '@storybook/react';
import { ProgressStepper } from './progress-stepper.component';

export default {
  component: ProgressStepper,
  title: 'ProgressStepper',
  render: (args) => (
    <ProgressStepper {...args}>
      <ProgressStepper.List>
        <ProgressStepper.ListItem isActive>
          <ProgressStepper.ListItemLink href="#">
            Information
          </ProgressStepper.ListItemLink>
        </ProgressStepper.ListItem>
        <ProgressStepper.ListItem>
          <ProgressStepper.ListItemLink href="#">
            Shipping
          </ProgressStepper.ListItemLink>
        </ProgressStepper.ListItem>
        <ProgressStepper.ListItem>
          <ProgressStepper.ListItemLink href="#">
            Payment
          </ProgressStepper.ListItemLink>
        </ProgressStepper.ListItem>
      </ProgressStepper.List>
    </ProgressStepper>
  ),
} satisfies Meta<typeof ProgressStepper>;

type Story = StoryObj<typeof ProgressStepper>;

export const Complete: Story = {
  args: {},
};
