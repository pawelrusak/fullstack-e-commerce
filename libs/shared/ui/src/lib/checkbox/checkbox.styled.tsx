'use client';

import styled from 'styled-components';
import * as Checkbox from '@radix-ui/react-checkbox';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

export const Wrapper = styled(Checkbox.Root)`
  display: flex;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.2rem;
  border-width: 1px;
  border-style: solid;
  ${getToken('checkbox.root.variant.default.state.default.palette')};
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &[aria-checked='true'] {
    ${getToken('checkbox.root.variant.default.state.checked.palette')};
  }

  &:is(:hover, :focus) {
    ${getToken('checkbox.root.variant.default.state.interact.palette')};
  }

  &:focus {
    outline: auto;
  }
`;

export const Indicator = styled(Checkbox.Indicator)`
  line-height: 0.8rem;
  ${getToken('checkbox.indicator.base.palette')};
`;
