'use client';

import styled, { css, DefaultTheme } from 'styled-components';
import {
  LocationIcon as RawLocationIcon,
  PhoneIcon as RawPhoneIcon,
} from '../../../icons';
import * as helper from 'polished';
import { padding } from 'styled-system';
import type { PaddingProps } from 'styled-system';

export const Header = styled.header`
  color: ${({ theme }) => theme.color.text};
`;

const borderColor = ({ theme }: { theme: DefaultTheme }) =>
  helper.transparentize(0.75, theme.color.text);

export const ContactBar = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.screens.md}) {
    display: block;
    border-bottom: 1px solid ${borderColor};
    padding: 1.6rem 0 1.5rem;
  }
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

export const ContactSocialLink = styled(ContactLink)<PaddingProps>`
  padding: 0.8rem 1.2rem;
  ${padding}
`;
