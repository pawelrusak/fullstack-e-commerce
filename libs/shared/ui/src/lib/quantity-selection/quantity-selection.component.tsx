import React from 'react';
import { EN } from '@e-shop/i18n';
import { Product } from '@e-shop/types';
import { getValueInRange } from '@e-shop/utils';
import { PlusIcon, MinusIcon } from '@e-shop/icons';
import { VisuallyHidden } from '@reach/visually-hidden';
import * as Styled from './quantity-selection.styled';

type Quantity = Product['stock'];

export type QuantitySelectionProps = {
  initialQuantity?: Quantity;
  maxQuantity?: Quantity;
  onChangeQuantity?: (quantity: Quantity) => void;
};

export const DATA_TEST_ID = {
  DECREASE: 'quantity-selection-decrease',
  INCREASE: 'quantity-selection-increase',
  INPUT: 'quantity-selection-input',
};

export function QuantitySelection({
  initialQuantity = 0,
  maxQuantity,
  onChangeQuantity,
}: QuantitySelectionProps) {
  const inputId = React.useId();
  const [quantity, setQuantity] = React.useState<Quantity>(() =>
    getValueInRange(initialQuantity, { min: 0, max: maxQuantity })
  );

  React.useEffect(() => {
    setQuantity(() =>
      getValueInRange(initialQuantity, { min: 0, max: maxQuantity })
    );
  }, [initialQuantity, maxQuantity]);

  const handleClickDecrease = () => {
    const updatedQuantity = getValueInRange(quantity - 1, {
      min: 0,
      max: maxQuantity,
    });

    setQuantity(updatedQuantity);

    if (onChangeQuantity) {
      onChangeQuantity(updatedQuantity);
    }
  };

  const handleClickIncrease = () => {
    const updatedQuantity = getValueInRange(quantity + 1, {
      min: 0,
      max: maxQuantity,
    });

    setQuantity(updatedQuantity);

    if (onChangeQuantity) {
      onChangeQuantity(updatedQuantity);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.valueAsNumber;
    let updatedQuantity = isNaN(inputValue) ? 0 : inputValue;

    updatedQuantity = getValueInRange(inputValue, {
      min: 0,
      max: maxQuantity,
    });

    setQuantity(updatedQuantity);

    if (onChangeQuantity) {
      onChangeQuantity(updatedQuantity);
    }
  };

  return (
    <Styled.Fieldset>
      <VisuallyHidden as="legend">
        {EN.QUANTITY_SELECTION.FIELDSET}
      </VisuallyHidden>
      <Styled.Wrapper>
        <Styled.Button
          type="button"
          onClick={handleClickDecrease}
          aria-controls={inputId}
          data-testid={DATA_TEST_ID.DECREASE}
          disabled={quantity === 0}
        >
          <VisuallyHidden>{EN.QUANTITY_SELECTION.DECREASE}</VisuallyHidden>
          <MinusIcon aria-hidden />
        </Styled.Button>
        <Styled.Button
          type="button"
          backgroundColor="#f4f4f4"
          order="3"
          onClick={handleClickIncrease}
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
            onChange={handleChange}
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
