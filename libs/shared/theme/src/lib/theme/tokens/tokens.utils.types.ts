import type * as React from 'react';
import type { ScreenSize } from './shared.types';
import type { AddPrefixToKey } from '@e-shop/types';

type TopographyCSSProperties = Pick<
  React.CSSProperties,
  'fontSize' | 'lineHeight'
>;

type BoxModelCSSProperties = Pick<
  React.CSSProperties,
  | 'maxWidth'
  | 'minWidth'
  | 'widows'
  | 'maxHeight'
  | 'minHeight'
  | 'height'
  | 'padding'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'margin'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
>;

type ScreenSizeTopographyCSSProperties = AddPrefixToKey<
  TopographyCSSProperties,
  ScreenSize
>;

type ScreenSizeBoxModelCSSProperties = AddPrefixToKey<
  BoxModelCSSProperties,
  ScreenSize
>;

type TokenCSSProperties = ScreenSizeTopographyCSSProperties &
  ScreenSizeBoxModelCSSProperties &
  React.CSSProperties;

export type AvailableComponentToken<
  CSSPropertiesKey extends keyof TokenCSSProperties,
> = {
  [P in CSSPropertiesKey]: TokenCSSProperties[P];
};

export type DefaultModifier = 'default';

export type InitialState = 'initial';

export type InteractState = 'interact';

export type StateStyleMap<
  TState extends string = InitialState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TTokens extends TokenCSSProperties = any,
> = Record<TState, TTokens>;

export type ModifierStateMap<
  TModifier extends string,
  TStateTokenMap extends StateStyleMap,
> = Record<TModifier, TStateTokenMap>;

export type ImmutableBaseToken<TToken extends keyof TokenCSSProperties> =
  Record<'_base', AvailableComponentToken<TToken>>;

export type Size = 'small' | 'medium' | 'large';

export type TopographyBaseProperties =
  | 'fontFamily'
  | 'fontSize'
  | 'fontWeight'
  | 'lineHeight';
