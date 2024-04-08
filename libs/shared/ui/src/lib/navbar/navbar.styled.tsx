'use client';

import styled from 'styled-components';

export const Header = styled.header`
  color: ${({ theme }) => theme.color.text};
`;

export const BarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 154rem;
  margin: 0 auto;
`;
