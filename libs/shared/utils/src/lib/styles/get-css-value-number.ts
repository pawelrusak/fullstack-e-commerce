export function getCSSValueNumber(value: string | number) {
  const numberValue = parseFloat(value.toString());

  return numberValue;
}
