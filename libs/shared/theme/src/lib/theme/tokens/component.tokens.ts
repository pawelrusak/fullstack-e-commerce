import { transparentize } from 'polished';
import { adjustCssUnitValue } from '@e-shop/utils';
import { colorPalette } from './color-palette.reference.tokens';
import { color, fontFamily, fontWeight, space } from './system.tokens';

import type { AppComponent } from './component.tokens.types';

const BUTTON_BORDER_WIDTH = 0.1;

function subtractBorder(value: string) {
  return adjustCssUnitValue(value, -BUTTON_BORDER_WIDTH);
}

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
    root: {
      _base: {
        fontFamily: fontFamily.primary,
        fontWeight: fontWeight.bold,
      },
      'size-small': {
        initial: {
          padding: `${subtractBorder(space[2])} ${subtractBorder(space[4])}`,
          fontSize: '1.6rem',
          lineHeight: '2.4rem',
        },
      },
      'size-default': {
        initial: {
          padding: `${subtractBorder(space[3])} ${subtractBorder(space[7])}`,
          fontSize: '2rem',
          lineHeight: '3rem',
        },
      },
      'size-large': {
        initial: {
          padding: `${subtractBorder(space[5])} ${subtractBorder(space[9])}`,
          fontSize: '2rem',
          lineHeight: '3rem',
        },
      },
      'variant-primary': {
        initial: {
          color: color.onPrimary,
          backgroundColor: color.primary,
          borderColor: color.primaryBorder,
        },
        interact: {
          color: color.onPrimary,
          backgroundColor: color.primaryInteract,
          borderColor: color.primaryBorderInteract,
        },
        disabled: {
          color: color.onPrimary,
          backgroundColor: color.primaryDisabled,
          borderColor: color.primaryBorderDisabled,
        },
      },
      'variant-secondary': {
        initial: {
          color: color.onSecondary,
          backgroundColor: color.secondary,
          borderColor: color.secondaryBorder,
        },
        interact: {
          color: color.onSecondary,
          backgroundColor: color.secondaryInteract,
          borderColor: color.secondaryBorderInteract,
        },
        disabled: {
          color: color.onSecondary,
          backgroundColor: color.secondaryDisabled,
          borderColor: color.secondaryBorderDisabled,
        },
      },
      'variant-outline-primary': {
        initial: {
          color: color.onPrimaryOutline,
          backgroundColor: color.primaryOutline,
          borderColor: color.primaryOutlineBorder,
        },
        interact: {
          color: color.onPrimaryOutlineInteract,
          backgroundColor: color.primaryOutlineInteract,
          borderColor: color.primaryOutlineBorderInteract,
        },
        disabled: {
          color: color.onPrimaryOutlineDisabled,
          backgroundColor: color.primaryOutlineDisabled,
          borderColor: color.primaryOutlineBorderDisabled,
        },
      },
      'variant-outline-secondary': {
        initial: {
          color: color.onSecondaryOutline,
          backgroundColor: color.secondaryOutline,
          borderColor: color.secondaryOutlineBorder,
        },
        interact: {
          color: color.onSecondaryOutlineInteract,
          backgroundColor: color.secondaryOutlineInteract,
          borderColor: color.secondaryOutlineBorderInteract,
        },
        disabled: {
          color: color.onSecondaryOutlineDisabled,
          backgroundColor: color.secondaryOutlineDisabled,
          borderColor: color.secondaryOutlineBorderDisabled,
        },
      },
    },
  },
  /**
   * Breadcrumb component tokens
   */
  breadcrumb: {
    root: {
      _base: {
        backgroundColor: 'transparent',
      },
    },
    link: {
      _base: {
        fontFamily: fontFamily.primary,
        backgroundColor: 'transparent',
      },
      default: {
        initial: {
          color: color.onBackground,
        },
        interact: {
          color: color.onBackgroundInteract,
        },
      },
    },
  },
  /**
   * Cards component tokens
   */
  cardsSection: {
    root: {
      _base: {
        backgroundColor: 'transparent',
      },
    },
    title: {
      _base: {
        color: color.onBackground,
        fontFamily: fontFamily.secondary,
        fontWeight: fontWeight.semiBold,
      },
    },
    readMoreLink: {
      _base: {
        fontFamily: fontFamily.primary,
        fontWeight: fontWeight.bold,
      },
      default: {
        initial: {
          color: color.onBackgroundLink,
        },
        interact: {
          color: color.onBackgroundLinkInteract,
        },
      },
    },
    body: {
      _base: {
        backgroundColor: 'transparent',
        color: color.onBackground,
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
  /**
   * Field component tokens
   */
  field: {
    root: {
      default: {
        initial: {
          color: color.onSurface,
        },
        invalid: {
          color: color.error,
        },
      },
    },
    label: {
      _base: {
        fontWeight: fontWeight.bold,
      },
    },
    labelAsterisk: {
      _base: {
        color: color.primary,
      },
    },
    controlInput: {
      default: {
        initial: {
          color: color.onSurface,
          borderColor: colorPalette.neutral[300],
          boxShadow: undefined,
        },
        focus: {
          color: undefined,
          borderColor: color.primary,
          boxShadow: `0 0 0 0.3rem ${transparentize(0.4, color.primary)}`,
        },
        invalid: {
          color: color.error,
          borderColor: color.error,
          boxShadow: undefined,
        },
      },
    },
    controlInputPlaceholder: {
      _base: {
        fontFamily: fontFamily.primary,
        fontWeight: fontWeight.regular,
      },
      default: {
        initial: {
          color: color.onSurface,
        },
        invalid: {
          color: color.error,
        },
      },
    },
    helpText: {
      _base: {
        fontSize: '1.6rem',
        lineHeight: '2.4rem',
      },
    },
    errorText: {
      _base: {
        color: color.error,
      },
    },
  },
};
