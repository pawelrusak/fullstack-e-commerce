import type {
  AvailableComponentToken,
  ImmutableBaseToken,
  ModifierStateMap,
  DefaultModifier,
  InteractState,
  InitialState,
  StateStyleMap,
  Size,
} from './tokens.utils.types';

/**
 * **********************************************************************************************
 *                                     Brand Component Tokens
 * **********************************************************************************************
 */
export type BrandAccentThemeVariant = 'primary' | 'secondary';
export type BrandBaseThemeVariant = DefaultModifier | 'invert';

type BrandSVGTokenMap<TVariant extends string> = ModifierStateMap<
  TVariant,
  StateStyleMap<InitialState, AvailableComponentToken<'fill'>>
>;

export type BrandComponent = {
  brand: {
    svgText: BrandSVGTokenMap<BrandBaseThemeVariant>;
    svgDot: BrandSVGTokenMap<BrandAccentThemeVariant>;
  };
};

/**
 * **********************************************************************************************
 *                                    Button Component Tokens
 * **********************************************************************************************
 */

// Button Variant Tokens
export type ButtonComponentPalette = AvailableComponentToken<
  'color' | 'backgroundColor' | 'borderColor'
>;

export type ButtonVariantNamespaceKey = 'variant';

export type ButtonOutlineNamespaceKey = 'outline';

export type ButtonBaseColorVariant = 'primary' | 'secondary';

type ButtonVariant =
  | ButtonBaseColorVariant
  | `${ButtonOutlineNamespaceKey}-${ButtonBaseColorVariant}`;

export type ButtonVariantModifier =
  `${ButtonVariantNamespaceKey}-${ButtonVariant}`;

export type ButtonState = InitialState | InteractState | 'disabled';

type ButtonRootVariantTokenMap = ModifierStateMap<
  ButtonVariantModifier,
  StateStyleMap<ButtonState, ButtonComponentPalette>
>;

// Button Size Tokens
export type ButtonSizeNamespaceKey = 'size';

export type ButtonSize = Size;

export type ButtonSizeModifier = `${ButtonSizeNamespaceKey}-${ButtonSize}`;

export type ButtonComponentSizeProperty = AvailableComponentToken<
  'padding' | 'fontSize' | 'lineHeight'
>;

type ButtonRootSizeTokenMap = ModifierStateMap<
  ButtonSizeModifier,
  StateStyleMap<InitialState, ButtonComponentSizeProperty>
>;

export type ButtonComponent = {
  button: {
    root: ImmutableBaseToken<'fontFamily' | 'fontWeight'> &
      ButtonRootVariantTokenMap &
      ButtonRootSizeTokenMap;
  };
};

/**
 * **********************************************************************************************
 *                                   Breadcrumb Component Tokens
 * **********************************************************************************************
 */
export type BreadcrumbComponentLinkPalette = AvailableComponentToken<'color'>;

type BreadcrumbLinkTokenMap = ModifierStateMap<
  DefaultModifier,
  StateStyleMap<InitialState | InteractState, BreadcrumbComponentLinkPalette>
>;

type BreadcrumbCurrentLinkTokenMap = ModifierStateMap<
  'isCurrent',
  StateStyleMap<InitialState | 'current', AvailableComponentToken<'fontWeight'>>
>;

export type BreadcrumbComponent = {
  breadcrumb: {
    root: ImmutableBaseToken<'backgroundColor'>;
    link: ImmutableBaseToken<
      'fontFamily' | 'backgroundColor' | 'fontSize' | 'lineHeight'
    > &
      BreadcrumbLinkTokenMap &
      BreadcrumbCurrentLinkTokenMap;
  };
};

/**
 * **********************************************************************************************
 *                                 Cards Section Component Tokens
 * **********************************************************************************************
 */
type CardsSectionReadMoreLinkToken = AvailableComponentToken<'color'>;

type CardsSectionReadMoreLinkTokenMap = ModifierStateMap<
  DefaultModifier,
  StateStyleMap<InitialState | InteractState, CardsSectionReadMoreLinkToken>
>;

