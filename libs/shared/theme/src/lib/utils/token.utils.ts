import { get } from 'lodash';

import { theme } from '../theme';

import type { Paths } from '@e-shop/types';

export function setupGetThemeToken<TTheme extends object>(theme: TTheme) {
  return function getToken<TToken extends string = Paths<TTheme>>(
    token: TToken,
  ) {
    return get(theme, token);
  };
}

export const getComponentThemeToken = setupGetThemeToken(theme.component);
