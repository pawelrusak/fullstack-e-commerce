import { colorPalette } from './color-palette';
import { color } from './system-theme';

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
};
