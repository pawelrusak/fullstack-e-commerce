import { isNumericValue } from '../is-numeric-value';
import { getCSSValueNumber } from './get-css-value-number';
import { getCSSValueUnit } from './get-css-value-unit';
import { isCssValueWithUnit } from './is-css-value-with-unit';

const NUMERIC_ZERO = 0;
const STRING_ZERO = '0';

type AdjustCssValueOptions = {
  fallbackUnit?: string;
};

export function adjustCssUnitValue(
  value: string | number,
  adjustment: number,
  options: AdjustCssValueOptions = { fallbackUnit: 'rem' },
) {
  if (
    value !== STRING_ZERO &&
    value !== NUMERIC_ZERO &&
    isCssValueWithUnit(value) === false &&
    typeof value !== 'number'
  ) {
    return value;
  }
  const numberValue = getCSSValueNumber(value);
  const newValue = numberValue + adjustment;

  if (newValue === NUMERIC_ZERO) {
    return NUMERIC_ZERO;
  }

  const unit = getCSSValueUnit(value as string);

  const result = `${newValue}${unit}`;

  if (!isCssValueWithUnit(result) && isNumericValue(result)) {
    return `${newValue}${options.fallbackUnit}`;
  }

  return result;
}
