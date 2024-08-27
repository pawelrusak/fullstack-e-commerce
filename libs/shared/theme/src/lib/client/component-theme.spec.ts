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

  describe('Component Button theme config', () => {
    it('should have the correct structure and types', () => {
      const { button } = component;

      expect(button).toEqual({
        base: {
          fontFamily: expect.any(String),
        },
        variant: {
          primary: {
            default: {
              backgroundColor: expect.any(String),
              color: expect.any(String),
              borderColor: expect.any(String),
            },
          },
          secondary: {
            default: {
              backgroundColor: expect.any(String),
              color: expect.any(String),
              borderColor: expect.any(String),
            },
          },
        },
      });
    });

    it('should match the specified values', () => {
      const { button } = component;

      expect(button).toMatchInlineSnapshot(`
        {
          "base": {
            "fontFamily": "Montserrat, sans-serif",
          },
          "variant": {
            "primary": {
              "default": {
                "backgroundColor": "hsl(7, 100%, 65%)",
                "borderColor": "hsl(7, 100%, 65%)",
                "color": "hsl(0, 0%, 100%)",
              },
            },
            "secondary": {
              "default": {
                "backgroundColor": "hsl(0, 0%, 19%)",
                "borderColor": "hsl(0, 0%, 19%)",
                "color": "hsl(0, 0%, 100%)",
              },
            },
          },
        }
      `);
    });
  });
});
