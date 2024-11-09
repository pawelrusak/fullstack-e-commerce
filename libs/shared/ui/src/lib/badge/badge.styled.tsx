'use client';

import styled from 'styled-components';

import { getComponentThemeToken as getToken } from '@e-shop/theme';

const { root: rootToken } = getToken('badge');

export const RootStrong = styled.strong`
  background: ${rootToken._base.backgroundColor};
  color: ${rootToken._base.color};
  font-family: ${rootToken._base.fontFamily};
  font-weight: ${rootToken._base.fontWeight};
  line-height: ${rootToken._base.lineHeight};
  font-size: ${rootToken._base.fontSize};
  padding: 0.7rem 2rem;
  border-radius: 0.5rem;
`;
