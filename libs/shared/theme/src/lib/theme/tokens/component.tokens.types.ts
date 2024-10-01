import type {
  AvailableComponentToken,
  ImmutableBaseToken,
  ModifierStateMap,
  DefaultModifier,
  InteractState,
  InitialState,
  StateStyleMap,
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
 *                                     Button Component Tokens
 * **********************************************************************************************
 */
export type ButtonComponentPalette = AvailableComponentToken<
  'color' | 'backgroundColor' | 'borderColor'
>;

type ButtonVariantNamespaceKey = 'variant';

type ButtonOutlineNamespaceKey = 'outline';

export type ButtonBaseColorVariant = 'primary' | 'secondary';

type ButtonVariant =
  | ButtonBaseColorVariant
  | `${ButtonOutlineNamespaceKey}-${ButtonBaseColorVariant}`;

export type ButtonVariantModifier =
  `${ButtonVariantNamespaceKey}-${ButtonVariant}`;

type ButtonState = InitialState | InteractState | 'disabled';

type ButtonRootVariantTokenMap = ModifierStateMap<
  ButtonVariantModifier,
  StateStyleMap<ButtonState, ButtonComponentPalette>
>;

type ButtonSizeNamespaceKey = 'size';

export type ButtonSize = 'small' | 'large';

export type ButtonSizeModifier =
  | `${ButtonSizeNamespaceKey}-${ButtonSize}`
  | `${ButtonSizeNamespaceKey}-${DefaultModifier}`;

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

export type BreadcrumbComponentLinkPalette = AvailableComponentToken<'color'>;

type BreadcrumbLinkTokenMap = ModifierStateMap<
  DefaultModifier,
  StateStyleMap<InitialState | InteractState, BreadcrumbComponentLinkPalette>
>;

export type BreadcrumbComponent = {
  breadcrumb: {
    root: ImmutableBaseToken<'backgroundColor'>;
    link: ImmutableBaseToken<'fontFamily' | 'backgroundColor'> &
      BreadcrumbLinkTokenMap;
  };
};

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

export type AppComponent = BrandComponent &
  ButtonComponent &
  BreadcrumbComponent &
  CardsSectionComponent &
  DividerComponent &
  CheckboxComponent &
  FieldComponent;
