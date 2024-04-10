'use client';

import styled, { css } from 'styled-components';
import * as helper from 'polished';

export type HasBorderProps = {
  hasBorder?: boolean;
};

const borderBottomCSS = css<HasBorderProps>`
  border-bottom: 1px solid
    ${({ theme }) => helper.transparentize(0.75, theme.color.text)};
`;

export const UserBarWrapper = styled.div<HasBorderProps>`
  padding: 1.5rem 0;
  ${borderBottomCSS}

  @media screen and (min-width: ${({ theme }) => theme.screens.md}) {
    padding: 2.4rem 0;
    border-bottom: none;
    ${({ hasBorder }) => hasBorder && borderBottomCSS}
  }
`;

export const BrandHeading = styled.h1`
  display: flex;
  align-items: center;
`;

export const BrandLink = styled.a``;

export const UserSection = styled.section`
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
    ${({ theme }) => helper.transparentize(0.5, theme.color.text)};

  padding: 0.8rem 2.4rem;
  line-height: 3.8rem;
  border-radius: 10px;

  ::placeholder {
    color: ${({ theme }) => theme.color.text};
    opacity: 0.75;
  }
`;

export const UserList = styled.ul`
  display: flex;
`;

export const UserItem = styled.li``;

const userElementCss = css`
  all: unset;
  display: flex;
  background-color: transparent;
  align-items: center;
  border: none;
  text-decoration: none;
  padding: 0.4rem 4rem;
  color: ${({ theme }) => theme.color.text};
`;

export const UserLoginLink = styled.a`
  ${userElementCss}
  position: relative;
  padding-right: 0;

  ::before {
    content: ' ';
    width: 1px;
    height: 3.2rem;
    background-color: ${({ theme }) =>
      helper.transparentize(0.75, theme.color.text)};
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const UserCartButton = styled.button`
  ${userElementCss}
  padding-left: 4.8rem;
`;

const userItemText = css`
  display: block;
  line-height: 2.4rem;
`;

export const UserItemText = styled.div`
  ${userItemText}
`;

export const UserItemStrong = styled.strong`
  ${userItemText}
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const UserItemIcon = styled.svg`
  display: inline-block;

  @media screen and (min-width: ${({ theme }) => theme.screens.md}) {
    margin-right: 2.4rem;
  }
`;

export const UserItemTextWrapper = styled.span`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.screens.md}) {
    display: initial;
  }
`;
