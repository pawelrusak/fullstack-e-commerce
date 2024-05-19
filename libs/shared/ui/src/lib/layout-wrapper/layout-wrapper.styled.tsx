'use client';

import styled, { css } from 'styled-components';

export const layoutWrapperCss = css`
  padding: 0 1rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    max-width: 158rem;
    padding: 0 2rem;
    margin: 0 auto;
  }
`;

export const LayoutWrapper = styled.div`
  ${layoutWrapperCss}
`;
