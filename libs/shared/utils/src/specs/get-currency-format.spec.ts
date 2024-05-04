import { faker } from '@faker-js/faker';
import { getCurrencyFormat } from '../lib/get-currency-format';

describe('getCurrencyFormat', () => {
  it.each([
    1,
    faker.number.int({ min: 2, max: 99 }),
    100,
    faker.number.int({ min: 101, max: 999 }),
    1000,
    faker.number.int({ min: 1001, max: 9999 }),
    10000,
    faker.number.int({ min: 10001, max: 99999 }),
    100000,
  ])('should return the default USD currency format', (rawIntegerPrice) => {
    const usdCurrencyFormatRegex = /^\$[1-9]\d{0,2}(,\d{3})*\.00$/;

    expect(getCurrencyFormat(rawIntegerPrice)).toMatch(usdCurrencyFormatRegex);
  });
});
