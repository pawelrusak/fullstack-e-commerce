import type { CSSProperties } from 'react';

type AvailableComponentToken<CSSProps extends keyof CSSProperties> = {
  [P in CSSProps]: CSSProperties[P];
};

type BrandComponent = {
  brand: {
    base: {
      svgText: AvailableComponentToken<'fill'>;
      svgDot: AvailableComponentToken<'fill'>;
    };
  };
};

type ButtonComponent = {
  button?: {
    base: AvailableComponentToken<'fontFamily'>;
    variant: {
      primary: {
        default: AvailableComponentToken<
          'color' | 'backgroundColor' | 'borderColor'
        >;
      };
      secondary: {
        default: AvailableComponentToken<
          'color' | 'backgroundColor' | 'borderColor'
        >;
      };
    };
  };
};

export type Component = BrandComponent & ButtonComponent;
