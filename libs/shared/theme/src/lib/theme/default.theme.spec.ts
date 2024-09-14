import { defaultTheme } from './default.theme';

describe('Default Theme', () => {
  it('should have the correct structure and types', () => {
    expect(defaultTheme).toEqual({
      color: expect.any(Object),
      fontFamily: expect.any(Object),
      fontWeight: expect.any(Object),
      space: expect.any(Object),
      screens: expect.any(Object),
      component: expect.any(Object),
    });
  });

  it('should match the specified values', () => {
    expect(defaultTheme).toMatchSnapshot();
  });
});
