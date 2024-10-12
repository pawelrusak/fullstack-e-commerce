import type { Meta, StoryObj } from '@storybook/react';
import { ShareBigIcon } from '@e-shop/icons';
import { VisuallyHidden } from '@reach/visually-hidden';
import { IconButton } from './icon-button.component';
import { ICON_BUTTON_VARIANT } from './icon-button.utils';

export default {
  component: IconButton,
  title: 'IconButton',
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: [
        ICON_BUTTON_VARIANT.PRIMARY,
        ICON_BUTTON_VARIANT.SECONDARY,
        ICON_BUTTON_VARIANT.OUTLINE_PRIMARY,
        ICON_BUTTON_VARIANT.OUTLINE_SECONDARY,
      ],
    },
  },
} satisfies Meta<typeof IconButton>;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    variant: undefined,
  },
  render: (args) => (
    <IconButton {...args}>
      <ShareBigIcon />
      <VisuallyHidden>Share</VisuallyHidden>
    </IconButton>
  ),
};
