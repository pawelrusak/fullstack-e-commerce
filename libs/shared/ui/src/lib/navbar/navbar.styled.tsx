'use client';

import styled, { css, DefaultTheme } from 'styled-components';
import {
  LocationIcon as RawLocationIcon,
  PhoneIcon as RawPhoneIcon,
} from '../icons';
import * as helper from 'polished';
import { padding } from 'styled-system';
import type { PaddingProps } from 'styled-system';

export const Header = styled.header`
  color: ${({ theme }) => theme.color.text};
`;

const borderColor = ({ theme }: { theme: DefaultTheme }) =>
  helper.transparentize(0.75, theme.color.text);

export const BarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 154rem;
  margin: 0 auto;
`;

export const ContactBar = styled.div`
  border-bottom: 1px solid ${borderColor};
  padding: 1.6rem 0 1.5rem;
`;

export const ContactList = styled.ul`
  display: inline-block;
`;

export const ContactItem = styled.li`
  display: inline-block;
  & + & {
    border-left: 1px solid ${borderColor};
  }
`;

const itemIcon = css`
  display: inline-block;
  line-height: inherit;
  vertical-align: top;
  margin-right: 0.8rem;
  height: 100%;
`;

export const LocationIcon = styled(RawLocationIcon)`
  ${itemIcon}
`;

export const PhoneIcon = styled(RawPhoneIcon)`
  ${itemIcon}
`;

const baseContactElementCss = css<PaddingProps>`
  display: inline-block;
  font-size: 1.4rem;
  height: 3.2rem;
  line-height: 2.4rem;
  padding: 0.4rem 2.4rem;
  vertical-align: middle;
  ${padding}
`;

export const ContactElement = styled.span`
  ${baseContactElementCss}
`;

export const ContactLink = styled.a`
  ${baseContactElementCss}
  text-decoration: none;
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;

  :hover,
  :focus {
    color: ${({ theme }) => helper.lighten(0.4, theme.color.text)};
  }
`;

export const ContactSocialLink = styled(ContactLink)`
  padding: 0.8rem 1.2rem;
`;

/**
 * Navigation Bar
 */

export const ProductNavBar = styled.nav`
  background-color: ${({ theme }) => theme.color.primary};
`;

export const ProductNavLink = styled.a<PaddingProps>`
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.color.background};
  font-size: 1.6rem;
  line-height: 3.2rem;
  padding: 2rem 4rem;
  height: 7.2rem;
  vertical-align: middle;
  ${padding};

  :hover,
  :focus {
    color: ${({ theme }) => helper.transparentize(0.3, theme.color.background)};
  }
`;

export const ProductNavItem = styled.li`
  display: inline-block;
`;

export const ProductNavList = styled.ul`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const Hamburger = styled.div`
  display: inline-block;

  height: 2rem;
  width: 2rem;
  margin-right: 1.6rem;

  div {
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.background};
    margin: 0.3rem 0;
    border-radius: 2px;
  }

  div + div {
    margin-top: 0.4rem;
  }
`;

export const HamburgerButton = styled(ProductNavLink)`
  display: inline-flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  border: 0;
  background: transparent;
  cursor: pointer;
`;
