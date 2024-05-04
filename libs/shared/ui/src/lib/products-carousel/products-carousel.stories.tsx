import type { Meta, StoryObj } from '@storybook/react';
import { ProductsCarousel } from './products-carousel.component';
import { ProductCard } from '../product-card';
import { products } from '@e-shop/fixtures';
import { getCurrencyFormat } from '@e-shop/utils';

import image1 from './storybook-assets/placeholder-1.png';
import image2 from './storybook-assets/placeholder-2.png';
import image3 from './storybook-assets/placeholder-3.png';
import image4 from './storybook-assets/placeholder-4.png';
import image5 from './storybook-assets/placeholder-5.png';
import image6 from './storybook-assets/placeholder-6.png';
import image7 from './storybook-assets/placeholder-7.png';
import image8 from './storybook-assets/placeholder-8.png';
import image9 from './storybook-assets/placeholder-9.png';
import image10 from './storybook-assets/placeholder-10.png';

const images = {
  '5f43ba27320000271cee0001': image1,
  '5f43ba27320000271cee0002': image2,
  '5f43ba27320000271cee0003': image3,
  '5f43ba27320000271cee0004': image4,
  '5f43ba27320000271cee0005': image5,
  '5f43ba27320000271cee0006': image6,
  '5f43ba27320000271cee0007': image7,
  '5f43ba27320000271cee0008': image8,
  '5f43ba27320000271cee0009': image9,
  '5f43ba27320000271cee0010': image10,
};

const getProducts = (length = 10) => products.slice(0, length);

export default {
  component: ProductsCarousel,
  title: 'ProductsCarousel',
  render: (args) => {
    const products = getProducts();

    return (
      <ProductsCarousel {...args}>
        {products.map((product) => (
          <ProductCard key={product._id}>
            <ProductCard.ThumbnailContainer>
              <ProductCard.Thumbnail
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                src={(images[product._id] as string) || image1}
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
            <ProductCard.Category>
              {product.subCategory.name}
            </ProductCard.Category>
            <ProductCard.Header>
              <ProductCard.Title>{product.name}</ProductCard.Title>
            </ProductCard.Header>
            <ProductCard.PriceContainer>
              <ProductCard.CurrentPrice>
                {getCurrencyFormat(product.price)}
              </ProductCard.CurrentPrice>
            </ProductCard.PriceContainer>
          </ProductCard>
        ))}
      </ProductsCarousel>
    );
  },
} satisfies Meta<typeof ProductsCarousel>;

type Story = StoryObj<typeof ProductsCarousel>;

export const Default: Story = {
  args: {},
};
