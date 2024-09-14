'use client';

import styled from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

// TODO: add margin from styled-system
export const Divider = styled.hr`
  border: none;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${getToken('divider.base.palette.borderColor')};
  margin: 1.6rem 0;
`;
