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
    base: AvailableComponentToken<'fontFamily' | 'fontWeight'>;
    variant: {
      primary: {
        default: {
          palette: ButtonComponentPalette;
        };
        defaultInteract: {
          palette: ButtonComponentPalette;
        };
        defaultDisabled: {
          palette: ButtonComponentPalette;
        };
        outline: {
          palette: ButtonComponentPalette;
        };
        outlineInteract: {
          palette: ButtonComponentPalette;
        };
        outlineDisabled: {
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
        defaultDisabled: {
          palette: ButtonComponentPalette;
        };
        outline: {
          palette: ButtonComponentPalette;
        };
        outlineInteract: {
          palette: ButtonComponentPalette;
        };
        outlineDisabled: {
          palette: ButtonComponentPalette;
        };
      };
    };
  };
};

export type BreadcrumbComponentLinkPalette = AvailableComponentToken<'color'>;

export type BreadcrumbComponent = {
  breadcrumb: {
    root: {
      base: AvailableComponentToken<'backgroundColor'>;
    };
    link: {
      base: AvailableComponentToken<'fontFamily' | 'backgroundColor'>;
      variant: {
        base: {
          default: {
            palette: BreadcrumbComponentLinkPalette;
          };
          defaultInteract: {
            palette: BreadcrumbComponentLinkPalette;
          };
        };
      };
    };
  };
};

export type AppComponent = BrandComponent &
  ButtonComponent &
  BreadcrumbComponent;
