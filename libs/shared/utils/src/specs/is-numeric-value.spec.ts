import { isNumericValue } from '../lib/is-numeric-value';

const NUMERIC_VALUES = [0, 1, 1.1, -1, -1.1, '0', '1', '1.1', '-1', '-1.1'];
const NON_NUMERIC_VALUES = ['red', '1px', '1rem', '1em', '1%', '1vw', '1vh'];

describe('isNumericValue', () => {
  it.each(NUMERIC_VALUES)(
    'should return true for %p numeric value',
    (value) => {
      expect(isNumericValue(value)).toBe(true);
    },
  );

  it.each(NON_NUMERIC_VALUES)(
    'should return false for %p non-numeric value',
    (value) => {
      expect(isNumericValue(value)).toBe(false);
    },
  );
});
