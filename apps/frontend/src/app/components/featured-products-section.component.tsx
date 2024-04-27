'use client';

import {
  CardsSection,
  ArrowLongRightIcon,
  ProductCard,
  ProductsCarousel,
} from '@e-shop/ui';
import { Product } from '@e-shop/types';
import { EN } from '@e-shop/i18n';

type FeaturedProductsSectionProps = {
  products: Product[];
};

export default function FeaturedProductsSection({
  products,
}: FeaturedProductsSectionProps) {
  return (
    <CardsSection>
      <CardsSection.Header>
        <CardsSection.Title>{EN.FEATURED_PRODUCTS.TITLE}</CardsSection.Title>
        <CardsSection.Link href="#">
          {EN.FEATURED_PRODUCTS.LINK} &nbsp;&nbsp;
          <ArrowLongRightIcon aria-hidden />
        </CardsSection.Link>
      </CardsSection.Header>

      <CardsSection.Body>
        <ProductsCarousel>
          {products.map((product) => (
            <ProductCard key={product._id}>
              <ProductCard.ThumbnailContainer>
                <ProductCard.Thumbnail
                  src={
                    product.thumbnail || '/assets/images/placeholder-view.svg'
                  }
                  width={236}
                  height={214}
                  alt=""
                />
              </ProductCard.ThumbnailContainer>
              <ProductCard.Category>
                {product.subCategory.name}
              </ProductCard.Category>
              <ProductCard.Header>
                <ProductCard.Title>{product.name}</ProductCard.Title>
              </ProductCard.Header>
              <ProductCard.PriceContainer>
                <ProductCard.CurrentPrice>
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(product.price)}
                </ProductCard.CurrentPrice>
              </ProductCard.PriceContainer>
            </ProductCard>
          ))}
        </ProductsCarousel>
      </CardsSection.Body>
    </CardsSection>
  );
}
