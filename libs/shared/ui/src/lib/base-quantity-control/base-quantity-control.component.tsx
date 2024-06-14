'use client';

import React from 'react';
import {
  QuantityProvider,
  QuantityProviderProps,
  useQuantity,
} from './base-quantity-control.context';
import * as Styled from './base-quantity-control.styled';

export type BaseQuantityControlProps = QuantityProviderProps;

export function BaseQuantityControl(props: BaseQuantityControlProps) {
  return <QuantityProvider {...props} />;
}

type BaseQuantityControlButton = React.ComponentPropsWithoutRef<'button'>;

export type BaseQuantityControlIncreaseButtonProps = BaseQuantityControlButton;

function BaseQuantityControlIncreaseButton(
  props: BaseQuantityControlIncreaseButtonProps,
) {
  const { handleIncrease, quantity, controlId, maxQuantity } = useQuantity();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleIncrease();
    props.onClick && props.onClick(event);
  };

  return (
    <button
      onClick={handleClick}
      aria-controls={props['aria-controls'] || controlId}
      disabled={props.disabled || quantity === maxQuantity}
      {...props}
    />
  );
}

export type BaseQuantityControlDecreaseButtonProps = BaseQuantityControlButton;

function BaseQuantityControlDecreaseButton(
  props: BaseQuantityControlDecreaseButtonProps,
) {
  const { handleDecrease, quantity, controlId } = useQuantity();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleDecrease();
    props.onClick && props.onClick(event);
  };

  return (
    <button
      onClick={handleClick}
      aria-controls={props['aria-controls'] || controlId}
      disabled={props.disabled || quantity === 0}
      {...props}
    />
  );
}

export type BaseQuantityControlInputProps =
  React.ComponentPropsWithoutRef<'input'>;

function BaseQuantityControlInput({
  type = 'number',
  name = 'quantity',
  ...props
}: BaseQuantityControlInputProps) {
  const { quantity, handleInputChange, maxQuantity, controlId } = useQuantity();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event);
    props.onChange && props.onChange(event);
  };

  return (
    <Styled.Input
      type={type}
      name={name}
      id={props.id || controlId}
      value={props.value || quantity}
      onChange={handleChange}
      min={props.min || 0}
      max={props.max || maxQuantity}
      {...props}
    />
  );
}

BaseQuantityControl.IncreaseButton = BaseQuantityControlIncreaseButton;
BaseQuantityControl.DecreaseButton = BaseQuantityControlDecreaseButton;
BaseQuantityControl.Input = BaseQuantityControlInput;

export default BaseQuantityControl;
