'use client';

import styled, { css } from 'styled-components';
import * as helper from 'polished';

export const ContainerSection = styled.section`
  max-width: 83.3rem;
`;

export const SelectedImage = styled.img`
  aspect-ratio: 541/833;
  border-radius: 2.5rem;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 2.4rem;
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

  &::after {
    position: absolute;
    inset: 0;
    content: '';
    display: none;
    width: 100%;
    height: 100%;
    border: 1px solid #cbcbcb;
    background-color: ${helper.transparentize(0.75, '#FFFFFF')};
    border-radius: 1rem;
  }

  ${({ selected }) =>
    !selected &&
    css`
      &::after {
        display: block;
      }
    `}
`;

export const ListImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
