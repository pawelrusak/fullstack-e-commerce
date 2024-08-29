import type { CSSProperties } from 'react';

type AvailableComponentToken<CSSProps extends keyof CSSProperties> = {
  [P in CSSProps]: CSSProperties[P];
};

export type BrandComponent = {
  brand: {
    base: {
      svgText: AvailableComponentToken<'fill'>;
      svgDot: AvailableComponentToken<'fill'>;
    };
  };
};

export type ButtonComponentPalette = AvailableComponentToken<
  'color' | 'backgroundColor' | 'borderColor'
>;

export type ButtonComponent = {
  button: {
    base: AvailableComponentToken<'fontFamily'>;
    variant: {
      primary: {
        default: {
          palette: ButtonComponentPalette;
        };
        defaultInteract: {
          palette: ButtonComponentPalette;
        };
      };
      secondary: {
        default: {
          palette: ButtonComponentPalette;
        };
        defaultInteract: {
          palette: ButtonComponentPalette;
        };
      };
    };
  };
};

export type Component = BrandComponent & ButtonComponent;
