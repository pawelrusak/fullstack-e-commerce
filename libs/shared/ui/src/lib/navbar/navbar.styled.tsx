'use client';

import styled, { css } from 'styled-components';

export const Header = styled.header`
  color: ${({ theme }) => theme.color.text};
  margin-bottom: 3rem;
`;

export const barContainerCss = css`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    max-width: 158rem;
    padding: 0 2rem;
    margin: 0 auto;
  }
`;

export const BarContainer = styled.div`
  ${barContainerCss}
`;
