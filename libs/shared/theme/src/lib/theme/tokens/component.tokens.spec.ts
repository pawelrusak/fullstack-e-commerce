import { component } from './component.tokens';

describe('Component theme config', () => {
  describe('Component Brand theme config', () => {
    it('should have the correct structure and types', () => {
      const { brand } = component;

      expect(brand).toEqual({
        svgText: {
          default: {
            initial: {
              fill: expect.any(String),
            },
          },
          invert: {
            initial: {
              fill: expect.any(String),
            },
          },
        },
        svgDot: {
          primary: {
            initial: {
              fill: expect.any(String),
            },
          },
          secondary: {
            initial: {
              fill: expect.any(String),
            },
          },
        },
      });
    });

    it('should match the specified values', () => {
      const { brand } = component;

      expect(brand).toMatchInlineSnapshot(`
        {
          "svgDot": {
            "primary": {
              "initial": {
                "fill": "hsl(7, 100%, 65%)",
              },
            },
            "secondary": {
              "initial": {
                "fill": "hsl(0, 0%, 19%)",
              },
            },
          },
          "svgText": {
            "default": {
              "initial": {
                "fill": "hsl(0, 0%, 19%)",
              },
            },
            "invert": {
              "initial": {
                "fill": "hsl(0, 0%, 100%)",
              },
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
          fontWeight: expect.any(Number),
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
            "fontWeight": 700,
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

  describe('Component Breadcrumb theme config', () => {
    it('should have the correct structure and types', () => {
      const { breadcrumb } = component;

      expect(breadcrumb).toEqual({
        root: {
          base: {
            backgroundColor: expect.any(String),
          },
        },
        link: {
          base: {
            fontFamily: expect.any(String),
            backgroundColor: expect.any(String),
          },
          variant: {
            base: {
              default: {
                palette: {
                  color: expect.any(String),
                },
              },
              defaultInteract: {
                palette: {
                  color: expect.any(String),
                },
              },
            },
          },
        },
      });
    });

    it('should match the specified values', () => {
      const { breadcrumb } = component;

      expect(breadcrumb).toMatchInlineSnapshot(`
        {
          "link": {
            "base": {
              "backgroundColor": "transparent",
              "fontFamily": "Montserrat, sans-serif",
            },
            "variant": {
              "base": {
                "default": {
                  "palette": {
                    "color": "hsl(0, 0%, 19%)",
                  },
                },
                "defaultInteract": {
                  "palette": {
                    "color": "hsl(7, 100%, 65%)",
                  },
                },
              },
            },
          },
          "root": {
            "base": {
              "backgroundColor": "transparent",
            },
          },
        }
      `);
    });
  });

  describe('Component CardsSection theme config', () => {
    it('should have the correct structure and types', () => {
      const { cardsSection } = component;

      expect(cardsSection).toEqual({
        root: {
          base: {
            palette: {
              backgroundColor: expect.any(String),
            },
          },
        },
        title: {
          base: {
            palette: {
              color: expect.any(String),
            },
            fontFamily: expect.any(String),
            fontWeight: expect.any(Number),
          },
        },
        readMoreLink: {
          base: {
            fontFamily: expect.any(String),
            fontWeight: expect.any(Number),
          },
          variant: {
            default: {
              palette: {
                color: expect.any(String),
              },
            },
            interact: {
              palette: {
                color: expect.any(String),
              },
            },
          },
        },
        body: {
          base: {
            palette: {
              backgroundColor: expect.any(String),
              color: expect.any(String),
            },
          },
        },
      });
    });

    it('should match the specified values', () => {
      const { cardsSection } = component;

      expect(cardsSection).toMatchInlineSnapshot(`
        {
          "body": {
            "base": {
              "palette": {
                "backgroundColor": "transparent",
                "color": "hsl(0, 0%, 19%)",
              },
            },
          },
          "readMoreLink": {
            "base": {
              "fontFamily": "Montserrat, sans-serif",
              "fontWeight": 700,
            },
            "variant": {
              "default": {
                "palette": {
                  "color": "hsl(7, 100%, 65%)",
                },
              },
              "interact": {
                "palette": {
                  "color": "hsl(7, 100%, 59%)",
                },
              },
            },
          },
          "root": {
            "base": {
              "palette": {
                "backgroundColor": "transparent",
              },
            },
          },
          "title": {
            "base": {
              "fontFamily": "Poppins, sans-serif",
              "fontWeight": 600,
              "palette": {
                "color": "hsl(0, 0%, 19%)",
              },
            },
          },
        }
      `);
    });
  });

  describe('Component Divider theme config', () => {
    it('should have the correct structure and types', () => {
      const { divider } = component;

      expect(divider).toEqual({
        base: {
          palette: {
            borderColor: expect.any(String),
          },
        },
      });
    });

    it('should match the specified values', () => {
      const { divider } = component;

      expect(divider).toMatchInlineSnapshot(`
        {
          "base": {
            "palette": {
              "borderColor": "hsl(0, 0%, 80%)",
            },
          },
        }
      `);
    });
  });

  describe('Component Checkbox theme config', () => {
    it('should have the correct structure and types', () => {
      const { checkbox } = component;

      expect(checkbox).toEqual({
        root: {
          default: {
            initial: {
              backgroundColor: expect.any(String),
              borderColor: expect.any(String),
            },
            interact: {
              backgroundColor: expect.any(String),
              borderColor: expect.any(String),
            },
            checked: {
              backgroundColor: expect.any(String),
              borderColor: expect.any(String),
            },
          },
        },
        indicator: {
          _base: {
            color: expect.any(String),
          },
        },
      });
    });

    it('should match the specified values', () => {
      const { checkbox } = component;

      expect(checkbox).toMatchInlineSnapshot(`
        {
          "indicator": {
            "_base": {
              "color": "hsl(0, 0%, 100%)",
            },
          },
          "root": {
            "default": {
              "checked": {
                "backgroundColor": "hsl(7, 100%, 65%)",
                "borderColor": "hsl(7, 100%, 65%)",
              },
              "initial": {
                "backgroundColor": "transparent",
                "borderColor": "hsl(0, 0%, 19%)",
              },
              "interact": {
                "backgroundColor": "hsl(7, 100%, 59%)",
                "borderColor": "hsl(7, 100%, 59%)",
              },
            },
          },
        }
      `);
    });
  });
});
