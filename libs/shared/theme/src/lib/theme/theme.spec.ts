import theme from './theme';

describe('Theme config', () => {
  it('should have the correct structure and types', () => {
    expect(theme).toEqual({
      color: expect.any(Object),
      fontFamily: expect.any(Object),
      fontWeight: expect.any(Object),
      space: expect.arrayContaining([expect.any(Number)]),
      screens: expect.any(Object),
      component: expect.any(Object),
    });
  });

  it('should match the specified values', () => {
    expect(theme).toMatchSnapshot();
  });
});
