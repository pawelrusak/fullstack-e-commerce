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

export type ButtonComponent = {
  button: {
    root: ImmutableBaseToken<'fontFamily' | 'fontWeight'> &
      ButtonRootVariantTokenMap;
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

export type AppComponent = BrandComponent &
  ButtonComponent &
  BreadcrumbComponent &
  CardsSectionComponent &
  DividerComponent &
  CheckboxComponent;
