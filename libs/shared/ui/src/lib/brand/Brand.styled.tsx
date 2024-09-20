'use client';

import styled from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

import BrandSvgIcon from './brand.svg';

export const Root = styled.span`
  display: inline-block;
  height: 4rem;
  padding-top: 0.7rem;
`;

export type BrandSvgProps = Readonly<{
  textColor?: string;
  dotColor?: string;
}>;

export const BrandSvg = styled(BrandSvgIcon)<BrandSvgProps>`
  [data-brand-text] {
    fill: ${({ textColor }) =>
      textColor ?? getToken('brand.base.svgText.fill')};
  }

  [data-brand-dot] {
    fill: ${({ textColor }) => textColor ?? getToken('brand.base.svgDot.fill')};
  }
`;
