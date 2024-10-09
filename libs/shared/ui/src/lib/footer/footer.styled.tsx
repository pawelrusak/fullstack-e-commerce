'uce client';

import styled, { css } from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';
import { layoutWrapperCss } from '../layout-wrapper/layout-wrapper.styled';

const {
  root: rootToken,
  copyrightBar: copyrightBarToken,
  copyrightBarFormula: copyrightBarFormulaToken,
  copyrightBarListItemLink: copyrightBarListItemLinkToken,
  copyrightBarListItemSeparator: copyrightBarListItemSeparatorToken,
  navSectionListItemLink: navSectionListItemLinkToken,
  navSectionListItemIcon: navSectionListItemIconToken,
  navSectionTitle: navSectionTitleToken,
} = getToken('footer');

// TODO: rename to `RootFooter`
export const Footer = styled.footer`
  margin-top: 2rem;
  padding: 4rem 0;
  padding: clamp(2rem, 6.25vw, 8rem) 0;

  border-top: 1px solid ${rootToken._base.borderTopColor};

  @media screen and (min-width: ${({ theme }) => theme.screens.lg}) {
    border-top: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    padding: 8rem 0;
  }
`;

export const NavSection = styled.section`
  margin-bottom: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    display: block;
    align-items: normal;
    flex-direction: row;
    margin-bottom: 0;

    &:first-child,
    &:last-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export const Nav = styled.nav`
  margin-bottom: 2.4rem;
  ${layoutWrapperCss}

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem;
  }

  @media screen and (min-width: 1150px) {
    display: flex;
    justify-content: end;
    margin-bottom: 8rem;
    gap: 0;

    & > ${NavSection} {
      margin-left: 9.6rem;
      margin-left: clamp(2rem, -40rem + 35.75vw, 9.6rem);

      &:first-child {
        margin-left: 0;
        margin-right: auto;
      }

      &:last-child {
        margin-left: 8rem;
        margin-left: clamp(2rem, -40rem + 35.75vw, 8rem);
      }
    }
  }
`;

export const BrandHeader = styled.h2`
  margin-bottom: 2.4rem;
`;

export const NavSectionTitle = styled.h2`
  color: ${navSectionTitleToken._base.color};
  font-family: ${navSectionTitleToken._base.fontFamily};
  font-weight: ${navSectionTitleToken._base.fontWeight};
  font-size: 2rem;
  line-height: 3rem;
  margin-bottom: 2.4rem;
`;

export const NavSectionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    align-items: normal;
  }
`;

export const NavSectionListItem = styled.li`
  & > :is(a, button) {
    display: inline-block;
    width: max-content;
    vertical-align: middle;
    text-decoration: none;
    color: ${copyrightBarListItemLinkToken.default.initial.color};
    font-size: 1.6rem;
    line-height: 2.4rem;

    &:hover,
    &:focus {
      color: ${copyrightBarListItemLinkToken.default.interact.color};
    }
  }
`;

export const NavSectionListItemIcon = styled.svg`
  color: ${navSectionListItemIconToken._base.color};
  display: inline-block;
  margin-right: 1.2rem;
  vertical-align: middle;
`;

export const CopyrightBar = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  ${layoutWrapperCss}
  padding: 0.8rem;
  gap: 1.6rem;
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 1rem;
    right: 1rem;
    content: ' ';
    border-top: 1px solid ${copyrightBarToken._base.borderTopColor};
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    margin-top: 4rem;
    padding: 0.8rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: normal;
    gap: 0;
    margin-top: 8rem;
  }
`;

const copyrightBarFormulaTextCss = css`
  font-weight: 1.4rem;
  line-height: 2rem;
  text-decoration: none;
`;

export const CopyrightBarFormula = styled.p`
  color: ${copyrightBarFormulaToken._base.color};
`;

export const CopyrightBarList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const CopyrightBarListItem = styled.li`
  &:first-child > :is(a, button) {
    &:before {
      display: none;
    }
  }

  & > :is(a, button) {
    display: inline-block;
    color: ${navSectionListItemLinkToken.default.initial.color};
    ${copyrightBarFormulaTextCss}
    width: max-content;
    padding: 0 1rem;
    position: relative;

    &:hover,
    &:focus {
      color: ${navSectionListItemLinkToken.default.interact.color};
    }

    &::before {
      content: ' ';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 1px;
      height: 1.4rem;
      background-color: ${copyrightBarListItemSeparatorToken._base
        .backgroundColor};
    }
  }
`;
