import { colorPalette } from './color-palette';
import { color, fontFamily } from './system-theme';

import type { AppComponent } from '@e-shop/types/theme';

export const component: AppComponent = {
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
  button: {
    base: {
      fontFamily: fontFamily.primary,
    },
    variant: {
      primary: {
        default: {
          color: color.onPrimary,
          backgroundColor: color.primary,
          borderColor: color.primaryBorder,
        },
      },
      secondary: {
        default: {
          color: color.onSecondary,
          backgroundColor: color.secondary,
          borderColor: color.secondaryBorder,
        },
      },
    },
  },
};
