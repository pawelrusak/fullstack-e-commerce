'use client';

import styled, { css } from 'styled-components';
import { theme } from '@e-shop/theme';

export const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.secondBackground};
  border-radius: 2.5rem;
  padding: 4rem;
`;

const titleSize = {
  normal: {
    fontSize: '2.4rem',
    fontWeight: theme.fontWeight.semiBold,
  },
  small: {
    fontSize: '2rem',
    fontWeight: theme.fontWeight.bold,
  },
} satisfies Record<string, React.CSSProperties>;

type StyledTitleProps = {
  size?: keyof typeof titleSize;
};

export const Title = styled.h3<StyledTitleProps>`
  font-family: ${({ theme }) => theme.fontFamily.montserrat};

  ${({ size }) => css`
    font-size: ${titleSize[size || 'normal'].fontSize};
    font-weight: ${titleSize[size || 'normal'].fontWeight};
    line-height: 3rem;
  `}
`;
