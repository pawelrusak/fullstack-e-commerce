'use client';

import styled, { css } from 'styled-components';
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

const listItemTopographyCSS = css`
  color: ${productBarListItemToken._base.color};
  font-family: ${productBarListItemToken._base.fontFamily};
  font-size: ${productBarListItemToken._base.fontSize};
  line-height: ${productBarListItemToken._base.lineHeight};
  font-weight: ${productBarListItemToken._base.fontWeight};
  text-decoration: none;
  vertical-align: middle;
`;

export const ListItem = styled.li`
  display: inline-block;
`;

const listItemBoxModelCSS = css`
  padding: 2rem 4rem;
  border: none;
`;

const listItemLinkInteractEffectCSS = css`
  color: ${productBarListItemLinkToken.default.initial.color};

  &:hover,
  &:focus {
    color: ${productBarListItemLinkToken.default.interact.color};
  }
`;

export type StyledListItemLinkProps = PaddingProps;

export const ListItemLink = styled.a<StyledListItemLinkProps>`
  display: inline-block;
  ${listItemBoxModelCSS};
  ${listItemTopographyCSS};
  ${listItemLinkInteractEffectCSS};

  ${padding};
`;

export type StyledListItemHamburgerRootProps = PaddingProps;

export const ListItemHamburgerRoot = styled.button<StyledListItemHamburgerRootProps>`
  ${listItemBoxModelCSS};
  ${listItemTopographyCSS};
  ${listItemLinkInteractEffectCSS};
  display: inline-flex;
  align-items: center;
  background: transparent;
  cursor: pointer;

  ${padding};
`;
