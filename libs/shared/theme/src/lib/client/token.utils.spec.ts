import { setupGetThemeToken, getComponentThemeToken } from './token.utils';
import { component } from './component.tokens';
import { faker } from '@faker-js/faker';

describe('Theme token utils', () => {
  describe('setupGetThemeToken', () => {
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

  describe('getComponentThemeToken', () => {
    it('should return the same value as the component theme for valid keys', () => {
      const brandToken = getComponentThemeToken('brand.base.svgDot');

      expect(brandToken).toEqual(component.brand.base.svgDot);
    });

    it('should return undefined for invalid component keys', () => {
      const invalidToken = getComponentThemeToken('brand.base.nonExistentKey');

      expect(invalidToken).toBeUndefined();
    });
  });
});
