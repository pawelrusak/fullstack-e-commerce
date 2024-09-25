import styled from 'styled-components';
import { margin } from 'styled-system';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

import type { MarginProps } from 'styled-system';

export type StyledSectionProps = MarginProps;

const {
  body: bodyToken,
  root: rootToken,
  title: titleToken,
  readMoreLink: readMoreLinkToken,
} = getToken('cardsSection');

export const RootSection = styled.section<StyledSectionProps>`
  margin-bottom: 8rem;
  background-color: ${rootToken._base.backgroundColor};
  ${margin}
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 3.2rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 4.8rem;
  }
`;

export const Title = styled.h2`
  color: ${titleToken._base.color};
  font-family: ${titleToken._base.fontFamily};
  font-weight: ${titleToken._base.fontWeight};
  font-size: 3.6rem;
  line-height: 4.6rem;
`;

export const Link = styled.a`
  color: ${readMoreLinkToken.default.initial.color};
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: ${readMoreLinkToken._base.fontWeight};
  font-family: ${readMoreLinkToken._base.fontFamily};
  text-decoration: none;
  vertical-align: middle;
  align-self: end;

  &:is(:hover, :focus) {
    color: ${readMoreLinkToken.default.interact.color};
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    align-self: auto;
  }
`;

export const Body = styled.div`
  color: ${bodyToken.base.palette.color};
  background-color: ${bodyToken.base.palette.backgroundColor};
`;
