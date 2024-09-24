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
  border: 1px solid ${rootToken.default.initial.borderColor};
  background-color: ${rootToken.default.initial.backgroundColor};
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &[aria-checked='true'] {
    border-color: ${rootToken.default.checked.borderColor};
    background-color: ${rootToken.default.checked.backgroundColor};
  }

  &:hover,
  &:focus {
    border-color: ${rootToken.default.interact.borderColor};
    background-color: ${rootToken.default.interact.backgroundColor};
  }

  &:focus {
    outline: auto;
  }
`;

export const Indicator = styled(Checkbox.Indicator)`
  line-height: 0.8rem;
  color: ${indicatorToken._base.color};
`;
