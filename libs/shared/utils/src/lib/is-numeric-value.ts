export function isNumericValue(value: unknown) {
  if (typeof value === 'number') {
    return true;
  }

  if (typeof value === 'string') {
    return parseFloat(value).toString() === value;
  }

  return false;
}
