type Options = {
  max?: number;
  min?: number;
};

export function getValueInRange(value: number, { max, min }: Options = {}) {
  let valueInRange = value;

  if (max !== undefined && min !== undefined && max < min) {
    throw new RangeError('max must be greater than min!');
  }

  if (min !== undefined && value < min) {
    valueInRange = min;
  }

  if (max !== undefined && value > max) {
    valueInRange = max;
  }

  return valueInRange;
}
