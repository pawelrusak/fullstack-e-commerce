import styled, { css } from 'styled-components';
import { margin } from 'styled-system';

import { getComponentThemeToken as getToken } from '@e-shop/theme';
import type { MarginProps } from 'styled-system';

const {
  root: rootToken,
  controlInput: controlInputToken,
  controlInputPlaceholder: controlInputPlaceholderToken,
  errorText: errorTextToken,
  helpText: helpTextToken,
  label: labelToken,
  labelAsterisk: labelAsteriskToken,
} = getToken('field');

const ICON_WIDTH = `7.8rem`;

export const Input = styled.input`
  box-sizing: border-box;
  line-height: 3rem;
  font-size: 2rem;
  border: 0.1rem solid ${controlInputToken.default.initial.borderColor};
  color: ${controlInputToken.default.initial.color};
  box-shadow: ${controlInputToken.default.initial.boxShadow};
  padding: 2.4rem 3.1rem;
  border-radius: 1rem;
  width: 100%;
  outline: none;
  opacity: 0.75;

  &:focus {
    border-color: ${controlInputToken.default.focus.borderColor};
    box-shadow: ${controlInputToken.default.focus.boxShadow};
    color: ${controlInputToken.default.focus.color};
  }

  &::placeholder {
    opacity: 0.4;
    line-height: 3rem;
    font-size: 2rem;
    color: ${controlInputPlaceholderToken.default.initial.color};
    font-family: ${controlInputPlaceholderToken._base.fontFamily};
    font-weight: ${controlInputPlaceholderToken._base.fontWeight};
  }
`;

export type StyledFieldProps = MarginProps & {
  hasErrorColor?: boolean;
};

export const Root = styled.div<StyledFieldProps>`
  margin-bottom: 3.2rem;
  color: ${rootToken.default.initial.color};
  width: 100%;
  ${margin}

  ${({ hasErrorColor }) =>
    hasErrorColor &&
    css`
      color: ${rootToken.default.invalid.color};

      ${Input} {
        border-color: ${controlInputToken.default.invalid.borderColor};
        color: ${controlInputToken.default.invalid.color};
        box-shadow: ${controlInputToken.default.invalid.boxShadow};

        &::placeholder {
          color: ${controlInputPlaceholderToken.default.invalid.color};
        }
      }
    `}
`;

export type StyledLabelProps = {
  isRequired?: boolean;
};

export const Label = styled.label<StyledLabelProps>`
  display: inline-block;
  line-height: 3rem;
  font-size: 2rem;
  margin-bottom: 1.2rem;
  font-weight: ${labelToken._base.fontWeight};

  ${({ isRequired }) =>
    isRequired &&
    css`
      &::after {
        content: ' *';
        color: ${labelAsteriskToken._base.color};
      }
    `}
`;

export type StyledControlProps = {
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
};

const controlBaseCss = css`
  position: relative;
`;

export const Control = styled.div<StyledControlProps>`
  width: 100%;

  ${({ hasLeftIcon }) =>
    hasLeftIcon &&
    css`
      ${controlBaseCss}

      ${Input} {
        padding-left: ${ICON_WIDTH};
      }
    `}

  ${({ hasRightIcon }) =>
    hasRightIcon &&
    css`
      ${controlBaseCss}

      ${Input} {
        padding-right: ${ICON_WIDTH};
      }
    `}
`;

export type StyledControlIconProps = {
  isRight?: boolean;
  isLeft?: boolean;
};

export const ControlIcon = styled.span<StyledControlIconProps>`
  position: absolute;
  display: flex;
  width: ${ICON_WIDTH};
  height: 100%;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;

  ${({ isRight }) =>
    isRight &&
    css`
      right: 0;
    `}

  ${({ isLeft }) =>
    isLeft &&
    css`
      left: 0;
    `}
`;

const helpCss = css`
  display: inline-block;
  margin-top: 0.8rem;
  font-size: ${helpTextToken._base.fontSize};
  line-height: ${helpTextToken._base.lineHeight};
`;

export const Help = styled.small`
  ${helpCss}
`;

export const Error = styled.strong<MarginProps>`
  ${helpCss}
  color: ${errorTextToken._base.color};

  ${margin}
`;
