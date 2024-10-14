import type { Meta, StoryObj } from '@storybook/react';
import { ShareBigIcon, ShareIcon } from '@e-shop/icons';
import { VisuallyHidden } from '@reach/visually-hidden';
import { IconButton } from './icon-button.component';
import { ICON_BUTTON_VARIANT, ICON_BUTTON_SIZE } from './icon-button.utils';

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
    size: {
      control: 'select',
      options: [
        ICON_BUTTON_SIZE.SMALL,
        ICON_BUTTON_SIZE.MEDIUM,
        ICON_BUTTON_SIZE.LARGE,
      ],
    },
  },
} satisfies Meta<typeof IconButton>;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    variant: undefined,
    size: undefined,
  },
  render: (args) => (
    <IconButton {...args}>
      <ShareIcon />
      <VisuallyHidden>Share</VisuallyHidden>
    </IconButton>
  ),
};

export const Small: Story = {
  args: {
    variant: undefined,
    size: ICON_BUTTON_SIZE.SMALL,
  },
  render: (args) => (
    <IconButton {...args}>
      <ShareIcon />
      <VisuallyHidden>Share</VisuallyHidden>
    </IconButton>
  ),
};

export const Medium: Story = {
  args: {
    variant: undefined,
    size: ICON_BUTTON_SIZE.MEDIUM,
  },
  render: (args) => (
    <IconButton {...args}>
      <ShareIcon />
      <VisuallyHidden>Share</VisuallyHidden>
    </IconButton>
  ),
};

export const Big: Story = {
  args: {
    variant: undefined,
    size: ICON_BUTTON_SIZE.LARGE,
  },
  render: (args) => (
    <IconButton {...args}>
      <ShareBigIcon />
      <VisuallyHidden>Share</VisuallyHidden>
    </IconButton>
  ),
};
