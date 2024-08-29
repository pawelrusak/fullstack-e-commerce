import { colorPalette } from './color-palette';
import { color, fontFamily } from './system-theme';

import type { AppComponent } from '@e-shop/types/theme';

export const component: AppComponent = {
  /**
   * Brand component tokens
   */
  brand: {
    base: {
      svgDot: {
        fill: color.primary,
      },
      svgText: {
        fill: colorPalette.secondary[500],
      },
    },
  },
  /**
   * Button component tokens
   */
  button: {
    base: {
      fontFamily: fontFamily.primary,
    },
    variant: {
      primary: {
        default: {
          palette: {
            color: color.onPrimary,
            backgroundColor: color.primary,
            borderColor: color.primaryBorder,
          },
        },
        defaultInteract: {
          palette: {
            color: color.onPrimary,
            backgroundColor: color.primaryInteract,
            borderColor: color.primaryBorderInteract,
          },
        },
      },
      secondary: {
        default: {
          palette: {
            color: color.onSecondary,
            backgroundColor: color.secondary,
            borderColor: color.secondaryBorder,
          },
        },
        defaultInteract: {
          palette: {
            color: color.onSecondary,
            backgroundColor: color.secondaryInteract,
            borderColor: color.secondaryBorderInteract,
          },
        },
      },
    },
  },
};
