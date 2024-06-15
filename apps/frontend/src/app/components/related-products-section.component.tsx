'use client';

import NextLink from 'next/link';
import styled from 'styled-components';
import qs from 'qs';
import { CardsSection, ProductCard } from '@e-shop/ui';
import { ArrowLongRightIcon } from '@e-shop/icons';
import { Product, SubCategory } from '@e-shop/types';
import { EN } from '@e-shop/i18n';
import { getCurrencyFormat } from '@e-shop/utils';
import { useCartStore, withStore } from '@e-shop/store';

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
  categorySlug: SubCategory['category']['slug'];
};

function RelatedProductsSection({
  products,
  categorySlug,
}: RelatedProductsSectionProps) {
  const cartStore = useCartStore();

  const queryString = qs.stringify({
    'subCategory.category.slug': categorySlug,
    // TODO add typescript types
  });

  const relatedProductUrl = `/products?${queryString}`;

  const handleAddToCart = (
    event: React.MouseEvent<HTMLButtonElement>,
    product: Product,
  ) => {
    event.preventDefault();
    cartStore.addToCartOrUpdate({ product, quantity: 1 });

    // TODO show toast or open modal
    window.alert(`Product "${product.name}" added to cart`);
  };

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
                    // TODO use const for file path
                    product.thumbnail || '/assets/images/placeholder-view.svg'
                  }
                  width={236}
                  height={214}
                  alt=""
                />
                <ProductCard.ButtonsSection>
                  <ProductCard.AddToCartButton
                    onClick={(event) => handleAddToCart(event, product)}
                  />
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
          </Link>
        ))}
      </CardsSectionBody>
    </CardsSection>
  );
}

export default withStore(RelatedProductsSection);
