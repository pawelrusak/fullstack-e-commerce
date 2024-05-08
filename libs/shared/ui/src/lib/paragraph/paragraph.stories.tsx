import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './paragraph.component';

export default {
  component: Paragraph,
  title: 'Paragraph',
  render: () => (
    <Paragraph>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse aut beatae
      voluptatum nobis laboriosam repellat commodi? Nobis amet voluptatibus
      temporibus eveniet inventore nam, aperiam labore explicabo. Molestiae non
      corrupti tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Aliquam, quod. Odio, quia. Velit quo odit excepturi animi sapiente,
      sequi sit necessitatibus porro voluptatem temporibus, eos quasi quas
      laudantium vel asperiores!
    </Paragraph>
  ),
} satisfies Meta<typeof Paragraph>;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {},
};
