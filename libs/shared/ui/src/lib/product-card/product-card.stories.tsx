import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './product-card.component';
import examplePlaceholder from './storybook-assets/example-placeholder.png';

export default {
  component: ProductCard,
  title: 'ProductCard',
} satisfies Meta<typeof ProductCard>;

type Story = StoryObj<typeof ProductCard>;

export const Complete: Story = {
  args: {},
  render: () => (
    <ProductCard>
      <ProductCard.ThumbnailContainer>
        <ProductCard.Thumbnail
          src={examplePlaceholder}
          width={236}
          height={214}
          alt="Picture of the author"
        />
        <ProductCard.ButtonsSection>
          <ProductCard.AddToCartButton />
          <ProductCard.AddToWishlistButton />
          <ProductCard.ShareButton />
        </ProductCard.ButtonsSection>
      </ProductCard.ThumbnailContainer>
      <ProductCard.PriceOffBox>50%</ProductCard.PriceOffBox>
      <ProductCard.Category>Phone</ProductCard.Category>
      <ProductCard.Header>
        <ProductCard.Title>
          Orange Watch 12 High Quality Health Sensor Bla Bla
        </ProductCard.Title>
      </ProductCard.Header>
      <ProductCard.PriceContainer>
        <ProductCard.CurrentPrice>$959.99</ProductCard.CurrentPrice>
        <ProductCard.PastPrice>$1,919.99</ProductCard.PastPrice>
      </ProductCard.PriceContainer>
    </ProductCard>
  ),
};
