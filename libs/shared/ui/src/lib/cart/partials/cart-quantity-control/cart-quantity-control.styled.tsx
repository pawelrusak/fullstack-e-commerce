import styled, { css } from 'styled-components';
import { BaseQuantityControl } from '../../../base-quantity-control';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

const { tableProductQuantityInput, tableProductQuantityButton } =
  getToken('cart');

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityInput = styled(BaseQuantityControl.Input)`
  all: unset;
  appearance: textfield;
  display: block;
  padding: 0.8rem 0;
  width: 4rem;
  font-size: ${tableProductQuantityInput._base.fontSize};
  font-family: ${tableProductQuantityInput._base.fontFamily};
  line-height: ${tableProductQuantityInput._base.lineHeight};
  font-weight: ${tableProductQuantityInput._base.fontWeight};
  text-align: center;
  border-radius: 999px;
  color: ${tableProductQuantityInput._base.color};
  background-color: ${tableProductQuantityInput._base.backgroundColor};
  z-index: 10;
`;

const quantityButtonCss = css`
  all: unset;
  padding: 1rem;
  margin: 0.6rem;
  color: ${tableProductQuantityButton.default.initial.color};
  z-index: 10;

  cursor: pointer;

  &:hover:enabled,
  &:focus:enabled {
    color: ${tableProductQuantityButton.default.interact.color};
  }

  &:focus {
    outline: auto;
  }

  &:disabled {
    color: ${tableProductQuantityButton.default.disabled.color};
    cursor: not-allowed;
  }
`;

export const QuantityIncreaseButton = styled(
  BaseQuantityControl.IncreaseButton,
)`
  ${quantityButtonCss}
`;

export const QuantityDecreaseButton = styled(
  BaseQuantityControl.DecreaseButton,
)`
  ${quantityButtonCss}
`;
