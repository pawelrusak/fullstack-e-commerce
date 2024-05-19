import type { Meta, StoryObj } from '@storybook/react';
import { FooterStory } from './footer.stories.component';

export default {
  component: FooterStory,
  title: 'Footer',
} satisfies Meta<typeof FooterStory>;

type Story = StoryObj<typeof FooterStory>;

export const Complete: Story = {
  args: {},
};
