import { CSS_UNITS } from './css-units.constants';

export function isCssValueWithUnit(value: unknown) {
  if (typeof value !== 'string') {
    return false;
  }

  const regex = new RegExp(`^-?\\d*\\.?\\d+(${CSS_UNITS.join('|')})$`, 'i');

  return regex.test(value);
}
