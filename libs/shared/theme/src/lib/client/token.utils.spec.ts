import { setupGetThemeToken } from './token.utils';
import { faker } from '@faker-js/faker';

describe('setupGetToken', () => {
  it('should return specified value', () => {
    const object = {
      a: {
        b: faker.string.nanoid(),
        c: {
          d: faker.string.nanoid(),
        },
      },
    };

    const getThemeToken = setupGetThemeToken(object);

    const firstResult = getThemeToken('a.b');
    expect(firstResult).toBe(object.a.b);

    const secondResult = getThemeToken('a.c.d');
    expect(secondResult).toBe(object.a.c.d);
  });

  it('should return undefined for non-existing keys', () => {
    const object = {
      a: {
        b: faker.string.nanoid(),
      },
    };

    const getThemeToken = setupGetThemeToken(object);

    const result = getThemeToken('a.c');

    expect(result).toBeUndefined();
  });
});
