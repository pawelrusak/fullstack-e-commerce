import React from 'react';

import { getValueInRange } from '@e-shop/utils';
import { Product } from '@e-shop/types';

export type Quantity = Product['stock'];

export type UseQuantityInRangeOptions = {
  max?: Quantity;
  onChangeQuantity?: (quantity: Quantity) => void;
};

export const useQuantityInRange = (
  initialQuantity: Quantity,
  { max, onChangeQuantity }: UseQuantityInRangeOptions,
) => {
  const [quantity, setQuantity] = React.useState<Quantity>(() =>
    getValueInRange(initialQuantity, { min: 0, max }),
  );

  React.useEffect(() => {
    setQuantity(() => getValueInRange(initialQuantity, { min: 0, max }));
  }, [initialQuantity, max]);

  const handleDecrease = () => {
    const updatedQuantity = getValueInRange(quantity - 1, {
      min: 0,
      max,
    });

    setQuantity(updatedQuantity);

    if (onChangeQuantity) {
      onChangeQuantity(updatedQuantity);
    }
  };

  const handleIncrease = () => {
    const updatedQuantity = getValueInRange(quantity + 1, {
      min: 0,
      max,
    });

    setQuantity(updatedQuantity);

    if (onChangeQuantity) {
      onChangeQuantity(updatedQuantity);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.valueAsNumber;
    let updatedQuantity = isNaN(inputValue) ? 0 : inputValue;

    updatedQuantity = getValueInRange(inputValue, {
      min: 0,
      max,
    });

    setQuantity(updatedQuantity);

    if (onChangeQuantity) {
      onChangeQuantity(updatedQuantity);
    }
  };

  return {
    quantity,
    setQuantity,
    handleDecrease,
    handleIncrease,
    handleInputChange,
  };
};
