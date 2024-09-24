'use client';

import styled from 'styled-components';
// TODO: Use adapter pattern for styled-system library
import { margin } from 'styled-system';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

import type { MarginProps } from 'styled-system';

const { root: rootToken } = getToken('divider');

export const Divider = styled.hr<MarginProps>`
  border: none;
  border-top: 1px solid ${rootToken._base.borderColor};
  margin: 1.6rem 0;
  ${margin}
`;
