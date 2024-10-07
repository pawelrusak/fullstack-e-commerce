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
        root: {
          _base: {
            fontFamily: expect.any(String),
            fontWeight: expect.any(Number),
          },
          'size-small': {
            initial: {
              padding: expect.any(String),
              fontSize: expect.any(String),
              lineHeight: expect.any(String),
            },
          },
          'size-default': {
            initial: {
              padding: expect.any(String),
              fontSize: expect.any(String),
              lineHeight: expect.any(String),
            },
          },
          'size-large': {
            initial: {
              padding: expect.any(String),
              fontSize: expect.any(String),
              lineHeight: expect.any(String),
            },
          },
          'variant-primary': {
            initial: {
              backgroundColor: expect.any(String),
              borderColor: expect.any(String),
              color: expect.any(String),
            },
            interact: {
              backgroundColor: expect.any(String),
              borderColor: expect.any(String),
              color: expect.any(String),
            },
            disabled: {
              backgroundColor: expect.any(String),
              borderColor: expect.any(String),
              color: expect.any(String),
            },
          },
          'variant-secondary': {
            initial: {
              backgroundColor: expect.any(String),
              borderColor: expect.any(String),
              color: expect.any(String),
            },
            interact: {
              backgroundColor: expect.any(String),
              borderColor: expect.any(String),
              color: expect.any(String),
            },
            disabled: {
              backgroundColor: expect.any(String),
              borderColor: expect.any(String),
              color: expect.any(String),
            },
          },
          'variant-outline-primary': {
            initial: {
              backgroundColor: expect.any(String),
              borderColor: expect.any(String),
              color: expect.any(String),
            },
            interact: {
              backgroundColor: expect.any(String),
              borderColor: expect.any(String),
              color: expect.any(String),
            },
            disabled: {
              backgroundColor: expect.any(String),
              borderColor: expect.any(String),
              color: expect.any(String),
            },
          },
          'variant-outline-secondary': {
            initial: {
              backgroundColor: expect.any(String),
              borderColor: expect.any(String),
              color: expect.any(String),
            },
            interact: {
              backgroundColor: expect.any(String),
              borderColor: expect.any(String),
              color: expect.any(String),
            },
            disabled: {
              backgroundColor: expect.any(String),
              borderColor: expect.any(String),
              color: expect.any(String),
            },
          },
        },
      });
    });

    it('should match the specified values', () => {
      const { button } = component;

      expect(button).toMatchInlineSnapshot(`
        {
          "root": {
            "_base": {
              "fontFamily": "Montserrat, sans-serif",
              "fontWeight": 700,
            },
            "size-default": {
              "initial": {
                "fontSize": "2rem",
                "lineHeight": "3rem",
                "padding": "1.5rem 3.9rem",
              },
            },
            "size-large": {
              "initial": {
                "fontSize": "2rem",
                "lineHeight": "3rem",
                "padding": "2.3rem 6.300000000000001rem",
              },
            },
            "size-small": {
              "initial": {
                "fontSize": "1.6rem",
                "lineHeight": "2.4rem",
                "padding": "0.7000000000000001rem 1.9rem",
              },
            },
            "variant-outline-primary": {
              "disabled": {
                "backgroundColor": "transparent",
                "borderColor": "hsl(0, 0%, 80%)",
                "color": "hsl(0, 0%, 80%)",
              },
              "initial": {
                "backgroundColor": "transparent",
                "borderColor": "hsl(7, 100%, 65%)",
                "color": "hsl(7, 100%, 65%)",
              },
              "interact": {
                "backgroundColor": "hsl(7, 100%, 59%)",
                "borderColor": "hsl(7, 100%, 59%)",
                "color": "hsl(0, 0%, 100%)",
              },
            },
            "variant-outline-secondary": {
              "disabled": {
                "backgroundColor": "transparent",
                "borderColor": "hsl(0, 0%, 80%)",
                "color": "hsl(0, 0%, 80%)",
              },
              "initial": {
                "backgroundColor": "transparent",
                "borderColor": "hsl(0, 0%, 19%)",
                "color": "hsl(0, 0%, 19%)",
              },
              "interact": {
                "backgroundColor": "hsl(0, 0%, 16%)",
                "borderColor": "hsl(0, 0%, 16%)",
                "color": "hsl(0, 0%, 100%)",
              },
            },
            "variant-primary": {
              "disabled": {
                "backgroundColor": "hsl(7, 100%, 81%)",
                "borderColor": "hsl(7, 100%, 81%)",
                "color": "hsl(0, 0%, 100%)",
              },
              "initial": {
                "backgroundColor": "hsl(7, 100%, 65%)",
                "borderColor": "hsl(7, 100%, 65%)",
                "color": "hsl(0, 0%, 100%)",
              },
              "interact": {
                "backgroundColor": "hsl(7, 100%, 59%)",
                "borderColor": "hsl(7, 100%, 59%)",
                "color": "hsl(0, 0%, 100%)",
              },
            },
            "variant-secondary": {
              "disabled": {
                "backgroundColor": "hsl(0, 0%, 80%)",
                "borderColor": "hsl(0, 0%, 80%)",
                "color": "hsl(0, 0%, 100%)",
              },
              "initial": {
                "backgroundColor": "hsl(0, 0%, 19%)",
                "borderColor": "hsl(0, 0%, 19%)",
                "color": "hsl(0, 0%, 100%)",
              },
              "interact": {
                "backgroundColor": "hsl(0, 0%, 16%)",
                "borderColor": "hsl(0, 0%, 16%)",
                "color": "hsl(0, 0%, 100%)",
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
          _base: {
            backgroundColor: expect.any(String),
          },
        },
        link: {
          _base: {
            fontFamily: expect.any(String),
            backgroundColor: expect.any(String),
            fontSize: expect.any(String),
            lineHeight: expect.any(Number),
          },
          default: {
            initial: {
              color: expect.any(String),
            },
            interact: {
              color: expect.any(String),
            },
          },
          isCurrent: {
            initial: {
              fontWeight: expect.any(Number),
            },
            current: {
              fontWeight: expect.any(Number),
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
            "_base": {
              "backgroundColor": "transparent",
              "fontFamily": "Montserrat, sans-serif",
              "fontSize": "1.6rem",
              "lineHeight": 1.5,
            },
            "default": {
              "initial": {
                "color": "hsl(0, 0%, 19%)",
              },
              "interact": {
                "color": "hsl(7, 100%, 65%)",
              },
            },
            "isCurrent": {
              "current": {
                "fontWeight": 700,
              },
              "initial": {
                "fontWeight": 400,
              },
            },
          },
          "root": {
            "_base": {
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
          _base: {
            backgroundColor: expect.any(String),
          },
        },
        title: {
          _base: {
            color: expect.any(String),
            fontFamily: expect.any(String),
            fontWeight: expect.any(Number),
          },
        },
        readMoreLink: {
          _base: {
            fontFamily: expect.any(String),
            fontWeight: expect.any(Number),
          },

          default: {
            initial: {
              color: expect.any(String),
            },
            interact: {
              color: expect.any(String),
            },
          },
        },
        body: {
          _base: {
            backgroundColor: expect.any(String),
            color: expect.any(String),
          },
        },
      });
    });

    it('should match the specified values', () => {
      const { cardsSection } = component;

      expect(cardsSection).toMatchInlineSnapshot(`
        {
          "body": {
            "_base": {
              "backgroundColor": "transparent",
              "color": "hsl(0, 0%, 19%)",
            },
          },
          "readMoreLink": {
            "_base": {
              "fontFamily": "Montserrat, sans-serif",
              "fontWeight": 700,
            },
            "default": {
              "initial": {
                "color": "hsl(7, 100%, 65%)",
              },
              "interact": {
                "color": "hsl(7, 100%, 59%)",
              },
            },
          },
          "root": {
            "_base": {
              "backgroundColor": "transparent",
            },
          },
          "title": {
            "_base": {
              "color": "hsl(0, 0%, 19%)",
              "fontFamily": "Poppins, sans-serif",
              "fontWeight": 600,
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
        root: {
          _base: {
            borderColor: expect.any(String),
          },
        },
      });
    });

    it('should match the specified values', () => {
      const { divider } = component;

      expect(divider).toMatchInlineSnapshot(`
        {
          "root": {
            "_base": {
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

  describe('Component Field theme config', () => {
    it('should have the correct structure and types', () => {
      const { field } = component;

      expect(field).toEqual({
        root: {
          default: {
            initial: {
              color: expect.any(String),
            },
            invalid: {
              color: expect.any(String),
            },
          },
        },
        label: {
          _base: {
            fontWeight: expect.any(Number),
          },
        },
        labelAsterisk: {
          _base: {
            color: expect.any(String),
          },
        },
        controlInput: {
          default: {
            initial: {
              color: expect.any(String),
              borderColor: expect.any(String),
              boxShadow: undefined,
            },
            focus: {
              color: undefined,
              borderColor: expect.any(String),
              boxShadow: expect.any(String),
            },
            invalid: {
              color: expect.any(String),
              borderColor: expect.any(String),
              boxShadow: undefined,
            },
          },
        },
        controlInputPlaceholder: {
          _base: {
            fontFamily: expect.any(String),
            fontWeight: expect.any(Number),
          },
          default: {
            initial: {
              color: expect.any(String),
            },
            invalid: {
              color: expect.any(String),
            },
          },
        },
        helpText: {
          _base: {
            fontSize: expect.any(String),
            lineHeight: expect.any(String),
          },
        },
        errorText: {
          _base: {
            color: expect.any(String),
          },
        },
      });
    });

    it('should match the specified values', () => {
      const { field } = component;

      expect(field).toMatchInlineSnapshot(`
        {
          "controlInput": {
            "default": {
              "focus": {
                "borderColor": "hsl(7, 100%, 65%)",
                "boxShadow": "0 0 0 0.3rem rgba(255,97,77,0.6)",
                "color": undefined,
              },
              "initial": {
                "borderColor": "hsl(0, 0%, 80%)",
                "boxShadow": undefined,
                "color": "hsl(0, 0%, 19%)",
              },
              "invalid": {
                "borderColor": "hsl(348, 83%, 47%)",
                "boxShadow": undefined,
                "color": "hsl(348, 83%, 47%)",
              },
            },
          },
          "controlInputPlaceholder": {
            "_base": {
              "fontFamily": "Montserrat, sans-serif",
              "fontWeight": 400,
            },
            "default": {
              "initial": {
                "color": "hsl(0, 0%, 19%)",
              },
              "invalid": {
                "color": "hsl(348, 83%, 47%)",
              },
            },
          },
          "errorText": {
            "_base": {
              "color": "hsl(348, 83%, 47%)",
            },
          },
          "helpText": {
            "_base": {
              "fontSize": "1.6rem",
              "lineHeight": "2.4rem",
            },
          },
          "label": {
            "_base": {
              "fontWeight": 700,
            },
          },
          "labelAsterisk": {
            "_base": {
              "color": "hsl(7, 100%, 65%)",
            },
          },
          "root": {
            "default": {
              "initial": {
                "color": "hsl(0, 0%, 19%)",
              },
              "invalid": {
                "color": "hsl(348, 83%, 47%)",
              },
            },
          },
        }
      `);
    });
  });

  describe('Component Footer theme config', () => {
    it('should have the correct structure and types', () => {
      const { footer } = component;

      expect(footer).toEqual({
        root: {
          _base: {
            borderTopColor: expect.any(String),
          },
        },
        navSectionTitle: {
          _base: {
            color: expect.any(String),
            fontFamily: expect.any(String),
            fontWeight: expect.any(Number),
          },
        },
        navSectionListItemLink: {
          default: {
            initial: {
              color: expect.any(String),
            },
            interact: {
              color: expect.any(String),
            },
          },
        },
        navSectionListItemIcon: {
          _base: {
            color: expect.any(String),
          },
        },
        copyrightBar: {
          _base: {
            borderTopColor: expect.any(String),
          },
        },
        copyrightBarFormula: {
          _base: {
            color: expect.any(String),
          },
        },
        copyrightBarListItemLink: {
          default: {
            initial: {
              color: expect.any(String),
            },
            interact: {
              color: expect.any(String),
            },
          },
        },
        copyrightBarListItemSeparator: {
          _base: {
            backgroundColor: expect.any(String),
          },
        },
      });
    });

    it('should match the specified values', () => {
      const { footer } = component;

      expect(footer).toMatchInlineSnapshot(`
        {
          "copyrightBar": {
            "_base": {
              "borderTopColor": "hsl(0, 0%, 80%)",
            },
          },
          "copyrightBarFormula": {
            "_base": {
              "color": "hsl(0, 0%, 19%)",
            },
          },
          "copyrightBarListItemLink": {
            "default": {
              "initial": {
                "color": "hsl(0, 0%, 19%)",
              },
              "interact": {
                "color": "hsl(7, 100%, 65%)",
              },
            },
          },
          "copyrightBarListItemSeparator": {
            "_base": {
              "backgroundColor": "hsl(0, 0%, 80%)",
            },
          },
          "navSectionListItemIcon": {
            "_base": {
              "color": "rgba(48,48,48,0.75)",
            },
          },
          "navSectionListItemLink": {
            "default": {
              "initial": {
                "color": "hsl(0, 0%, 19%)",
              },
              "interact": {
                "color": "hsl(7, 100%, 65%)",
              },
            },
          },
          "navSectionTitle": {
            "_base": {
              "color": "hsl(0, 0%, 19%)",
              "fontFamily": "Poppins, sans-serif",
              "fontWeight": 600,
            },
          },
          "root": {
            "_base": {
              "borderTopColor": "hsl(0, 0%, 80%)",
            },
          },
        }
      `);
    });
  });
});
