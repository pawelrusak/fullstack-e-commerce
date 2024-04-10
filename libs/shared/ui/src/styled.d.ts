import 'styled-components';
import { Theme as SystemTheme } from 'styled-system';

type AppSystemTheme = Required<Pick<SystemTheme, 'space'>>;

declare module 'styled-components' {
  export interface DefaultTheme extends AppSystemTheme {
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
      bold: number;
    };
    screens: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
