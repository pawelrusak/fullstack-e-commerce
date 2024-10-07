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
  color: ${linkToken.default.initial.color};
  background-color: ${linkToken._base.backgroundColor};
  font-family: ${linkToken._base.fontFamily};
  font-size: ${linkToken._base.fontSize};
  line-height: ${linkToken._base.lineHeight};
  font-weight: ${linkToken.isCurrent.initial.fontWeight};
  text-decoration: none;
  padding: 0 1.8rem;

  &:hover,
  &:focus {
    color: ${linkToken.default.interact.color};
  }

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      font-weight: ${linkToken.isCurrent.current.fontWeight};
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
