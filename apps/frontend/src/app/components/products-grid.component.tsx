'use client';

import { Product } from '@e-shop/types';

import NextLink from 'next/link';
import styled from 'styled-components';
import { CardsSection as CardsSectionEl, ProductCard } from '@e-shop/ui';
import { EN } from '@e-shop/i18n';
import { getCurrencyFormat } from '@e-shop/utils';

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
`;

const CardsSection = styled(CardsSectionEl)`
  margin-top: 3.2rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    margin-top: 6.4rem;
    margin-bottom: 0;
  }
`;

const Link = styled(NextLink)`
  text-decoration: none;
`;

type ProductsGridProps = {
  products: Product[];
};

export default function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <CardsSection>
      <CardsSection.Header>
        <CardsSection.Title>{EN.PRODUCTS_GRID.TITLE}</CardsSection.Title>
      </CardsSection.Header>

      <CardsSection.Body>
        <CardsGrid>
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
        </CardsGrid>
      </CardsSection.Body>
    </CardsSection>
  );
}
