import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  margin-bottom: 4.8rem;
`;

export type StyledLinkProps = {
  isCurrent?: boolean;
};

export const Link = styled.a<StyledLinkProps>`
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  padding: 0 1.8rem;
  font-size: 1.6rem;
  line-height: 2.4rem;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.primary};
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
