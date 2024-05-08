'use client';

import React from 'react';
import { QuantitySelection, Button } from '@e-shop/ui';
import { CardIcon } from '@e-shop/icons';
import { VisuallyHidden } from '@reach/visually-hidden';
import { EN } from '@e-shop/i18n';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export default function ProductDetailsControls() {
  const [quantity, setQuantity] = React.useState<number>(0);

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
    <Container>
      <QuantitySelection onChangeQuantity={handleChangeQuantity} />
      <ButtonsWrapper>
        <Button type="submit" onClick={handleClickBuyNow}>
          {EN.PRODUCT_DETAIL.BUYING_FORM.BUY_NOW}
        </Button>
        <CardButton
          variant="outline"
          type="button"
          onClick={() => handleClickAddToCart(quantity)}
        >
          <CardIcon />
          <VisuallyHidden>
            {EN.PRODUCT_DETAIL.BUYING_FORM.ADD_TO_CART}
          </VisuallyHidden>
        </CardButton>
      </ButtonsWrapper>
    </Container>
  );
}
