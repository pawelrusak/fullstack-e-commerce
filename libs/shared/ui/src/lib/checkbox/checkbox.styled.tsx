'use client';

import styled from 'styled-components';
import * as Checkbox from '@radix-ui/react-checkbox';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

const { root: rootToken, indicator: indicatorToken } = getToken('checkbox');

export const Root = styled(Checkbox.Root)`
  display: flex;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.2rem;
  border: 1px solid
    ${rootToken.variant.default.state.default.palette.borderColor};
  background-color: ${rootToken.variant.default.state.default.palette
    .backgroundColor};
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &[aria-checked='true'] {
    background-color: ${rootToken.variant.default.state.checked.palette
      .backgroundColor};
    border-color: ${rootToken.variant.default.state.checked.palette
      .borderColor};
  }

  &:hover,
  &:focus {
    background-color: ${rootToken.variant.default.state.interact.palette
      .backgroundColor};
    border-color: ${rootToken.variant.default.state.interact.palette
      .borderColor};
  }

  &:focus {
    outline: auto;
  }
`;

export const Indicator = styled(Checkbox.Indicator)`
  line-height: 0.8rem;
  color: ${indicatorToken.base.palette.color};
`;
