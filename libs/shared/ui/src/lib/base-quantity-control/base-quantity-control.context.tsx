'use client';

import * as React from 'react';
import {
  Quantity,
  UseQuantityInRangeOptions,
  useQuantityInRange,
} from './base-quantity-control.hooks';

type MaxQuantity = {
  maxQuantity?: Quantity;
};

type QuantityContextValue = {
  controlId: string;
} & ReturnType<typeof useQuantityInRange> &
  MaxQuantity;

const QuantityContext = React.createContext<QuantityContextValue | null>(null);

export type QuantityProviderProps = {
  initialQuantity?: Quantity;
  children: React.ReactNode;
  controlId?: string;
  maxQuantity?: Quantity;
} & Omit<UseQuantityInRangeOptions, 'max'> &
  MaxQuantity;

export const QuantityProvider = ({
  children,
  initialQuantity = 0,
  maxQuantity,
  onChangeQuantity,
  controlId,
}: QuantityProviderProps) => {
  const quantityValues = useQuantityInRange(initialQuantity, {
    max: maxQuantity,
    onChangeQuantity,
  });
  const reactControlId = React.useId();

  const value = {
    ...quantityValues,
    controlId: controlId || reactControlId,
    maxQuantity,
  };

  return (
    <QuantityContext.Provider value={value}>
      {children}
    </QuantityContext.Provider>
  );
};

export const useQuantity = () => {
  const context = React.useContext(QuantityContext);

  if (!context) {
    throw new Error('useQuantity must be used within a QuantityProvider');
  }

  return context;
};
