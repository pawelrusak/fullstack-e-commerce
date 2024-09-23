import type { CSSProperties } from 'react';

export type AvailableComponentToken<CSSProps extends keyof CSSProperties> = {
  [P in CSSProps]: CSSProperties[P];
};

export type DefaultModifier = 'default';

export type InitialState = 'initial';

export type StateStyleMap<
  TState extends string = InitialState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TTokens extends CSSProperties = any,
> = Record<TState, TTokens>;

export type ModifierStateMap<
  TModifier extends string,
  TStateTokenMap extends StateStyleMap,
> = Record<TModifier, TStateTokenMap>;

export type ImmutableBaseToken<TToken extends keyof CSSProperties> = Record<
  '_base',
  AvailableComponentToken<TToken>
>;
