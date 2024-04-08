'use client';

import styled from 'styled-components';
import * as helper from 'polished';
import { padding } from 'styled-system';
import type { PaddingProps } from 'styled-system';

export const ProductNavBar = styled.nav`
  background-color: ${({ theme }) => theme.color.primary};
`;

export const ProductNavLink = styled.a<PaddingProps>`
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.color.background};
  font-size: 1.6rem;
  line-height: 3.2rem;
  padding: 2rem 4rem;
  height: 7.2rem;
  vertical-align: middle;
  ${padding};

  :hover,
  :focus {
    color: ${({ theme }) => helper.transparentize(0.3, theme.color.background)};
  }
`;

export const ProductNavItem = styled.li`
  display: inline-block;
`;

export const ProductNavList = styled.ul`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const HamburgerButton = styled(ProductNavLink)`
  display: inline-flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  border: 0;
  background: transparent;
  cursor: pointer;
`;
