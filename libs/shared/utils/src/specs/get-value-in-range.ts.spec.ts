import { getValueInRange } from '../lib/get-value-in-range';

describe('getValueInRange', () => {
  it('should return the same value if both boundaries are undefined', () => {
    expect(getValueInRange(50)).toBe(50);
  });

  it('should return the value if within the given range', () => {
    expect(getValueInRange(5, { min: 1, max: 10 })).toBe(5);
  });

  it('should return the min value if the input is less than min', () => {
    expect(getValueInRange(-1, { min: 0, max: 10 })).toBe(0);
  });

  it('should return the max value if the input is greater than max', () => {
    expect(getValueInRange(11, { min: 0, max: 10 })).toBe(10);
  });

  it('should handle undefined min boundary', () => {
    expect(getValueInRange(-1, { max: 10 })).toBe(-1);
  });

  it('should handle undefined max boundary', () => {
    expect(getValueInRange(12, { min: 0 })).toBe(12);
  });

  it('should handle very large values appropriately', () => {
    expect(getValueInRange(10, { min: 1, max: 9 })).toBe(9);
  });

  it('should handle very small values appropriately', () => {
    expect(getValueInRange(-10, { min: -9, max: 9 })).toBe(-9);
  });
});
