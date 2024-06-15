'use client';

import NextLink from 'next/link';
import styled from 'styled-components';
import { CardsSection, ProductCard, ProductsCarousel } from '@e-shop/ui';
import { ArrowLongRightIcon } from '@e-shop/icons';
import { Product } from '@e-shop/types';
import { EN } from '@e-shop/i18n';
import { getCurrencyFormat } from '@e-shop/utils';
import { useCartStore, withStore } from '@e-shop/store';

// TODO create ui component for this
const Link = styled(NextLink)`
  text-decoration: none;
`;

type FeaturedProductsSectionProps = {
  products: Product[];
};

function FeaturedProductsSection({ products }: FeaturedProductsSectionProps) {
  const cartStore = useCartStore();

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
    <CardsSection mb={0}>
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
        </ProductsCarousel>
      </CardsSection.Body>
    </CardsSection>
  );
}

export default withStore(FeaturedProductsSection);
