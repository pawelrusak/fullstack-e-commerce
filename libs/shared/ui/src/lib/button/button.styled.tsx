import styled, { css } from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';
import {
  getPalette,
  BUTTON_STATE,
  BUTTON_VARIANT,
  BUTTON_COLOR_VARIANT,
} from './button.utils';

import type { ButtonProps } from './button.utils';

export type StyledButtonProps = ButtonProps;

export const Button = styled.button<StyledButtonProps>`
  all: unset;
  display: inline-block;
  box-sizing: border-box;
  font-family: ${getToken('button.base.fontFamily')};
  font-weight: ${getToken('button.base.fontWeight')};
  font-size: 2rem;
  padding: 1.5rem 3.9rem;
  line-height: 3rem;
  border-radius: 1rem;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  ${({ colorVariant = BUTTON_COLOR_VARIANT.PRIMARY }) =>
    getPalette({
      colorVariant,
      variant: BUTTON_VARIANT.SOLID,
      state: BUTTON_STATE.BASE,
    })}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      display: flex;
      width: 100%;
      justify-content: center;
    `}

  &:is(:hover, :focus) {
    ${({ colorVariant = BUTTON_COLOR_VARIANT.PRIMARY }) =>
      getPalette({
        colorVariant,
        variant: BUTTON_VARIANT.SOLID,
        state: BUTTON_STATE.INTERACT,
      })}
  }

  &:focus {
    outline: auto;
  }

  &:disabled,
  &[aria-disabled='true'] {
    cursor: default;
    ${({ colorVariant = BUTTON_COLOR_VARIANT.PRIMARY }) =>
      getPalette({
        colorVariant,
        variant: BUTTON_VARIANT.SOLID,
        state: BUTTON_STATE.DISABLED,
      })}
    pointer-events: none;
  }

  ${({ variant, colorVariant = BUTTON_COLOR_VARIANT.PRIMARY }) =>
    variant === BUTTON_VARIANT.OUTLINE &&
    css`
      ${getPalette({
        colorVariant,
        variant,
        state: BUTTON_STATE.BASE,
      })};

      $:is(:hover, :focus) {
        ${getPalette({
          colorVariant,
          variant,
          state: BUTTON_STATE.INTERACT,
        })}
      }

      &:disabled,
      &[aria-disabled='true'] {
        ${getPalette({
          colorVariant,
          variant,
          state: BUTTON_STATE.DISABLED,
        })}
        pointer-events: none;
      }
    `}
`;
