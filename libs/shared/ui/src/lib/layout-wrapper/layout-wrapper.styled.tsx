'use client';

import styled, { css } from 'styled-components';

export const layoutWrapperCss = css`
  padding-left: 1rem;
  padding-right: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    max-width: 158rem;
    padding-left: 2rem;
    padding-right: 2rem;
    margin: 0 auto;
  }
`;

export const LayoutWrapper = styled.div`
  ${layoutWrapperCss}
`;
