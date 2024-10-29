'use client';

import styled, { css } from 'styled-components';
import {
  LocationIcon as RawLocationIcon,
  PhoneIcon as RawPhoneIcon,
} from '@e-shop/icons';
import { padding } from 'styled-system';
import { getComponentThemeToken as getToken } from '@e-shop/theme';
import type { PaddingProps } from 'styled-system';

const {
  contactBarRoot: contactBarRootToken,
  contactBarListItem: contactBarListItemToken,
  contactBarListItemLink: contactBarListItemLinkToken,
} = getToken('navbar');

export const ContactBar = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.screens.md}) {
    display: block;
    border-bottom: 1px solid ${contactBarRootToken._base.mdBorderColor};
    padding: 1.6rem 0 1.5rem;
  }
`;

export const ContactList = styled.ul`
  display: inline-block;
`;

export const ContactItem = styled.li`
  display: inline-block;

  color: ${contactBarListItemToken._base.color};
  font-size: ${contactBarListItemToken._base.fontSize};
  font-family: ${contactBarListItemToken._base.fontFamily};
  font-weight: ${contactBarListItemToken._base.fontWeight};
  line-height: ${contactBarListItemToken._base.lineHeight};

  & + & {
    border-left: 1px solid ${contactBarListItemToken._base.borderColor};
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

const baseContactListItemCss = css<PaddingProps>`
  display: inline-block;
  height: 3.2rem;
  padding: 0.6rem 2.4rem;
  vertical-align: middle;
  ${padding}
`;

export const ContactElement = styled.span`
  ${baseContactListItemCss}
`;

export const ContactLink = styled.a`
  ${baseContactListItemCss}
  text-decoration: none;
  color: ${contactBarListItemLinkToken.default.initial.color};
  cursor: pointer;

  :hover,
  :focus {
    color: ${contactBarListItemLinkToken.default.interact.color};
  }
`;

export const ContactSocialLink = styled(ContactLink)<PaddingProps>`
  padding: 0.8rem 1.2rem;
  ${padding}
`;
