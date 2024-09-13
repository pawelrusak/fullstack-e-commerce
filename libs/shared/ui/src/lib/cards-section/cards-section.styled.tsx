import styled from 'styled-components';
import { margin } from 'styled-system';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

import type { MarginProps } from 'styled-system';

export type StyledSectionProps = MarginProps;

export const RootSection = styled.section<StyledSectionProps>`
  margin-bottom: 8rem;
  ${margin}
  background-color: ${getToken(
    'cardsSection.root.base.palette.backgroundColor',
  )};
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
  color: ${getToken('cardsSection.title.base.palette.color')};
  font-family: ${getToken('cardsSection.title.base.fontFamily')};
  font-size: 3.6rem;
  line-height: 4.6rem;
  font-weight: ${getToken('cardsSection.title.base.fontWeight')};
`;

export const Link = styled.a`
  color: ${getToken('cardsSection.readMoreLink.variant.default.palette.color')};
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: ${getToken('cardsSection.readMoreLink.base.fontWeight')};
  font-family: ${getToken('cardsSection.readMoreLink.base.fontFamily')};
  text-decoration: none;
  vertical-align: middle;
  align-self: end;

  &:is(:hover, :focus) {
    color: ${getToken(
      'cardsSection.readMoreLink.variant.interact.palette.color',
    )};
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    align-self: auto;
  }
`;

export const Body = styled.div`
  color: ${getToken('cardsSection.body.base.palette.color')};
  background-color: ${getToken(
    'cardsSection.body.base.palette.backgroundColor',
  )};
`;
