'use client';

import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  color: {
    primary: '#FF624C',
    secondary: '#FED550',
    text: '#303030',
    background: '#FFFFFF',
    border: '#F4F4F4',
  },
  fontFamily: {
    poppins: ['Poppins', 'sans-serif'].join(', '),
    montserrat: ['Montserrat', 'sans-serif'].join(', '),
  },
  fontWeight: {
    regular: 400,
    semiBold: 600,
    bold: 700,
  },
  space: [0, 0.2, 0.4, 0.8, 1.6, 3.2],
};

export default theme;
