import styled from 'styled-components';
import * as polished from 'polished';

export const ArrowButton = styled.button`
  all: unset;
  border-radius: 9999px;
  color: ${({ theme }) => theme.color.text};
  border: 1px solid ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.background};
  padding: 1.1rem;
  left: 0 !important;
  right: 0 !important;
  align-self: center;
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${({ theme }) =>
      polished.darken(0.1, theme.color.background)};
  }
`;
