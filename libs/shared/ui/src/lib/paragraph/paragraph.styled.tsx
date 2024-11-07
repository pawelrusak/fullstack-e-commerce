'use client';

import styled from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

const { root: rootToken } = getToken('paragraph');

export const RootParagraph = styled.p`
  text-align: justify;
  color: ${rootToken._base.color};
  font-weight: ${rootToken._base.fontWeight};
  font-family: ${rootToken._base.fontFamily};
  font-size: ${rootToken._base.fontSize};
  line-height: ${rootToken._base.lineHeight};
`;
