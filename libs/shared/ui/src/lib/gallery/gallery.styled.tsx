'use client';

import styled, { css } from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

const { buttonListBackdrop: buttonListBackdropToken } = getToken('gallery');

export const RootSection = styled.section`
  max-width: 83.3rem;
  width: 100%;
`;

export const SelectedImage = styled.img`
  aspect-ratio: 833/541;
  border-radius: 2.5rem;
  width: 100%;
  object-fit: contain;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 2.4rem;

  &:has(li) {
    margin-top: 3.2rem;
  }
`;

export const ListItem = styled.li``;

type ListButtonProps = {
  selected?: boolean;
};

export const ListButton = styled.button<ListButtonProps>`
  all: unset;
  cursor: pointer;
  height: 8.2rem;
  width: 9.4rem;
  border-radius: 1rem;
  position: relative;

  ${({ selected }) =>
    !selected &&
    css`
      &::after {
        position: absolute;
        inset: 0;
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        border: 1px solid ${buttonListBackdropToken._base.borderColor};
        background-color: ${buttonListBackdropToken._base.backgroundColor};
        border-radius: 1rem;
      }
    `}
`;

export const ListImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
