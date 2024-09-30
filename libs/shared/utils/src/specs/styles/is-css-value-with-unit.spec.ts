import { faker } from '@faker-js/faker';
import { isCssValueWithUnit } from '../../lib/styles/is-css-value-with-unit';
import { CSS_UNITS as VALID_CSS_UNITS } from '../../lib/styles/css-units.constants';
import { NON_STRING_VALUES } from './styles.spec.constants';

describe('isCssValueWithUnit', () => {
  it.each(VALID_CSS_UNITS)(
    'should return true if the value has a valid css unit and integer numeric value',
    (unit) => {
      const value = `10${unit}`;
      const result = isCssValueWithUnit(value);
      expect(result).toBe(true);
    },
  );

  it.each(VALID_CSS_UNITS)(
    'should return true if the value has a valid css unit and float numeric value',
    (unit) => {
      const value = `1.0${unit}`;
      const result = isCssValueWithUnit(value);
      expect(result).toBe(true);
    },
  );

  it.each(VALID_CSS_UNITS)(
    'should return false if the value have string with valid css unit string',
    (unit) => {
      const randomString = faker.lorem.word();
      const value = `${randomString}${unit}`;
      const result = isCssValueWithUnit(value);
      expect(result).toBe(false);
    },
  );

  it.each(NON_STRING_VALUES)(
    'should return false if the value is not a string',
    (value) => {
      const result = isCssValueWithUnit(value);
      expect(result).toBe(false);
    },
  );
});
