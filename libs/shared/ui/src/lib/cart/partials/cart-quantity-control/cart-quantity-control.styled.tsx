import styled, { css } from 'styled-components';
import { BaseQuantityControl } from '../../../base-quantity-control';

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
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
  border-radius: 999px;
  background-color: #f4f4f4;
  z-index: 10;
`;

const quantityButtonCss = css`
  all: unset;
  padding: 1rem;
  margin: 0.6rem;
  color: ${({ theme }) => theme.color.text};
  z-index: 10;

  cursor: pointer;

  &:hover:enabled,
  &:focus:enabled {
    color: ${({ theme }) => theme.color.primary};
  }

  &:focus {
    outline: auto;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// TODO improve styles of a11y
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
