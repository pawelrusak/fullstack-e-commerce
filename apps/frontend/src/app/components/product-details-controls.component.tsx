'use client';

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { QuantitySelection, Button } from '@e-shop/ui';
import { CardIcon } from '@e-shop/icons';
import { VisuallyHidden } from '@reach/visually-hidden';
import { EN } from '@e-shop/i18n';
import { Product } from '@e-shop/types';
import { useCartStore, withStore, CartItem } from '@e-shop/store';

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
`;

const CardButton = styled(Button)`
  padding: 0;
  height: 5.6rem;
  width: 5.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type ProductDetailsControlsProps = {
  product: Product;
};

const INITIAL_QUANTITY = 1;

// TODO rename to "ProductDetailsForm" and add 'form' tag
function ProductDetailsControls({ product }: ProductDetailsControlsProps) {
  const router = useRouter();
  const [quantity, setQuantity] =
    React.useState<CartItem['quantity']>(INITIAL_QUANTITY);
  const cartStore = useCartStore();

  const handleChangeQuantity = (quantity: CartItem['quantity']) => {
    setQuantity(quantity);
  };

  const handleClickBuyNow = (
    event: React.SyntheticEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    window.alert(`Buying ${quantity} product`);

    cartStore.addToCartOrUpdate({ product, quantity });

    router.push('/cart');
  };

  const handleClickAddToCart = (quantity: number) => {
    window.alert(`Added ${quantity} product to cart`);

    cartStore.addToCartOrUpdate({ product, quantity });

    window.alert(
      `Items "${cartStore.itemsCount}" with total price "${cartStore.totalPrice}" added to cart`,
    );
  };

  return (
    <ControlsContainer>
      <QuantitySelection
        onChangeQuantity={handleChangeQuantity}
        initialQuantity={INITIAL_QUANTITY}
        maxQuantity={product.stock}
      />
      <ButtonsWrapper>
        <Button
          type="submit"
          onClick={handleClickBuyNow}
          disabled={quantity === 0}
        >
          {EN.PRODUCT_DETAIL.BUYING_FORM.BUY_NOW}
        </Button>
        <CardButton
          variant="outline"
          type="button"
          onClick={() => handleClickAddToCart(quantity)}
          disabled={quantity === 0}
        >
          <CardIcon />
          <VisuallyHidden>
            {EN.PRODUCT_DETAIL.BUYING_FORM.ADD_TO_CART}
          </VisuallyHidden>
        </CardButton>
      </ButtonsWrapper>
    </ControlsContainer>
  );
}

export default withStore(ProductDetailsControls);
