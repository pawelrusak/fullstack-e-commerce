import type { Meta, StoryObj } from '@storybook/react';
import { LayoutWrapper } from './layout-wrapper.component';
import { StripeInner, Container } from '../../.././.storybook/utils-components';

export default {
  component: LayoutWrapper,
  title: 'LayoutWrapper',
  render: (args) => (
    <Container>
      <LayoutWrapper {...args}>
        <StripeInner>
          <p>The stripes are only used to display the inner size of the item</p>
        </StripeInner>
      </LayoutWrapper>
    </Container>
  ),
} satisfies Meta<typeof LayoutWrapper>;

type Story = StoryObj<typeof LayoutWrapper>;

export const Default: Story = {
  args: {},
};
