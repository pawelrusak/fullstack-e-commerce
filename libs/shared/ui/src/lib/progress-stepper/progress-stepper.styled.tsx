'use client';

import styled, { css } from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export const Link = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 2.4rem;
  line-height: 3rem;
  font-family: ${({ theme }) => theme.fontFamily.poppins};

  padding: 1.2rem 0;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.4rem;
    background-color: ${({ theme }) => theme.color.primary};
  }
`;

type StyledListItemProps = {
  isActive?: boolean;
};

export const ListItem = styled.li<StyledListItemProps>`
  height: 100%;

  &:before {
    visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  }

  & ${Link} {
    color: ${({ isActive, theme }) =>
      isActive ? theme.color.text : '#cbcbcb'};

    &:hover {
      ${({ isActive, theme }) =>
        isActive
          ? css`
              pointer-events: none;
            `
          : css`
              color: ${theme.color.primary};
            `}
    }

    &::before {
      visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
    }
  }
`;

export const OrderedList = styled.ol`
  display: flex;
  gap: 1.6rem;

  counter-reset: progress-stepper-counter;

  & ${ListItem} {
    counter-increment: progress-stepper-counter;

    &::before {
      content: '0' counter(progress-stepper-counter);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      line-height: 2.4rem;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: ${({ theme }) => theme.color.background};
      background-color: ${({ theme }) => theme.color.primary};
      border-radius: 999px;
      height: 5rem;
      width: 5rem;
      margin-right: 1.6rem;
    }
  }
`;
