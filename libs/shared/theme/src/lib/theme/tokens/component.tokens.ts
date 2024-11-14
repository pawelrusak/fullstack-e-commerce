import { transparentize, lighten } from 'polished';
import { adjustCssUnitValue, getCSSValueNumber } from '@e-shop/utils';
import { colorPalette } from './color-palette.reference.tokens';
import {
  color,
  fontFamily,
  fontWeight,
  fontSizes,
  lineHeights,
  space,
} from './system.tokens';

import type { AppComponent } from './component.tokens.types';

const LAYOUT_WIDTH = '152rem';

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
      'size-medium': {
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
        fontSize: fontSizes.h7,
        lineHeight: lineHeights.h7,
      },
      default: {
        initial: {
          color: color.onBackground,
        },
        interact: {
          color: color.onBackgroundInteract,
        },
      },
      isCurrent: {
        initial: {
          fontWeight: fontWeight.regular,
        },
        current: {
          fontWeight: fontWeight.bold,
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
  /**
   * Footer component tokens
   */
  footer: {
    root: {
      _base: {
        borderTopColor: colorPalette.neutral[300],
      },
    },
    navSectionTitle: {
      _base: {
        color: color.onSurface,
        fontFamily: fontFamily.secondary,
        fontWeight: fontWeight.semiBold,
      },
    },
    navSectionListItemLink: {
      default: {
        initial: {
          color: color.onSurface,
        },
        interact: {
          color: color.onSurfaceInteract,
        },
      },
    },
    navSectionListItemIcon: {
      _base: {
        // Exception: Color not in palette; based on onSurface color with adjusted opacity in design.
        color: transparentize(0.25, color.onSurface),
      },
    },
    copyrightBar: {
      _base: {
        borderTopColor: colorPalette.neutral[300],
      },
    },
    copyrightBarFormula: {
      _base: {
        color: color.onSurface,
      },
    },
    copyrightBarListItemLink: {
      default: {
        initial: {
          color: color.onSurface,
        },
        interact: {
          color: color.onSurfaceInteract,
        },
      },
    },
    copyrightBarListItemSeparator: {
      _base: {
        backgroundColor: colorPalette.neutral[300],
      },
    },
  },
  /**
   * Cart component tokens
   */
  cart: {
    tableHead: {
      _base: {
        backgroundColor: color.secondarySurface,
        color: color.onSecondarySurface,
        fontWeight: fontWeight.bold,
        textTransform: 'uppercase',
        fontFamily: fontFamily.primary,
        fontSize: fontSizes.h6,
        lineHeight: lineHeights.h6,
      },
    },
    tableBody: {
      default: {
        initial: {
          borderColor: 'transparent',
        },
        interact: {
          borderColor: colorPalette.neutral[300],
        },
      },
    },
    tableProductThumbnail: {
      _base: {
        backgroundColor: color.surfacePlaceholder,
      },
    },
    tableProductCategory: {
      _base: {
        fontSize: fontSizes.h8,
        lineHeight: lineHeights.h8,
        textTransform: 'uppercase',
      },
    },
    tableProductName: {
      _base: {
        fontSize: fontSizes.h4,
        lineHeight: lineHeights.h4,
        fontWeight: fontWeight.semiBold,
        fontFamily: fontFamily.secondary,
      },
    },
    tableProductVariantLabel: {
      _base: {
        fontSize: fontSizes.h6,
        lineHeight: lineHeights.h6,
        fontWeight: fontWeight.bold,
      },
    },
    tableProductVariantDetails: {
      _base: {
        fontSize: fontSizes.h7,
        lineHeight: lineHeights.h7,
        fontWeight: fontWeight.regular,
      },
    },
    tableProductPrice: {
      _base: {
        fontSize: fontSizes.h4,
        lineHeight: lineHeights.h4,
        fontWeight: fontWeight.semiBold,
        fontFamily: fontFamily.secondary,
      },
    },
    tableProductQuantityInput: {
      _base: {
        fontSize: fontSizes.h6,
        fontWeight: fontWeight.bold,
        fontFamily: fontFamily.primary,
        lineHeight: lineHeights.h6,
        backgroundColor: color.secondarySurface,
        color: color.onSecondarySurface,
      },
    },
    tableProductQuantityButton: {
      default: {
        initial: {
          color: color.onSurface,
        },
        interact: {
          color: color.onSurfaceInteract,
        },
        disabled: {
          color: colorPalette.neutral[400],
        },
      },
    },
    summaryCouponSection: {
      _base: {
        borderColor: colorPalette.neutral[300],
        lineHeight: lineHeights.h7,
        fontSize: fontSizes.h7,
        fontWeight: fontWeight.regular,
        fontFamily: fontFamily.primary,
        backgroundColor: color.surface,
        // Exception: Color not in palette; based on onSurface color with adjusted opacity in design.
        color: transparentize(0.25, color.onSurface),
      },
    },
    summaryCouponApplyButton: {
      _base: {
        fontWeight: fontWeight.semiBold,
        fontSize: fontSizes.h4,
        fontFamily: fontFamily.secondary,
        lineHeight: lineHeights.h4,
      },
      default: {
        initial: {
          color: color.onSurface,
        },
        interact: {
          color: color.onSurfaceInteract,
        },
      },
    },
    subtotalSection: {
      _base: {
        backgroundColor: color.secondarySurface,
      },
    },
    subtotalLabel: {
      _base: {
        fontWeight: fontWeight.bold,
        fontSize: fontSizes.h6,
        lineHeight: lineHeights.h6,
        fontFamily: fontFamily.primary,
        textTransform: 'uppercase',
        color: color.onSecondarySurface,
      },
    },
    subtotalPrice: {
      _base: {
        fontFamily: fontFamily.secondary,
        fontSize: fontSizes.h3,
        lineHeight: lineHeights.h3,
        fontWeight: fontWeight.semiBold,
        color: color.onSecondarySurfaceVariant,
      },
    },
    subtotalAdditionalInfo: {
      _base: {
        fontSize: fontSizes.h8,
        lineHeight: lineHeights.h8,
        fontFamily: fontFamily.primary,
        fontWeight: fontWeight.regular,
        color: color.onSecondarySurface,
      },
    },
    emptyStateIcon: {
      _base: {
        color: color.onSurfaceVariant,
        scale: 2.5,
        height: '3rem',
        width: '3rem',
        marginBottom: space[6],
      },
    },
    emptyStateTitle: {
      _base: {
        fontSize: fontSizes.h2,
        lineHeight: lineHeights.h2,
        fontWeight: fontWeight.semiBold,
        fontFamily: fontFamily.secondary,
        color: color.onSurface,
      },
    },
    emptyStateParagraph: {
      _base: {
        fontSize: fontSizes.body,
        lineHeight: lineHeights.body,
        fontWeight: fontWeight.regular,
        fontFamily: fontFamily.primary,
        color: color.onSurface,
      },
    },
  },
  /**
   * Cart component tokens
   */
  iconButton: {
    root: {
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
          backgroundColor: colorPalette.neutral[0],
          borderColor: color.primaryOutlineBorder,
        },
        interact: {
          color: color.onPrimaryOutlineInteract,
          backgroundColor: color.primaryOutlineInteract,
          borderColor: color.primaryOutlineBorderInteract,
        },
        disabled: {
          color: color.onPrimaryOutlineDisabled,
          backgroundColor: colorPalette.neutral[0],
          borderColor: color.primaryOutlineBorderDisabled,
        },
      },
      'variant-outline-secondary': {
        initial: {
          color: color.onSecondaryOutline,
          backgroundColor: colorPalette.neutral[0],
          borderColor: color.secondaryOutlineBorder,
        },
        interact: {
          color: color.onSecondaryOutlineInteract,
          backgroundColor: color.secondaryOutlineInteract,
          borderColor: color.secondaryOutlineBorderInteract,
        },
        disabled: {
          color: color.onSecondaryOutlineDisabled,
          backgroundColor: colorPalette.neutral[0],
          borderColor: color.secondaryOutlineBorderDisabled,
        },
      },
      'size-small': {
        initial: {
          width: '4rem',
          height: '4rem',
        },
      },
      'size-medium': {
        initial: {
          width: '5rem',
          height: '5rem',
        },
      },
      'size-large': {
        initial: {
          width: '6.4rem',
          height: '6.4rem',
        },
      },
    },
  },
  gallery: {
    buttonListBackdrop: {
      _base: {
        borderColor: colorPalette.neutral[300],
        backgroundColor: transparentize(0.75, colorPalette.neutral[0]),
      },
    },
  },
  heading: {
    root: {
      _base: {
        color: color.onBackground,
      },
      'level-1': {
        initial: {
          fontSize: fontSizes.h1,
          fontWeight: fontWeight.bold,
          fontFamily: fontFamily.secondary,
          lineHeight: lineHeights.h1,
        },
      },
      'level-2': {
        initial: {
          fontSize: fontSizes.h2,
          fontWeight: fontWeight.semiBold,
          fontFamily: fontFamily.secondary,
          lineHeight: lineHeights.h2,
        },
      },
      'level-3': {
        initial: {
          fontSize: fontSizes.h3,
          fontWeight: fontWeight.semiBold,
          fontFamily: fontFamily.secondary,
          lineHeight: lineHeights.h3,
        },
      },
      'level-4': {
        initial: {
          fontSize: fontSizes.h4,
          fontWeight: fontWeight.semiBold,
          fontFamily: fontFamily.secondary,
          lineHeight: lineHeights.h4,
        },
      },
      'level-5': {
        initial: {
          fontSize: fontSizes.h5,
          fontWeight: fontWeight.bold,
          fontFamily: fontFamily.primary,
          lineHeight: lineHeights.h5,
        },
      },
      'level-6': {
        initial: {
          fontSize: fontSizes.h6,
          fontWeight: fontWeight.bold,
          fontFamily: fontFamily.primary,
          lineHeight: lineHeights.h6,
        },
      },
      'level-7': {
        initial: {
          fontSize: fontSizes.h7,
          fontWeight: fontWeight.regular,
          fontFamily: fontFamily.primary,
          lineHeight: lineHeights.h7,
        },
      },
      'level-8': {
        initial: {
          fontSize: fontSizes.h8,
          fontWeight: fontWeight.regular,
          fontFamily: fontFamily.primary,
          lineHeight: lineHeights.h8,
        },
      },
    },
  },
  heroSection: {
    root: {
      _base: {
        backgroundColor: color.secondarySurface,
      },
    },
    title: {
      _base: {
        color: color.onSecondarySurface,
        fontFamily: fontFamily.secondary,
        fontWeight: fontWeight.bold,
        fontSize: '3rem',
        lineHeight: 36 / 30,
        smFontSize: '4.8rem',
        smLineHeight: 58 / 48,
        lgFontSize: fontSizes.h1,
        lgLineHeight: lineHeights.h1,
      },
    },
    description: {
      _base: {
        color: color.onSecondarySurface,
        fontFamily: fontFamily.primary,
        fontWeight: fontWeight.regular,
        fontSize: fontSizes.h7,
        lineHeight: lineHeights.h7,
        lgFontSize: fontSizes.body,
        lgLineHeight: lineHeights.body,
      },
    },
  },
  layoutWrapper: {
    root: {
      _base: {
        maxWidth: undefined,
        /**
         * @layoutWidth 152rem
         * @layoutPaddingLeft 2rem (in component)
         * @layoutPaddingRight 2rem (in component)
         *
         * @layoutWidth + @layoutPaddingLeft + @layoutPaddingRight = 156rem
         */
        smMaxWidth: `${getCSSValueNumber(LAYOUT_WIDTH) + 4}rem`,
      },
    },
  },
  navbar: {
    root: {
      _base: {
        color: color.onSurface,
      },
    },
    subBarContainer: {
      _base: {
        maxWidth: undefined,
        /**
         * @layoutWidth 152rem
         * @layoutPaddingLeft 2rem (in component)
         * @layoutPaddingRight 2rem (in component)
         *
         * @layoutWidth + @layoutPaddingLeft + @layoutPaddingRight = 156rem
         */
        smMaxWidth: `${getCSSValueNumber(LAYOUT_WIDTH) + 4}rem`,
      },
    },
    contactBarRoot: {
      _base: {
        mdBorderColor: colorPalette.neutral[300],
      },
    },
    contactBarListItem: {
      _base: {
        borderColor: colorPalette.neutral[300],
        fontFamily: fontFamily.primary,
        fontSize: fontSizes.h8,
        lineHeight: lineHeights.h8,
        fontWeight: fontWeight.regular,
        color: color.onSurface,
      },
    },
    contactBarListItemLink: {
      default: {
        initial: {
          color: color.onSurface,
        },
        interact: {
          color: lighten(0.4, color.onSurface),
        },
      },
    },
    hamburger: {
      _base: {
        backgroundColor: colorPalette.neutral[0],
      },
    },
    productBarRoot: {
      _base: {
        backgroundColor: color.primary,
      },
    },
    productBarListItem: {
      _base: {
        color: color.onPrimary,
        fontFamily: fontFamily.primary,
        fontSize: fontSizes.h6,
        lineHeight: '3.2rem',
        fontWeight: fontWeight.bold,
      },
    },
    productBarListItemLink: {
      default: {
        initial: {
          color: color.onPrimary,
        },
        interact: {
          color: transparentize(0.25, color.onPrimary),
        },
      },
    },
    userBarRoot: {
      _base: {
        backgroundColor: color.surface,
        color: color.onSurface,
        borderBottomColor: colorPalette.neutral[300],
      },
    },
    userBarListItem: {
      _base: {
        color: color.onSurface,
        fontFamily: fontFamily.primary,
        fontSize: fontSizes.h6,
        lineHeight: lineHeights.h6,
        fontWeight: fontWeight.regular,
      },
    },
    userBarListItemIcon: {
      _base: {
        color: color.onSurface,
      },
    },
    userBarListItemStrong: {
      _base: {
        fontWeight: fontWeight.bold,
      },
    },
    userBarListItemSeparator: {
      _base: {
        backgroundColor: colorPalette.neutral[300],
      },
    },
    userBarListItemInteractive: {
      default: {
        initial: {
          color: color.onSurface,
        },
        interact: {
          color: color.onSurfaceInteract,
        },
      },
    },
    userListItemCartBadge: {
      _base: {
        fontSize: '1.2rem',
        lineHeight: 1,
        fontWeight: fontWeight.bold,
        fontFamily: fontFamily.primary,
        height: '1.8rem',
        maxWidth: '1.8rem',
        color: color.onPrimary,
        backgroundColor: color.primary,
      },
    },
  },
  panel: {
    root: {
      _base: {
        backgroundColor: color.secondarySurface,
      },
    },
    title: {
      _base: {
        color: color.onSecondarySurface,
      },
      'size-medium': {
        initial: {
          fontFamily: fontFamily.secondary,
          fontSize: fontSizes.h3,
          lineHeight: lineHeights.h3,
          fontWeight: fontWeight.semiBold,
        },
      },
      'size-small': {
        initial: {
          fontFamily: fontFamily.primary,
          fontSize: fontSizes.h5,
          lineHeight: lineHeights.h5,
          fontWeight: fontWeight.bold,
        },
      },
    },
  },
  paragraph: {
    root: {
      _base: {
        color: color.onBackground,
        fontFamily: fontFamily.primary,
        fontSize: fontSizes.body,
        lineHeight: lineHeights.body,
        fontWeight: fontWeight.regular,
      },
    },
  },
  badge: {
    root: {
      _base: {
        backgroundColor: color.primary,
        color: color.onPrimary,
        fontFamily: fontFamily.secondary,
        fontWeight: fontWeight.bold,
        lineHeight: lineHeights.h6,
        fontSize: fontSizes.h6,
      },
    },
  },
  productCard: {
    root: {
      _base: {
        color: color.onSurface,
        backgroundColor: color.surface,
      },
      default: {
        initial: {
          borderColor: 'transparent',
        },
        interact: {
          borderColor: colorPalette.neutral[300],
        },
      },
    },
    thumbnail: {
      _base: {
        backgroundColor: '#d0d0d0',
      },
    },
    category: {
      _base: {
        fontFamily: fontFamily.primary,
        fontSize: fontSizes.h8,
        lineHeight: lineHeights.h8,
        fontWeight: fontWeight.regular,
        letterSpacing: '0.3rem',
        textTransform: 'uppercase',
      },
    },
    title: {
      _base: {
        fontFamily: fontFamily.secondary,
        fontSize: fontSizes.h4,
        fontWeight: fontWeight.semiBold,
        lineHeight: lineHeights.h4,
        lineClamp: 2,
      },
    },
    currentPrice: {
      _base: {
        color: color.primary,
        fontFamily: fontFamily.secondary,
        fontSize: fontSizes.h3,
        fontWeight: fontWeight.semiBold,
        lineHeight: lineHeights.h3,
      },
    },
    pastPrice: {
      _base: {
        color: colorPalette.neutral[500],
        fontFamily: fontFamily.primary,
        fontSize: fontSizes.h7,
        lineHeight: lineHeights.h7,
        fontWeight: fontWeight.regular,
      },
    },
  },
  progressStepper: {
    listItemLink: {
      _base: {
        fontFamily: fontFamily.secondary,
        fontSize: fontSizes.h3,
        lineHeight: lineHeights.h3,
        fontWeight: fontWeight.semiBold,
      },
      default: {
        initial: {
          color: color.onBackground,
        },
        interact: {
          color: color.onBackgroundInteract,
        },
        inactive: {
          color: colorPalette.neutral[300],
        },
      },
    },
    counter: {
      _base: {
        fontFamily: fontFamily.primary,
        fontSize: fontSizes.h6,
        lineHeight: lineHeights.h6,
        fontWeight: fontWeight.bold,
        backgroundColor: color.primary,
        color: color.onPrimary,
        height: '5rem',
        width: '5rem',
      },
    },
    listItemLinkUnderline: {
      _base: {
        backgroundColor: color.primary,
      },
    },
  },
  quantitySelection: {
    input: {
      _base: {
        fontFamily: fontFamily.secondary,
        fontSize: fontSizes.h2,
        lineHeight: lineHeights.h2,
        fontWeight: fontWeight.semiBold,
        color: color.onBackground,
      },
      default: {
        initial: {
          borderColor: undefined,
        },
        interact: {
          borderColor: colorPalette.neutral[300],
        },
      },
    },
    button: {
      default: {
        initial: {
          backgroundColor: 'transparent',
          color: color.onBackground,
        },
        'initial-alter': {
          color: color.onBackground,
          backgroundColor: colorPalette.neutral[300],
        },
        interact: {
          backgroundColor: color.primary,
          color: color.onPrimary,
        },
      },
    },
  },
};
