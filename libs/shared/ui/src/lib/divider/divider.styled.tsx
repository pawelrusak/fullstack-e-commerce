'use client';

import styled from 'styled-components';
// TODO: Use adapter pattern for styled-system library
import { margin } from 'styled-system';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

import type { MarginProps } from 'styled-system';

export const Divider = styled.hr<MarginProps>`
  border: none;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${getToken('divider.base.palette.borderColor')};
  margin: 1.6rem 0;
  ${margin}
`;
