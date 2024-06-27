import styled, { css } from 'styled-components';
import * as polished from 'polished';
import { theme } from '@e-shop/theme';

export type ButtonProps = {
  variant?: 'outline' | 'solid';
  colorVariant?: 'primary' | 'secondary';
  fullWidth?: boolean;
};

const DISABLED_COLOR = '#cbcbcb';

type ColorVariant = Record<Required<ButtonProps>['colorVariant'], string>;

const solidBackgroundColors: ColorVariant = {
  primary: theme.color.primary,
  secondary: theme.color.text,
};

const solidBorderColors: ColorVariant = {
  primary: theme.color.primary,
  secondary: theme.color.text,
};

const outlineFontColors: ColorVariant = {
  primary: theme.color.primary,
  secondary: theme.color.text,
};

export const Button = styled.button<ButtonProps>`
  all: unset;
  display: inline-block;
  box-sizing: border-box;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 1.5rem 3.9rem;
  line-height: 3rem;
  font-size: 2rem;
  border-radius: 1rem;
  cursor: pointer;
  background: ${({ colorVariant = 'primary' }) =>
    solidBackgroundColors[colorVariant]};
  color: ${({ theme }) => theme.color.background};
  border: 1px solid
    ${({ colorVariant = 'primary' }) => solidBorderColors[colorVariant]};

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      display: flex;
      width: 100%;
      justify-content: center;
    `}

  &:hover,
  &:focus {
    background: ${({ colorVariant = 'primary' }) =>
      polished.darken(0.1, solidBackgroundColors[colorVariant])};
    color: ${({ theme }) => theme.color.background};
    border: 1px solid
      ${({ colorVariant = 'primary' }) =>
        polished.darken(0.1, solidBorderColors[colorVariant])};
  }

  &:focus {
    outline: auto;
  }

  &:disabled,
  &[aria-disabled='true'] {
    cursor: default;
    background: ${DISABLED_COLOR};
    border-color: ${DISABLED_COLOR};
    pointer-events: none;
  }

  ${({ variant = 'solid', colorVariant = 'primary' }) =>
    variant === 'outline' &&
    css`
      background: ${({ theme }) => theme.color.background};
      color: ${outlineFontColors[colorVariant]};

      &:disabled,
      &[aria-disabled='true'] {
        color: ${DISABLED_COLOR};
        background: ${({ theme }) => theme.color.background};
        pointer-events: none;
      }
    `}
`;