export type CardsSectionComponent = {
  cardsSection: {
    root: ImmutableBaseToken<'backgroundColor'>;
    title: ImmutableBaseToken<'color' | 'fontFamily' | 'fontWeight'>;
    readMoreLink: ImmutableBaseToken<'fontWeight' | 'fontFamily'> &
      CardsSectionReadMoreLinkTokenMap;
    body: ImmutableBaseToken<'backgroundColor' | 'color'>;
  };
};

export type DividerComponent = {
  divider: {
    root: ImmutableBaseToken<'borderColor'>;
  };
};

export type CheckboxComponentPalette = AvailableComponentToken<
  'backgroundColor' | 'borderColor'
>;

type CheckboxRootTokenMap = ModifierStateMap<
  DefaultModifier,
  StateStyleMap<
    InitialState | InteractState | 'checked',
    CheckboxComponentPalette
  >
>;

export type CheckboxComponent = {
  checkbox: {
    root: CheckboxRootTokenMap;
    indicator: ImmutableBaseToken<'color'>;
  };
};

/**
 * **********************************************************************************************
 *                                     Field  Component Tokens
 * **********************************************************************************************
 */
export type FieldControlInputProperty = AvailableComponentToken<'boxShadow'>;

type FieldControlInputTokenMap = ModifierStateMap<
  DefaultModifier,
  StateStyleMap<
    // TODO: add 'hover' state (and hoverFocus?)
    InitialState | 'focus' | 'invalid',
    AvailableComponentToken<'boxShadow' | 'color' | 'borderColor'>
  >
>;

type FieldRootTokenMap = ModifierStateMap<
  DefaultModifier,
  StateStyleMap<InitialState | 'invalid', AvailableComponentToken<'color'>>
>;

type FieldControlInputPlaceholderTokenMap = ModifierStateMap<
  DefaultModifier,
  StateStyleMap<InitialState | 'invalid', AvailableComponentToken<'color'>>
>;

export type FieldComponent = {
  field: {
    root: FieldRootTokenMap;
    label: ImmutableBaseToken<'fontWeight'>;
    labelAsterisk: ImmutableBaseToken<'color'>;
    controlInput: FieldControlInputTokenMap;
    controlInputPlaceholder: ImmutableBaseToken<'fontFamily' | 'fontWeight'> &
      FieldControlInputPlaceholderTokenMap;
    helpText: ImmutableBaseToken<'fontSize' | 'lineHeight'>;
    errorText: ImmutableBaseToken<'color'>;
  };
};

/**
 * **********************************************************************************************
 *                                     Footer Component Tokens
 * **********************************************************************************************
 */
type FooterListItemLinkMap = ModifierStateMap<
  DefaultModifier,
  StateStyleMap<InitialState | InteractState, AvailableComponentToken<'color'>>
>;

export type FooterComponent = {
  footer: {
    root: ImmutableBaseToken<'borderTopColor'>;
    navSectionTitle: ImmutableBaseToken<'color' | 'fontFamily' | 'fontWeight'>;
    navSectionListItemLink: FooterListItemLinkMap;
    navSectionListItemIcon: ImmutableBaseToken<'color'>;
    copyrightBar: ImmutableBaseToken<'borderTopColor'>;
    copyrightBarFormula: ImmutableBaseToken<'color'>;
    copyrightBarListItemLink: FooterListItemLinkMap;
    copyrightBarListItemSeparator: ImmutableBaseToken<'backgroundColor'>;
  };
};

/**
 * **********************************************************************************************
 *                                      Card Component Tokens
 * **********************************************************************************************
 */
type CartTableBodyMap = ModifierStateMap<
  DefaultModifier,
  StateStyleMap<
    InitialState | InteractState,
    AvailableComponentToken<'borderColor'>
  >
>;

type CartTableProductVariantProperties = ImmutableBaseToken<
  'fontSize' | 'lineHeight' | 'fontWeight'
>;

type CartTableProductQuantityButtonMap = ModifierStateMap<
  DefaultModifier,
  StateStyleMap<
    InitialState | InteractState | 'disabled',
    AvailableComponentToken<'color'>
  >
>;

type CartSummaryCouponApplyButtonMap = ModifierStateMap<
  DefaultModifier,
  StateStyleMap<InitialState | InteractState, AvailableComponentToken<'color'>>
>;

