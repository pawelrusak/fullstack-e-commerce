import type { Meta, StoryObj } from '@storybook/react';
import { CardsSection } from './cards-section.component';
import { ArrowLongRightIcon } from '@e-shop/icons';
import { StripeInner } from '../../.././.storybook/utils-components';

export default {
  component: CardsSection,
  title: 'CardsSection',
  render: () => (
    <CardsSection>
      <CardsSection.Header>
        <CardsSection.Title>Featured Products</CardsSection.Title>
        <CardsSection.Link href="#">
          View All &nbsp;&nbsp;
          <ArrowLongRightIcon aria-hidden />
        </CardsSection.Link>
      </CardsSection.Header>
      <CardsSection.Body>
        <StripeInner>Card Section Body</StripeInner>
      </CardsSection.Body>
    </CardsSection>
  ),
} satisfies Meta<typeof CardsSection>;

type Story = StoryObj<typeof CardsSection>;

export const Default: Story = {
  args: {},
};
