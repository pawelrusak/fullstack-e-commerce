'use client';

import styled from 'styled-components';

export const RootHeader = styled.header`
  color: ${({ theme }) => theme.color.text};
  margin-bottom: 3rem;
`;

export const SubBarContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    max-width: 156rem;
    padding: 0 2rem;
    margin: 0 auto;
  }
`;
