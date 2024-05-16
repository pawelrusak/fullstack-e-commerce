'use client';

import NextLink from 'next/link';
import styled from 'styled-components';
import qs from 'qs';
import { CardsSection, ProductCard } from '@e-shop/ui';
import { ArrowLongRightIcon } from '@e-shop/icons';
import { Product, SubCategory } from '@e-shop/types';
import { EN } from '@e-shop/i18n';
import { getCurrencyFormat } from '@e-shop/utils';

// @todo create ui component for this
const Link = styled(NextLink)`
  text-decoration: none;
`;

const CardsSectionBody = styled(CardsSection.Body)`
  display: flex;
  justify-content: space-between;
  overflow-y: scroll;
`;

type RelatedProductsSectionProps = {
  products: Product[];
  subCategorySlug: SubCategory['slug'];
};

export default function RelatedProductsSection({
  products,
  subCategorySlug,
}: RelatedProductsSectionProps) {
  const queryString = qs.stringify({
    'subCategory.slug': subCategorySlug,
  });

  const relatedProductUrl = `/products?${queryString}`;

  return (
    <CardsSection>
      <CardsSection.Header>
        <CardsSection.Title>{EN.RELATED_PRODUCTS.TITLE}</CardsSection.Title>
        <CardsSection.Link as={Link} href={relatedProductUrl}>
          {EN.RELATED_PRODUCTS.LINK} &nbsp;&nbsp;
          <ArrowLongRightIcon aria-hidden />
        </CardsSection.Link>
      </CardsSection.Header>

      <CardsSectionBody>
        {products.map((product) => (
          <Link key={product._id} href={`/products/${product.slug}`}>
            <ProductCard>
              <ProductCard.ThumbnailContainer>
                <ProductCard.Thumbnail
                  src={
                    // @todo use const for file path
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
      </CardsSectionBody>
    </CardsSection>
  );
}
