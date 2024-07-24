'use client';

import styled from 'styled-components';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as polished from 'polished';

export const Wrapper = styled(Checkbox.Root)`
  display: flex;
  background-color: ${({ theme }) => theme.color.background};
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.2rem;
  border: 1px solid ${({ theme }) => theme.color.text};
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &[aria-checked='true'] {
    background: ${({ theme }) => theme.color.primary};
    border-color: ${({ theme }) => theme.color.primary};
  }

  &:hover {
    background-color: ${({ theme }) =>
      polished.darken(0.1, theme.color.primary)};
    border-color: ${({ theme }) => polished.darken(0.1, theme.color.primary)};
  }

  &:focus {
    outline: auto;
  }
`;

export const Indicator = styled(Checkbox.Indicator)`
  line-height: 0.8rem;
  color: ${({ theme }) => theme.color.background};
`;
