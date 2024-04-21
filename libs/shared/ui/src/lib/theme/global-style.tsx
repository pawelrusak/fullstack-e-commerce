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
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
  }

  body {
    font-size: 1.6rem;
  }

  .products-carousel {
    display: flex;
  }
`;

export default GlobalStyle;
