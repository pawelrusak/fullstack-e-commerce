import type { Meta, StoryObj } from '@storybook/react';
import { ProgressStepper } from './progress-stepper.component';
import { EN } from '@e-shop/i18n';

export default {
  component: ProgressStepper,
  title: 'ProgressStepper',
  render: (args) => (
    <ProgressStepper {...args}>
      <ProgressStepper.List>
        <ProgressStepper.ListItem isActive>
          <ProgressStepper.ListItemLink href="#">
            {EN.CHECKOUT.STEPS.INFORMATION}
          </ProgressStepper.ListItemLink>
        </ProgressStepper.ListItem>
        <ProgressStepper.ListItem>
          <ProgressStepper.ListItemLink href="#">
            {EN.CHECKOUT.STEPS.SHIPPING}
          </ProgressStepper.ListItemLink>
        </ProgressStepper.ListItem>
        <ProgressStepper.ListItem>
          <ProgressStepper.ListItemLink href="#">
            {EN.CHECKOUT.STEPS.PAYMENT}
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
