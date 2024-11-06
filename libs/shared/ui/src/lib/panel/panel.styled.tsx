'use client';

import styled from 'styled-components';
import { getTitleSizeStyle } from './panel.utils';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

import type { InternalPanelTitleProps } from './panel.utils';

const { root: rootToken, title: titleToken } = getToken('panel');

export const RootSection = styled.section`
  background-color: ${rootToken._base.backgroundColor};
  border-radius: 2.5rem;
  padding: 4rem;
`;

type StyledTitleProps = InternalPanelTitleProps;

export const Title = styled.h3<StyledTitleProps>`
  color: ${titleToken._base.color};
  display: block;

  ${({ size }) => getTitleSizeStyle(size)};
`;
