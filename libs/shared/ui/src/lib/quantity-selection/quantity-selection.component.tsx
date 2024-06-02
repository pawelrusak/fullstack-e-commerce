import React from 'react';
import { EN } from '@e-shop/i18n';
import { Product } from '@e-shop/types';
import { PlusIcon, MinusIcon } from '@e-shop/icons';
import { VisuallyHidden } from '@reach/visually-hidden';
import * as Styled from './quantity-selection.styled';
import { useQuantityInRange } from './quantity-selection.hooks';
import { DATA_TEST_ID } from './quantity-selection.constants';

type Quantity = Product['stock'];

export type QuantitySelectionProps = {
  initialQuantity?: Quantity;
  maxQuantity?: Quantity;
  onChangeQuantity?: (quantity: Quantity) => void;
};

export function QuantitySelection({
  initialQuantity = 0,
  maxQuantity,
  onChangeQuantity,
}: QuantitySelectionProps) {
  const inputId = React.useId();
  const { quantity, handleDecrease, handleIncrease, handleInputChange } =
    useQuantityInRange(initialQuantity, {
      max: maxQuantity,
      onChangeQuantity,
    });

  return (
    <Styled.Fieldset>
      <VisuallyHidden as="legend">
        {EN.QUANTITY_SELECTION.FIELDSET}
      </VisuallyHidden>
      <Styled.Wrapper>
        <Styled.Button
          type="button"
          onClick={handleDecrease}
          aria-controls={inputId}
          data-testid={DATA_TEST_ID.DECREASE}
          disabled={quantity === 0}
        >
          <VisuallyHidden>{EN.QUANTITY_SELECTION.DECREASE}</VisuallyHidden>
          <MinusIcon aria-hidden />
        </Styled.Button>
        <Styled.Button
          type="button"
          // TODO remove this hart code color
          backgroundColor="#f4f4f4"
          order="3"
          onClick={handleIncrease}
          aria-controls={inputId}
          data-testid={DATA_TEST_ID.INCREASE}
          disabled={quantity === maxQuantity}
        >
          <VisuallyHidden>{EN.QUANTITY_SELECTION.INCREASE}</VisuallyHidden>
          <PlusIcon aria-hidden />
        </Styled.Button>
        <div>
          <VisuallyHidden as="label" htmlFor="quantity">
            {EN.QUANTITY_SELECTION.INPUT_LABEL}
          </VisuallyHidden>
          <Styled.Input
            type="number"
            name="quantity"
            id={inputId}
            value={quantity}
            onChange={handleInputChange}
            min={0}
            max={maxQuantity}
            data-testid={DATA_TEST_ID.INPUT}
          />
        </div>
      </Styled.Wrapper>
    </Styled.Fieldset>
  );
}

export default QuantitySelection;
