import type { CSSProperties } from 'react';

type AvailableComponentToken<CSSProps extends keyof CSSProperties> = {
  [P in CSSProps]: CSSProperties[P];
};

type ButtonComponent = {
  brand?: {
    base: {
      svgText: AvailableComponentToken<'fill'>;
      svgDot: AvailableComponentToken<'fill'>;
    };
  };
};

export type Component = ButtonComponent;
