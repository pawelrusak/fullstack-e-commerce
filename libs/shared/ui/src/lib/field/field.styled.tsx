import styled, { css } from 'styled-components';
import * as polished from 'polished';
import { margin } from 'styled-system';
import type { MarginProps } from 'styled-system';

const ICON_WIDTH = `7.8rem`;

export const Input = styled.input`
  box-sizing: border-box;
  line-height: 3rem;
  font-size: 2rem;
  border: 0.1rem solid
    ${({ theme }) => polished.transparentize(0.75, theme.color.text)};
  padding: 2.4rem 3.1rem;
  border-radius: 1rem;
  width: 100%;
  outline: none;
  opacity: 0.75;

  &:focus {
    border-color: ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 0 0.3rem
      ${({ theme }) => polished.transparentize(0.4, theme.color.primary)};
  }

  &::placeholder {
    opacity: 0.4;
    line-height: 3rem;
    font-size: 2rem;
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
  }
`;

export type StyledFieldProps = MarginProps & {
  hasErrorColor?: boolean;
};

export const Container = styled.div<StyledFieldProps>`
  margin-bottom: 3.2rem;
  color: ${(props) => props.theme.color.text};
  width: 100%;
  ${margin}

  ${({ hasErrorColor }) =>
    hasErrorColor &&
    css`
      color: ${({ theme }) => theme.color.error};

      ${Input} {
        border-color: ${({ theme }) => theme.color.error};
        color: ${({ theme }) => theme.color.error};

        ::placeholder {
          color: ${({ theme }) => theme.color.error};
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
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ${({ theme, isRequired }) =>
    isRequired &&
    css`
      &::after {
        content: ' *';
        color: ${theme.color.primary};
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
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

export const Help = styled.small`
  ${helpCss}
`;

export const Error = styled.strong<MarginProps>`
  ${helpCss}
  color: ${({ theme }) => theme.color.error};

  ${margin}
`;
