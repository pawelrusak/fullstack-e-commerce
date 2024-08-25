import { component } from './component-theme';

describe('Component theme config', () => {
  describe('Component Brand theme config', () => {
    it('should have the correct structure and types', () => {
      const { brand } = component;

      expect(brand).toEqual({
        base: {
          svgText: {
            fill: expect.any(String),
          },
          svgDot: {
            fill: expect.any(String),
          },
        },
      });
    });

    it('should match the specified values', () => {
      const { brand } = component;

      expect(brand).toMatchInlineSnapshot(`
        {
          "base": {
            "svgDot": {
              "fill": "hsl(7, 100%, 65%)",
            },
            "svgText": {
              "fill": "hsl(0, 0%, 19%)",
            },
          },
        }
      `);
    });
  });
});
