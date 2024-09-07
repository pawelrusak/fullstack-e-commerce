'use client';

import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

/**
 * Reset the base font size, scaling elements consistently using rem units.
 * @see {@link https://dev.to/dominikilnicki/solve-rem-problem-with-the-happy-rems-approach-179}
 */
const happyRems = css`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${happyRems}

  body {
    color: ${({ theme }) => theme.color.onBackground};
    background-color: ${({ theme }) => theme.color.background};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  //* TODO: Move this to a component for encapsulation */
  .products-carousel {
    display: flex;
  }
`;

export default GlobalStyle;
