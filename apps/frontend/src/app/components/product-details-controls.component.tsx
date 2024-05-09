'use client';

import React from 'react';
import { QuantitySelection, Button } from '@e-shop/ui';
import { CardIcon } from '@e-shop/icons';
import { VisuallyHidden } from '@reach/visually-hidden';
import { EN } from '@e-shop/i18n';
import { Product } from '@e-shop/types';

import styled from 'styled-components';

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

export default function ProductDetailsControls({
  product,
}: ProductDetailsControlsProps) {
  const [quantity, setQuantity] = React.useState<number>(INITIAL_QUANTITY);

  const handleChangeQuantity = (quantity: number) => {
    setQuantity(quantity);
  };

  const handleClickBuyNow = (
    event: React.SyntheticEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    window.alert(`Buying ${quantity} product`);
  };

  const handleClickAddToCart = (quantity: number) => {
    window.alert(`Added ${quantity} product to cart`);
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
