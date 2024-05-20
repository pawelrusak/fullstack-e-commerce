'uce client';

import styled, { css } from 'styled-components';
import * as polished from 'polished';
import { layoutWrapperCss } from '../layout-wrapper/layout-wrapper.styled';

const lightGrayColorCss = css`
  ${({ theme }) => polished.transparentize(0.75, theme.color.text)}
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  padding: 4rem 0;
  padding: clamp(2rem, 6.25vw, 8rem) 0;

  border-top: 1px solid ${lightGrayColorCss};

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
  font-family: ${({ theme }) => theme.fontFamily.poppins};
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
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
    color: ${({ theme }) => theme.color.text};
    font-size: 1.6rem;
    line-height: 2.4rem;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

export const NavSectionListItemIcon = styled.svg`
  color: ${({ theme }) => polished.transparentize(0.25, theme.color.text)};
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
    border-top: 1px solid ${lightGrayColorCss};
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
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
`;

export const CopyrightBarFormula = styled.p`
  ${copyrightBarFormulaTextCss}
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
    ${copyrightBarFormulaTextCss}
    width: max-content;
    padding: 0 1rem;
    position: relative;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.color.primary};
    }

    &::before {
      content: ' ';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 1px;
      height: 1.4rem;
      background-color: ${lightGrayColorCss};
    }
  }
`;
