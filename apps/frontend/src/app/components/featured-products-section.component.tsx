'use client';

import NextLink from 'next/link';
import styled from 'styled-components';
import { CardsSection, ProductCard, ProductsCarousel } from '@e-shop/ui';
import { ArrowLongRightIcon } from '@e-shop/icons';
import { Product } from '@e-shop/types';
import { EN } from '@e-shop/i18n';
import { getCurrencyFormat } from '@e-shop/utils';

// @todo create ui component for this
const Link = styled(NextLink)`
  text-decoration: none;
`;

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
        <CardsSection.Link as={Link} href="/products">
          {EN.FEATURED_PRODUCTS.LINK} &nbsp;&nbsp;
          <ArrowLongRightIcon aria-hidden />
        </CardsSection.Link>
      </CardsSection.Header>

      <CardsSection.Body>
        <ProductsCarousel>
          {products.map((product) => (
            <Link key={product._id} href={`/products/${product.slug}`}>
              <ProductCard>
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
                    {getCurrencyFormat(product.price)}
                  </ProductCard.CurrentPrice>
                </ProductCard.PriceContainer>
              </ProductCard>
            </Link>
          ))}
        </ProductsCarousel>
      </CardsSection.Body>
    </CardsSection>
  );
}
