import { getCSSValueUnit } from '../../lib/styles/get-css-value-unit';
import { CSS_VALUE_TEST_CASES } from './styles.spec.constants';

describe('getCSSValueUnit', () => {
  it.each(CSS_VALUE_TEST_CASES)(
    'should return the unit of a value',
    (value, _, unit) => {
      const result = getCSSValueUnit(value);
      expect(result).toBe(unit);
    },
  );
});