export type CartComponent = {
  cart: {
    tableHead: ImmutableBaseToken<
      | 'backgroundColor'
      | 'color'
      | 'fontWeight'
      | 'textTransform'
      | 'fontFamily'
      | 'fontSize'
      | 'lineHeight'
    >;
    tableBody: CartTableBodyMap;
    tableProductThumbnail: ImmutableBaseToken<'backgroundColor'>;
    tableProductCategory: ImmutableBaseToken<
      'fontSize' | 'lineHeight' | 'textTransform'
    >;
    tableProductName: ImmutableBaseToken<
      'fontSize' | 'lineHeight' | 'fontWeight' | 'fontFamily'
    >;
    tableProductVariantLabel: CartTableProductVariantProperties;
    tableProductVariantDetails: CartTableProductVariantProperties;
    tableProductPrice: ImmutableBaseToken<
      'fontSize' | 'lineHeight' | 'fontWeight' | 'fontFamily'
    >;
    tableProductQuantityInput: ImmutableBaseToken<
      | 'fontSize'
      | 'fontWeight'
      | 'fontFamily'
      | 'lineHeight'
      | 'backgroundColor'
      | 'color'
    >;
    tableProductQuantityButton: CartTableProductQuantityButtonMap;
    summaryCouponSection: ImmutableBaseToken<
      | 'fontWeight'
      | 'fontSize'
      | 'fontFamily'
      | 'lineHeight'
      | 'borderColor'
      | 'color'
      | 'backgroundColor'
    >;
    summaryCouponApplyButton: ImmutableBaseToken<
      'fontWeight' | 'fontSize' | 'fontFamily' | 'lineHeight'
    > &
      CartSummaryCouponApplyButtonMap;
    subtotalSection: ImmutableBaseToken<'backgroundColor'>;
    subtotalLabel: ImmutableBaseToken<
      | 'fontWeight'
      | 'fontSize'
      | 'lineHeight'
      | 'fontFamily'
      | 'color'
      | 'textTransform'
    >;
    subtotalPrice: ImmutableBaseToken<
      'fontFamily' | 'fontSize' | 'lineHeight' | 'fontWeight' | 'color'
    >;
    subtotalAdditionalInfo: ImmutableBaseToken<
      'fontSize' | 'lineHeight' | 'fontFamily' | 'fontWeight' | 'color'
    >;
  };
};

/**
 * **********************************************************************************************
 *                                  Icon Button Component Tokens
 * **********************************************************************************************
 */

// Button Variant Tokens
type IconButtonComponentPalette = AvailableComponentToken<
  'color' | 'backgroundColor' | 'borderColor'
>;

export type IconButtonVariantNamespaceKey = 'variant';

type IconButtonOutlineNamespaceKey = 'outline';

type IconButtonBaseColorVariant = 'primary' | 'secondary';

export type IconButtonVariant =
  | IconButtonBaseColorVariant
  | `${IconButtonOutlineNamespaceKey}-${IconButtonBaseColorVariant}`;

export type IconButtonVariantModifier =
  `${IconButtonVariantNamespaceKey}-${IconButtonVariant}`;

export type IconButtonState = InitialState | InteractState | 'disabled';

type IconButtonRootVariantTokenMap = ModifierStateMap<
  IconButtonVariantModifier,
  StateStyleMap<IconButtonState, IconButtonComponentPalette>
>;

// IconButton Size Tokens
export type IconButtonSizeNamespaceKey = 'size';

export type IconButtonSize = Size;

export type IconButtonSizeModifier =
  `${IconButtonSizeNamespaceKey}-${IconButtonSize}`;

type IconButtonComponentSizeProperty = AvailableComponentToken<
  'height' | 'width'
>;

type IconButtonRootSizeTokenMap = ModifierStateMap<
  IconButtonSizeModifier,
  StateStyleMap<InitialState, IconButtonComponentSizeProperty>
>;

export type IconButtonComponent = {
  iconButton: {
    root: IconButtonRootVariantTokenMap & IconButtonRootSizeTokenMap;
  };
};

export type AppComponent = BrandComponent &
  ButtonComponent &
  BreadcrumbComponent &
  CardsSectionComponent &
  DividerComponent &
  CheckboxComponent &
  FieldComponent &
  FooterComponent &
  CartComponent &
  IconButtonComponent;
