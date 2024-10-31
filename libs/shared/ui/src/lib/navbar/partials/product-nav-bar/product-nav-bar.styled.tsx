'use client';

import styled from 'styled-components';
import { padding } from 'styled-system';
import { getComponentThemeToken as getToken } from '@e-shop/theme';
import type { PaddingProps } from 'styled-system';

const {
  productBarRoot: productBarRootToken,
  productBarListItem: productBarListItemToken,
  productBarListItemLink: productBarListItemLinkToken,
} = getToken('navbar');

export const RootNav = styled.nav`
  display: none;
  background-color: ${productBarRootToken._base.backgroundColor};

  @media screen and (min-width: ${({ theme }) => theme.screens.md}) {
    display: block;
  }
`;

export const List = styled.ul`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const ListItem = styled.li`
  display: inline-block;
  color: ${productBarListItemToken._base.color};
  font-family: ${productBarListItemToken._base.fontFamily};
  font-size: ${productBarListItemToken._base.fontSize};
  line-height: ${productBarListItemToken._base.lineHeight};
  font-weight: ${productBarListItemToken._base.fontWeight};
`;

export const ListItemLink = styled.a<PaddingProps>`
  display: inline-block;
  text-decoration: none;
  color: ${productBarListItemLinkToken.default.initial.color};
  padding: 2rem 4rem;
  vertical-align: middle;
  ${padding};

  &:hover,
  &:focus {
    color: ${productBarListItemLinkToken.default.interact.color};
  }
`;

export const ListItemHamburgerRoot = styled(ListItemLink)`
  display: inline-flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  border: 0;
  background: transparent;
  cursor: pointer;
`;
