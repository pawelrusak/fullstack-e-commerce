'use client';

import styled from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';
import BrandSvgIcon from './brand.svg';

const { svgDot: svgDotToken, svgText: svgTextToken } = getToken('brand');

export const Root = styled.span`
  display: inline-block;
  height: 4rem;
  padding-top: 0.7rem;
`;

export type StyledBrandSvgProps = {
  textColor?: string;
  dotColor?: string;
};

export const BrandSvg = styled(BrandSvgIcon)<StyledBrandSvgProps>`
  [data-brand-text] {
    fill: ${({ textColor }) => textColor ?? svgTextToken.primary.initial.fill};
  }

  [data-brand-dot] {
    fill: ${({ dotColor }) => dotColor ?? svgDotToken.primary.initial.fill};
  }
`;
