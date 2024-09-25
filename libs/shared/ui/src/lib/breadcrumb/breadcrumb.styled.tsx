import styled, { css } from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

const { root: rootToken, link: linkToken } = getToken('breadcrumb');

export const RootNav = styled.nav`
  background-color: ${rootToken._base.backgroundColor};
`;

export type StyledLinkProps = {
  isCurrent?: boolean;
};

export const Link = styled.a<StyledLinkProps>`
  font-family: ${linkToken._base.fontFamily};
  background-color: ${linkToken._base.backgroundColor};
  color: ${linkToken.default.initial.color};
  text-decoration: none;
  padding: 0 1.8rem;
  font-size: 1.6rem;
  line-height: 2.4rem;

  &:hover,
  :focus {
    color: ${linkToken.default.interact.color};
  }

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      font-weight: bold;
    `}
`;

export const List = styled.ol`
  display: flex;

  li:first-of-type ${Link} {
    padding-left: 0;
  }

  li + li:before {
    display: inline-block;
    content: '|';
  }
`;
