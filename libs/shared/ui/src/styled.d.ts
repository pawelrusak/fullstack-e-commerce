import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      text: string;
      background: string;
      border: string;
    };
    fontFamily: {
      poppins: string;
      montserrat: string;
    };
    fontWeight: {
      regular: number;
      semiBold: number;
    };
  }
}
