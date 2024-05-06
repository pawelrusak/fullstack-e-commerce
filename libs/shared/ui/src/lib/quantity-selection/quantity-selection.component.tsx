import React from 'react';
import { EN } from '@e-shop/i18n';
import { Product } from '@e-shop/types';
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
  const [quantity, setQuantity] = React.useState<Quantity>(() => {
    const quantity = Math.max(0, initialQuantity);
    if (maxQuantity && 0 < maxQuantity) {
      return Math.min(maxQuantity, quantity);
    }
    return quantity;
  });

  const increaseButtonRef = React.useRef<HTMLButtonElement>(null);
  const decreaseButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (initialQuantity === 0 && decreaseButtonRef.current) {
      decreaseButtonRef.current.disabled = true;
    }

    if (
      maxQuantity &&
      initialQuantity === maxQuantity &&
      increaseButtonRef.current
    ) {
      increaseButtonRef.current.disabled = true;
    }

    setQuantity(initialQuantity);
  }, [initialQuantity, maxQuantity]);

  const handleClickDecrease = () => {
    setQuantity((prevQuantity) => {
      const currentQuantity = Math.max(0, prevQuantity - 1);

      if (onChangeQuantity) {
        onChangeQuantity(currentQuantity);
      }

      return currentQuantity;
    });

    if (increaseButtonRef.current) {
      increaseButtonRef.current.disabled = false;
    }

    if (quantity === 0 && decreaseButtonRef.current) {
      decreaseButtonRef.current.disabled = true;
    }
  };

  const handleClickIncrease = () => {
    setQuantity((prevQuantity) => {
      if (maxQuantity) {
        return Math.min(maxQuantity, prevQuantity + 1);
      }

      if (onChangeQuantity) {
        onChangeQuantity(prevQuantity + 1);
      }

      return prevQuantity + 1;
    });

    if (quantity === maxQuantity && increaseButtonRef.current) {
      increaseButtonRef.current.disabled = true;
    }

    if (decreaseButtonRef.current) {
      decreaseButtonRef.current.disabled = false;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.valueAsNumber;

    if (
      inputValue === 0 &&
      decreaseButtonRef.current &&
      increaseButtonRef.current
    ) {
      decreaseButtonRef.current.disabled = true;
      increaseButtonRef.current.disabled = false;
    }

    if (
      maxQuantity &&
      inputValue === maxQuantity &&
      increaseButtonRef.current &&
      decreaseButtonRef.current
    ) {
      increaseButtonRef.current.disabled = true;
      decreaseButtonRef.current.disabled = false;
    }

    // @todo create a function to return a value from a specified range
    let inputQuantity = Math.max(0, inputValue);

    if (maxQuantity && 0 < maxQuantity) {
      inputQuantity = Math.min(maxQuantity, inputQuantity);
    }

    setQuantity(inputQuantity);

    if (onChangeQuantity) {
      inputQuantity = isNaN(inputQuantity) ? initialQuantity : inputQuantity;
      onChangeQuantity(inputQuantity);
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
          ref={decreaseButtonRef}
          aria-controls={inputId}
          data-testid={DATA_TEST_ID.DECREASE}
        >
          <VisuallyHidden>{EN.QUANTITY_SELECTION.DECREASE}</VisuallyHidden>
          <MinusIcon aria-hidden />
        </Styled.Button>
        <Styled.Button
          type="button"
          backgroundColor="#f4f4f4"
          order="3"
          onClick={handleClickIncrease}
          ref={increaseButtonRef}
          aria-controls={inputId}
          data-testid={DATA_TEST_ID.INCREASE}
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
