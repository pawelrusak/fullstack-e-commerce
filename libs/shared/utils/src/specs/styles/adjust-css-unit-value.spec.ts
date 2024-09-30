import { adjustCssUnitValue } from '../../lib/styles/adjust-css-unit-value';

describe('Values Utils', () => {
  describe('adjustCssUnitValue utility', () => {
    it('should return the same value if the value does to be a css unit', () => {
      const value = 'red';
      const result = adjustCssUnitValue(value, 1);
      expect(result).toBe(value);
    });

    it('should return the adjusted value if the value is a numeric value with default unit', () => {
      const value = 10;
      const result = adjustCssUnitValue(value, 1);
      expect(result).toBe('11rem');
    });

    it('should return the numeric zero if value is numeric zero', () => {
      const numericZero = 0;
      const result = adjustCssUnitValue(numericZero, 0);
      expect(result).toBe(numericZero);
    });

    it('should return the numeric zero if the result value is string zero', () => {
      const stringZero = '0';
      const result = adjustCssUnitValue(stringZero, 0);
      expect(result).toBe(0);
    });

    it('should return the adjusted value with the same unit', () => {
      const value = '10rem';
      const result = adjustCssUnitValue(value, -1);
      expect(result).toBe('9rem');
    });

    it("should return the adjusted value with default unit if the result value isn't a zero", () => {
      const value = '0';
      const result = adjustCssUnitValue(value, 1);
      expect(result).toBe('1rem');
    });

    it('should return the adjusted value with the fallback unit', () => {
      const value = '0';
      const result = adjustCssUnitValue(value, 1, { fallbackUnit: 'px' });
      expect(result).toBe('1px');
    });

    it('should return the adjusted value with the same unit if the result value is a zero', () => {
      const value = '1rem';
      const result = adjustCssUnitValue(value, -1);
      expect(result).toBe(0);
    });
  });
});
