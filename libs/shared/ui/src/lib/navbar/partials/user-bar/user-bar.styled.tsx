'use client';

import styled, { css } from 'styled-components';
import * as helper from 'polished';
import { margin, MarginProps } from 'styled-system';

import { getComponentThemeToken as getToken } from '@e-shop/theme';

const {
  userBarRoot: userBarRootToken,
  userBarListItem: userBarListItemToken,
  userBarListItemIcon: userBarListItemIconToken,
  userListItemCartBadge: userListItemCartBadgeToken,
  userBarListItemStrong: userBarListItemStrongToken,
  userBarListItemSeparator: userBarListItemSeparatorToken,
  userBarListItemInteractive: userBarListItemInteractiveToken,
} = getToken('navbar');

export type StyledRootProps = {
  hasBorder?: boolean;
};

const rootBorderBottomCSS = css`
  border-bottom: 1px solid ${userBarRootToken._base.borderBottomColor};
`;

export const Root = styled.div<StyledRootProps>`
  padding: 1.5rem 0;
  ${rootBorderBottomCSS}
  background-color: ${userBarRootToken._base.backgroundColor};
  color: ${userBarRootToken._base.color};

  @media screen and (min-width: ${({ theme }) => theme.screens.md}) {
    padding: 2.4rem 0;
    border-bottom: none;
    ${({ hasBorder }) => hasBorder && rootBorderBottomCSS}
  }
`;

export const BrandHeading = styled.h1`
  display: flex;
  align-items: center;
`;

export const BrandHeadingLink = styled.a``;

export const Section = styled.section`
  display: flex;
`;

export const Search = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.screens.md}) {
    display: block;
  }
`;

export const SearchInput = styled.input`
  all: unset;
  display: block;
  width: 33rem;
  border: 1px solid
    ${({ theme }) => helper.transparentize(0.5, theme.color.onSurface)};

  padding: 0.8rem 2.4rem;
  line-height: 3.8rem;
  border-radius: 10px;

  &::placeholder {
    color: ${({ theme }) => theme.color.onSurface};
    opacity: 0.75;
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li``;

const userElementCss = css`
  all: unset;
  display: flex;
  background-color: transparent;
  align-items: center;
  border: none;
  text-decoration: none;
  padding: 0.4rem 4rem;
`;

const listItemInteractiveCSS = css`
  cursor: pointer;
  color: ${userBarListItemInteractiveToken.default.initial.color};

  &:hover,
  &:focus {
    color: ${userBarListItemInteractiveToken.default.interact.color};

    * {
      color: ${userBarListItemInteractiveToken.default.interact.color};
    }
  }
`;

export const UserLoginLink = styled.a`
  ${userElementCss}
  position: relative;
  padding-right: 0;

  ${listItemInteractiveCSS};

  &::before {
    content: ' ';
    width: 1px;
    height: 3.2rem;
    background-color: ${userBarListItemSeparatorToken._base.backgroundColor};
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const UserCartButton = styled.button`
  ${userElementCss}
  ${listItemInteractiveCSS};
  padding-left: 4.8rem;
`;

const listItemTextCss = css`
  display: block;
  color: ${userBarListItemToken._base.color};
  font-family: ${userBarListItemToken._base.fontFamily};
  font-size: ${userBarListItemToken._base.fontSize};
  font-weight: ${userBarListItemToken._base.fontWeight};
  line-height: ${userBarListItemToken._base.lineHeight};
`;

export const ListItemText = styled.div`
  ${listItemTextCss}
`;

export const ListItemStrong = styled.strong`
  ${listItemTextCss}
  font-weight: ${userBarListItemStrongToken._base.fontWeight};
`;

type StyledListItemIconProps = {
  showIndicator?: boolean;
} & MarginProps;

const isListItemIconPropForwarded = (prop: string) =>
  ![
    'showIndicator',
    'marginTop',
    'marginBottom',
    'marginLeft',
    'marginRight',
    'marginY',
    'marginX',
  ].includes(prop);

export const ListItemIcon = styled.svg.withConfig<StyledListItemIconProps>({
  shouldForwardProp: isListItemIconPropForwarded,
})`
  display: inline-block;
  color: ${userBarListItemIconToken._base.color};

  @media screen and (min-width: ${({ theme }) => theme.screens.md}) {
    margin-right: 2.4rem;
    ${margin}
  }

  [data-cart-icon-indicator] {
    visibility: ${({ showIndicator = false }) =>
      showIndicator ? 'visible' : 'hidden'};
  }
`;

export const ListItemCartIconWrapper = styled.div`
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.screens.md}) {
    margin-right: 2.4rem;
  }
`;

export const ListItemCartBadge = styled.strong`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  height: ${userListItemCartBadgeToken._base.height};
  min-width: ${userListItemCartBadgeToken._base.maxWidth};
  width: 100%;
  max-width: fit-content;
  padding: 0.2rem 0.5rem;

  font-family: ${userListItemCartBadgeToken._base.fontFamily};
  font-size: ${userListItemCartBadgeToken._base.fontSize};
  font-weight: ${userListItemCartBadgeToken._base.fontWeight};
  line-height: ${userListItemCartBadgeToken._base.lineHeight};

  align-items: center;
  justify-content: center;
  border-radius: 999px;
  transform: translate(30%, -40%);

  color: ${userListItemCartBadgeToken._base.color} !important;
  background-color: ${userListItemCartBadgeToken._base.backgroundColor};
`;

export const ListItemTextWrapper = styled.span`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.screens.md}) {
    display: initial;
  }
`;
