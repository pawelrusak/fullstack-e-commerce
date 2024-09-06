'use client';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    // css happy rems
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;

    color: ${({ theme }) => theme.color.onBackground};
    background-color: ${({ theme }) => theme.color.background};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  /* TODO: Move this to component for hermetization */
  .products-carousel {
    display: flex;
  }
`;

export default GlobalStyle;
