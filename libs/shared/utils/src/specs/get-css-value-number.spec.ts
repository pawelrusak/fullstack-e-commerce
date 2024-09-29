import { getCSSValueNumber } from '../lib/styles/get-css-value-number';
import { CSS_VALUE_TEST_CASES } from './styles.spec.constants';

describe('getCSSValueNumber', () => {
  it.each(CSS_VALUE_TEST_CASES)(
    'should return the number value of a string',
    (value, numberValue) => {
      const result = getCSSValueNumber(value);
      expect(result).toBe(numberValue);
    },
  );
});
