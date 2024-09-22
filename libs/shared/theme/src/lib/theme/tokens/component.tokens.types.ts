import type { CSSProperties } from 'react';

type AvailableComponentToken<CSSProps extends keyof CSSProperties> = {
  [P in CSSProps]: CSSProperties[P];
};

/**
 * **********************************************************************************************
 *                                     Brand Component Tokens
 * **********************************************************************************************
 */
export type BrandAccentThemeVariant = 'primary' | 'secondary';
export type BrandBaseThemeVariant = 'default' | 'invert';

type BrandSVGTokenMap<TVariant extends string> = Record<
  TVariant,
  {
    initial: AvailableComponentToken<'fill'>;
  }
>;

export type BrandComponent = {
  brand: {
    svgText: BrandSVGTokenMap<BrandBaseThemeVariant>;
    svgDot: BrandSVGTokenMap<BrandAccentThemeVariant>;
  };
};

/**
 * **********************************************************************************************
 *                                     Button Component Tokens
 * **********************************************************************************************
 */
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

export type CardsSectionComponent = {
  cardsSection: {
    root: {
      base: {
        palette: AvailableComponentToken<'backgroundColor'>;
      };
    };
    title: {
      base: {
        palette: AvailableComponentToken<'color'>;
      } & AvailableComponentToken<'fontFamily' | 'fontWeight'>;
    };
    readMoreLink: {
      base: AvailableComponentToken<'fontWeight' | 'fontFamily'>;
      variant: {
        default: {
          palette: AvailableComponentToken<'color'>;
        };
        interact: {
          palette: AvailableComponentToken<'color'>;
        };
      };
    };
    body: {
      base: {
        palette: AvailableComponentToken<'backgroundColor' | 'color'>;
      };
    };
  };
};

export type DividerComponent = {
  divider: {
    base: {
      palette: AvailableComponentToken<'borderColor'>;
    };
  };
};

export type CheckboxComponentPalette = AvailableComponentToken<
  'backgroundColor' | 'borderColor'
>;

export type CheckboxComponent = {
  checkbox: {
    root: {
      variant: {
        default: {
          state: {
            default: {
              palette: CheckboxComponentPalette;
            };
            interact: {
              palette: CheckboxComponentPalette;
            };
            checked: {
              palette: CheckboxComponentPalette;
            };
          };
        };
      };
    };
    indicator: {
      base: {
        palette: AvailableComponentToken<'color'>;
      };
    };
  };
};

export type AppComponent = BrandComponent &
  ButtonComponent &
  BreadcrumbComponent &
  CardsSectionComponent &
  DividerComponent &
  CheckboxComponent;
