'use client';

import styled from 'styled-components';
import { margin } from 'styled-system';
import { getComponentThemeToken as getToken } from '@e-shop/theme';
import { getLevelStyle } from './heading.utils';

import type { HeadingLevel } from './heading.utils';

const { root: rootToken } = getToken('heading');

export type StyledHeadingProps = {
  level?: HeadingLevel;
};

export const RootHeading = styled.h1<StyledHeadingProps>`
  display: block;
  color: ${rootToken._base.color};
  ${({ level }) => getLevelStyle(level)};

  ${margin}
`;
