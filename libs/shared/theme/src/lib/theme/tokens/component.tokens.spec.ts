import { component } from './component.tokens';

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
              palette: {
                backgroundColor: expect.any(String),
                color: expect.any(String),
                borderColor: expect.any(String),
              },
            },
            defaultInteract: {
              palette: {
                backgroundColor: expect.any(String),
                color: expect.any(String),
                borderColor: expect.any(String),
              },
            },
            defaultDisabled: {
              palette: {
                color: expect.any(String),
                backgroundColor: expect.any(String),
                borderColor: expect.any(String),
              },
            },
            outline: {
              palette: {
                color: expect.any(String),
                backgroundColor: expect.any(String),
                borderColor: expect.any(String),
              },
            },
            outlineInteract: {
              palette: {
                color: expect.any(String),
                backgroundColor: expect.any(String),
                borderColor: expect.any(String),
              },
            },
            outlineDisabled: {
              palette: {
                color: expect.any(String),
                backgroundColor: expect.any(String),
                borderColor: expect.any(String),
              },
            },
          },
          secondary: {
            default: {
              palette: {
                backgroundColor: expect.any(String),
                color: expect.any(String),
                borderColor: expect.any(String),
              },
            },
            defaultInteract: {
              palette: {
                backgroundColor: expect.any(String),
                color: expect.any(String),
                borderColor: expect.any(String),
              },
            },
            defaultDisabled: {
              palette: {
                color: expect.any(String),
                backgroundColor: expect.any(String),
                borderColor: expect.any(String),
              },
            },
            outline: {
              palette: {
                color: expect.any(String),
                backgroundColor: expect.any(String),
                borderColor: expect.any(String),
              },
            },
            outlineInteract: {
              palette: {
                color: expect.any(String),
                backgroundColor: expect.any(String),
                borderColor: expect.any(String),
              },
            },
            outlineDisabled: {
              palette: {
                color: expect.any(String),
                backgroundColor: expect.any(String),
                borderColor: expect.any(String),
              },
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
                "palette": {
                  "backgroundColor": "hsl(7, 100%, 65%)",
                  "borderColor": "hsl(7, 100%, 65%)",
                  "color": "hsl(0, 0%, 100%)",
                },
              },
              "defaultDisabled": {
                "palette": {
                  "backgroundColor": "hsl(7, 100%, 81%)",
                  "borderColor": "hsl(7, 100%, 81%)",
                  "color": "hsl(0, 0%, 100%)",
                },
              },
              "defaultInteract": {
                "palette": {
                  "backgroundColor": "hsl(7, 100%, 59%)",
                  "borderColor": "hsl(7, 100%, 59%)",
                  "color": "hsl(0, 0%, 100%)",
                },
              },
              "outline": {
                "palette": {
                  "backgroundColor": "transparent",
                  "borderColor": "hsl(7, 100%, 65%)",
                  "color": "hsl(7, 100%, 65%)",
                },
              },
              "outlineDisabled": {
                "palette": {
                  "backgroundColor": "transparent",
                  "borderColor": "hsl(0, 0%, 80%)",
                  "color": "hsl(0, 0%, 80%)",
                },
              },
              "outlineInteract": {
                "palette": {
                  "backgroundColor": "hsl(7, 100%, 59%)",
                  "borderColor": "hsl(7, 100%, 59%)",
                  "color": "hsl(0, 0%, 100%)",
                },
              },
            },
            "secondary": {
              "default": {
                "palette": {
                  "backgroundColor": "hsl(0, 0%, 19%)",
                  "borderColor": "hsl(0, 0%, 19%)",
                  "color": "hsl(0, 0%, 100%)",
                },
              },
              "defaultDisabled": {
                "palette": {
                  "backgroundColor": "hsl(0, 0%, 80%)",
                  "borderColor": "hsl(0, 0%, 80%)",
                  "color": "hsl(0, 0%, 100%)",
                },
              },
              "defaultInteract": {
                "palette": {
                  "backgroundColor": "hsl(0, 0%, 16%)",
                  "borderColor": "hsl(0, 0%, 16%)",
                  "color": "hsl(0, 0%, 100%)",
                },
              },
              "outline": {
                "palette": {
                  "backgroundColor": "transparent",
                  "borderColor": "hsl(0, 0%, 19%)",
                  "color": "hsl(0, 0%, 19%)",
                },
              },
              "outlineDisabled": {
                "palette": {
                  "backgroundColor": "transparent",
                  "borderColor": "hsl(0, 0%, 80%)",
                  "color": "hsl(0, 0%, 80%)",
                },
              },
              "outlineInteract": {
                "palette": {
                  "backgroundColor": "hsl(0, 0%, 16%)",
                  "borderColor": "hsl(0, 0%, 16%)",
                  "color": "hsl(0, 0%, 100%)",
                },
              },
            },
          },
        }
      `);
    });
  });
});
