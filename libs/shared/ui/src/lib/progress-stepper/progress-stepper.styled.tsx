'use client';

import styled, { css } from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

const {
  listItemLink: listItemLinkToken,
  listItemLinkUnderline: listItemLinkUnderlineToken,
  counter: counterToken,
} = getToken('progressStepper');

export const RootSection = styled.section`
  display: flex;
  justify-content: center;
`;

export const ListItemLink = styled.a`
  display: inline-block;
  text-decoration: none;
  font-family: ${listItemLinkToken._base.fontFamily};
  font-weight: ${listItemLinkToken._base.fontWeight};
  font-size: ${listItemLinkToken._base.fontSize};
  line-height: ${listItemLinkToken._base.lineHeight};

  padding: 1rem 0;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.4rem;
    background-color: ${listItemLinkUnderlineToken._base.backgroundColor};
  }
`;

type StyledListItemProps = {
  isActive?: boolean;
};

export const ListItem = styled.li<StyledListItemProps>`
  height: 100%;
  display: flex;
  align-items: center;

  &:before {
    visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  }

  & ${ListItemLink} {
    color: ${({ isActive }) =>
      isActive
        ? listItemLinkToken.default.initial.color
        : listItemLinkToken.default.inactive.color};

    &:hover {
      ${({ isActive }) =>
        isActive
          ? css`
              pointer-events: none;
            `
          : css`
              color: ${listItemLinkToken.default.interact.color};
            `}
    }

    &::before {
      /* link underline */
      visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
    }
  }
`;

export const OrderedList = styled.ol`
  display: flex;
  gap: 2.4rem;

  counter-reset: progress-stepper-counter;

  & ${ListItem} {
    counter-increment: progress-stepper-counter;

    &::before {
      content: '0' counter(progress-stepper-counter);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: ${counterToken._base.fontFamily};
      font-size: ${counterToken._base.fontSize};
      line-height: ${counterToken._base.lineHeight};
      font-weight: ${counterToken._base.fontWeight};
      color: ${counterToken._base.color};
      background-color: ${counterToken._base.backgroundColor};
      border-radius: 999px;
      height: ${counterToken._base.height};
      width: ${counterToken._base.width};
      margin-right: 1.6rem;
    }
  }
`;
