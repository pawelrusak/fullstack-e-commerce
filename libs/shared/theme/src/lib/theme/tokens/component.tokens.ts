import { colorPalette } from './color-palette.reference.tokens';
import { color, fontFamily, fontWeight } from './system.tokens';

import type { AppComponent } from './component.tokens.types';

export const component: AppComponent = {
  /**
   * Brand component tokens
   */
  brand: {
    svgText: {
      default: {
        initial: {
          fill: colorPalette.neutral[800],
        },
      },
      invert: {
        initial: {
          fill: colorPalette.neutral[0],
        },
      },
    },
    svgDot: {
      primary: {
        initial: {
          fill: color.primary,
        },
      },
      secondary: {
        initial: {
          fill: color.secondary,
        },
      },
    },
  },
  /**
   * Button component tokens
   */
  button: {
    base: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.bold,
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
        defaultDisabled: {
          palette: {
            color: color.onPrimary,
            backgroundColor: color.primaryDisabled,
            borderColor: color.primaryBorderDisabled,
          },
        },
        outline: {
          palette: {
            color: color.onPrimaryOutline,
            backgroundColor: color.primaryOutline,
            borderColor: color.primaryOutlineBorder,
          },
        },
        outlineInteract: {
          palette: {
            color: color.onPrimaryOutlineInteract,
            backgroundColor: color.primaryOutlineInteract,
            borderColor: color.primaryOutlineBorderInteract,
          },
        },
        outlineDisabled: {
          palette: {
            color: color.onPrimaryOutlineDisabled,
            backgroundColor: color.primaryOutlineDisabled,
            borderColor: color.primaryOutlineBorderDisabled,
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
        defaultDisabled: {
          palette: {
            color: color.onSecondary,
            backgroundColor: color.secondaryDisabled,
            borderColor: color.secondaryBorderDisabled,
          },
        },
        outline: {
          palette: {
            color: color.onSecondaryOutline,
            backgroundColor: color.secondaryOutline,
            borderColor: color.secondaryOutlineBorder,
          },
        },
        outlineInteract: {
          palette: {
            color: color.onSecondaryOutlineInteract,
            backgroundColor: color.secondaryOutlineInteract,
            borderColor: color.secondaryOutlineBorderInteract,
          },
        },
        outlineDisabled: {
          palette: {
            color: color.onSecondaryOutlineDisabled,
            backgroundColor: color.secondaryOutlineDisabled,
            borderColor: color.secondaryOutlineBorderDisabled,
          },
        },
      },
    },
  },
  /**
   * Breadcrumb component tokens
   */
  breadcrumb: {
    root: {
      base: {
        backgroundColor: 'transparent',
      },
    },
    link: {
      base: {
        fontFamily: fontFamily.primary,
        backgroundColor: 'transparent',
      },
      variant: {
        base: {
          default: {
            palette: {
              color: color.onBackground,
            },
          },
          defaultInteract: {
            palette: {
              color: color.onBackgroundInteract,
            },
          },
        },
      },
    },
  },
  /**
   * Cards component tokens
   */
  cardsSection: {
    root: {
      base: {
        palette: {
          backgroundColor: 'transparent',
        },
      },
    },
    title: {
      base: {
        palette: {
          color: color.onBackground,
        },
        fontFamily: fontFamily.secondary,
        fontWeight: fontWeight.semiBold,
      },
    },
    readMoreLink: {
      base: {
        fontFamily: fontFamily.primary,
        fontWeight: fontWeight.bold,
      },
      variant: {
        default: {
          palette: {
            color: color.onBackgroundLink,
          },
        },
        interact: {
          palette: {
            color: color.onBackgroundLinkInteract,
          },
        },
      },
    },
    body: {
      base: {
        palette: {
          backgroundColor: 'transparent',
          color: color.onBackground,
        },
      },
    },
  },
  /**
   * Divider component tokens
   */
  divider: {
    root: {
      _base: {
        borderColor: colorPalette.secondary[50],
      },
    },
  },
  /**
   * Checkbox component tokens
   */
  checkbox: {
    root: {
      default: {
        initial: {
          backgroundColor: 'transparent',
          borderColor: colorPalette.neutral[800],
        },
        interact: {
          backgroundColor: color.primaryInteract,
          borderColor: color.primaryInteract,
        },
        checked: {
          backgroundColor: color.primary,
          borderColor: color.primary,
        },
      },
    },
    indicator: {
      _base: {
        color: color.onPrimary,
      },
    },
  },
};
