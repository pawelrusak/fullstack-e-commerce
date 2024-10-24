'use client';

import styled from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';
import BrandSvgIcon from './brand.svg';
import { ACCENT_THEME, BASE_THEME } from './brand.constants';

import type {
  BrandAccentThemeVariant,
  BrandBaseThemeVariant,
} from '@e-shop/theme/types';

const { svgDot: svgDotToken, svgText: svgTextToken } = getToken('brand');

export const Root = styled.span`
  display: inline-block;
  height: 4rem;
  padding-top: 0.7rem;
`;

export type StyledBrandSvgProps = {
  textColor?: string;
  dotColor?: string;
  accentTheme?: BrandAccentThemeVariant;
  baseTheme?: BrandBaseThemeVariant;
};

export const BrandSvg = styled(BrandSvgIcon)<StyledBrandSvgProps>`
  [data-brand-text] {
    fill: ${({ textColor, baseTheme = BASE_THEME.DEFAULT }) =>
      textColor ?? svgTextToken[baseTheme].initial.fill};
  }

  [data-brand-dot] {
    fill: ${({ dotColor, accentTheme = ACCENT_THEME.PRIMARY }) =>
      dotColor ?? svgDotToken[accentTheme].initial.fill};
  }
`;
