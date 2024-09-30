import { getCSSValueNumber } from './get-css-value-number';

export function getCSSValueUnit(value: string) {
  const numberValue = getCSSValueNumber(value);

  const valueUnit = value.toString().replace(numberValue.toString(), '');

  return valueUnit;
}
