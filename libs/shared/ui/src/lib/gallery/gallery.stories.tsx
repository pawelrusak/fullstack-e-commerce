import type { Meta, StoryObj } from '@storybook/react';
import { Gallery } from './gallery.component';
import image1 from './storybook-assets/gallery-image-1.png';
import image2 from './storybook-assets/gallery-image-2.png';
import image3 from './storybook-assets/gallery-image-3.png';

export default {
  component: Gallery,
  title: 'Gallery',
  render: (args) => <Gallery images={[image1, image2, image3]} />,
} satisfies Meta<typeof Gallery>;

type Story = StoryObj<typeof Gallery>;

export const Default: Story = {
  args: {},
};
