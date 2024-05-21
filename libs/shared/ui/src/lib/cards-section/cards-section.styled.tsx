import styled from 'styled-components';
import { margin } from 'styled-system';
import type { MarginProps } from 'styled-system';

export type StyledSectionProps = MarginProps;

export const Section = styled.section<StyledSectionProps>`
  margin-bottom: 8rem;
  ${margin}
  color: ${({ theme }) => theme.color.text};
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
  font-size: 3.6rem;
  line-height: 4.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.primary};
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
  vertical-align: middle;
  align-self: end;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    align-self: auto;
  }
`;

export const Body = styled.div``;
