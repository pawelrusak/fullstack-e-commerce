import styled, { css } from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

export const RootNav = styled.nav`
  background-color: ${getToken('breadcrumb.root.base.backgroundColor')};
`;

export type StyledLinkProps = {
  isCurrent?: boolean;
};

export const Link = styled.a<StyledLinkProps>`
  font-family: ${getToken('breadcrumb.link.base.fontFamily')};
  background-color: ${getToken('breadcrumb.link.base.backgroundColor')};
  ${getToken('breadcrumb.link.variant.base.default.palette')};
  text-decoration: none;
  padding: 0 1.8rem;
  font-size: 1.6rem;
  line-height: 2.4rem;

  &:is(:hover, :focus) {
    ${getToken('breadcrumb.link.variant.base.defaultInteract.palette')};
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
