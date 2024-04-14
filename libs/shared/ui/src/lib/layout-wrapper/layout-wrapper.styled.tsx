'use client';

import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  padding: 0 1rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    max-width: 158rem;
    padding: 0 2rem;
    margin: 0 auto;
  }
`;
