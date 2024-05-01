'use client';

import { CSSProperties } from 'react';
import styled from 'styled-components';
import { theme } from '@e-shop/theme';
import { margin } from 'styled-system';

const headingLevel = {
  1: {
    fontSize: '5.6rem',
    fontWeight: theme.fontWeight.bold,
    lineHeight: '6.8rem',
  },
  2: {
    fontSize: '3.6rem',
    fontWeight: theme.fontWeight.semiBold,
    lineHeight: '4.6rem',
  },
  3: {
    fontSize: '2.4rem',
    fontWeight: theme.fontWeight.semiBold,
    lineHeight: '3rem',
  },
  4: {
    fontSize: '2rem',
    fontWeight: theme.fontWeight.semiBold,
    lineHeight: '3rem',
  },
  5: {
    fontSize: '2rem',
    fontWeight: theme.fontWeight.semiBold,
    lineHeight: '3rem',
  },
  6: {
    fontSize: '1.6rem',
    fontWeight: theme.fontWeight.semiBold,
    lineHeight: '2.4rem',
  },
  7: {
    fontSize: '1.6rem',
    fontWeight: theme.fontWeight.semiBold,
    lineHeight: '2.4rem',
  },
  8: {
    fontSize: '1.4rem',
    fontWeight: theme.fontWeight.semiBold,
    lineHeight: '2rem',
  },
} satisfies Record<number, CSSProperties>;

const headingLevelExtra = {
  ...headingLevel,
  9: {
    fontSize: '1.4rem',
    fontWeight: theme.fontWeight.semiBold,
    lineHeight: '2rem',
  },
} satisfies Record<number, CSSProperties>;

export type StyledHeadingProps = {
  level?: keyof typeof headingLevel;
};

export const Heading = styled.h1<StyledHeadingProps>`
  ${({ level = 1 }) => headingLevelExtra[level]}

  ${margin}
`;
