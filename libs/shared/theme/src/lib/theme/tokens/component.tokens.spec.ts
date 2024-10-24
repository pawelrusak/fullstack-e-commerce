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
          'size-medium': {
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
            "size-large": {
              "initial": {
                "fontSize": "2rem",
                "lineHeight": "3rem",
                "padding": "2.3rem 6.300000000000001rem",
              },
            },
            "size-medium": {
              "initial": {
                "fontSize": "2rem",
                "lineHeight": "3rem",
                "padding": "1.5rem 3.9rem",
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

  describe('Component Cart theme config', () => {
    it('should have the correct structure and types', () => {
      const { cart } = component;

      expect(cart).toEqual({
        tableHead: {
          _base: {
            backgroundColor: expect.any(String),
            color: expect.any(String),
            fontWeight: expect.any(Number),
            textTransform: expect.any(String),
            fontFamily: expect.any(String),
            fontSize: expect.any(String),
            lineHeight: expect.any(Number),
          },
        },
        tableBody: {
          default: {
            initial: {
              borderColor: expect.any(String),
            },
            interact: {
              borderColor: expect.any(String),
            },
          },
        },
        tableProductThumbnail: {
          _base: {
            backgroundColor: expect.any(String),
          },
        },
        tableProductCategory: {
          _base: {
            fontSize: expect.any(String),
            lineHeight: expect.any(Number),
            textTransform: expect.any(String),
          },
        },
        tableProductName: {
          _base: {
            fontSize: expect.any(String),
            lineHeight: expect.any(Number),
            fontWeight: expect.any(Number),
            fontFamily: expect.any(String),
          },
        },
        tableProductVariantLabel: {
          _base: {
            fontSize: expect.any(String),
            lineHeight: expect.any(Number),
            fontWeight: expect.any(Number),
          },
        },
        tableProductVariantDetails: {
          _base: {
            fontSize: expect.any(String),
            lineHeight: expect.any(Number),
            fontWeight: expect.any(Number),
          },
        },
        tableProductPrice: {
          _base: {
            fontSize: expect.any(String),
            lineHeight: expect.any(Number),
            fontWeight: expect.any(Number),
            fontFamily: expect.any(String),
          },
        },
        tableProductQuantityInput: {
          _base: {
            fontSize: expect.any(String),
            fontWeight: expect.any(Number),
            fontFamily: expect.any(String),
            lineHeight: expect.any(Number),
            backgroundColor: expect.any(String),
            color: expect.any(String),
          },
        },
        tableProductQuantityButton: {
          default: {
            initial: {
              color: expect.any(String),
            },
            interact: {
              color: expect.any(String),
            },
            disabled: {
              color: expect.any(String),
            },
          },
        },
        summaryCouponSection: {
          _base: {
            borderColor: expect.any(String),
            lineHeight: expect.any(Number),
            fontSize: expect.any(String),
            fontWeight: expect.any(Number),
            fontFamily: expect.any(String),
            backgroundColor: expect.any(String),
            color: expect.any(String),
          },
        },
        summaryCouponApplyButton: {
          _base: {
            fontWeight: expect.any(Number),
            fontSize: expect.any(String),
            fontFamily: expect.any(String),
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
        },
        subtotalSection: {
          _base: {
            backgroundColor: expect.any(String),
          },
        },
        subtotalLabel: {
          _base: {
            fontWeight: expect.any(Number),
            fontSize: expect.any(String),
            lineHeight: expect.any(Number),
            fontFamily: expect.any(String),
            color: expect.any(String),
            textTransform: 'uppercase',
          },
        },
        subtotalPrice: {
          _base: {
            fontFamily: expect.any(String),
            fontSize: expect.any(String),
            lineHeight: expect.any(Number),
            color: expect.any(String),
            fontWeight: expect.any(Number),
          },
        },
        subtotalAdditionalInfo: {
          _base: {
            fontSize: expect.any(String),
            lineHeight: expect.any(Number),
            fontFamily: expect.any(String),
            fontWeight: expect.any(Number),
            color: expect.any(String),
          },
        },
        emptyStateIcon: {
          _base: {
            color: expect.any(String),
            scale: expect.any(Number),
            height: expect.any(String),
            width: expect.any(String),
            marginBottom: expect.any(String),
          },
        },
        emptyStateTitle: {
          _base: {
            fontSize: expect.any(String),
            lineHeight: expect.any(Number),
            fontWeight: expect.any(Number),
            fontFamily: expect.any(String),
            color: expect.any(String),
          },
        },
        emptyStateParagraph: {
          _base: {
            fontSize: expect.any(String),
            lineHeight: expect.any(Number),
            fontWeight: expect.any(Number),
            fontFamily: expect.any(String),
            color: expect.any(String),
          },
        },
      });
    });

    it('should match the specified values', () => {
      const { cart } = component;

      expect(cart).toMatchInlineSnapshot(`
        {
          "emptyStateIcon": {
            "_base": {
              "color": "hsl(7, 100%, 65%)",
              "height": "3rem",
              "marginBottom": "3.2rem",
              "scale": 2.5,
              "width": "3rem",
            },
          },
          "emptyStateParagraph": {
            "_base": {
              "color": "hsl(0, 0%, 19%)",
              "fontFamily": "Montserrat, sans-serif",
              "fontSize": "2.0rem",
              "fontWeight": 400,
              "lineHeight": 1.5,
            },
          },
          "emptyStateTitle": {
            "_base": {
              "color": "hsl(0, 0%, 19%)",
              "fontFamily": "Poppins, sans-serif",
              "fontSize": "3.6rem",
              "fontWeight": 600,
              "lineHeight": 1.2777777777777777,
            },
          },
          "subtotalAdditionalInfo": {
            "_base": {
              "color": "hsl(0, 0%, 19%)",
              "fontFamily": "Montserrat, sans-serif",
              "fontSize": "1.4rem",
              "fontWeight": 400,
              "lineHeight": 1.4285714285714286,
            },
          },
          "subtotalLabel": {
            "_base": {
              "color": "hsl(0, 0%, 19%)",
              "fontFamily": "Montserrat, sans-serif",
              "fontSize": "1.6rem",
              "fontWeight": 700,
              "lineHeight": 1.5,
              "textTransform": "uppercase",
            },
          },
          "subtotalPrice": {
            "_base": {
              "color": "hsl(7, 100%, 65%)",
              "fontFamily": "Poppins, sans-serif",
              "fontSize": "2.4rem",
              "fontWeight": 600,
              "lineHeight": 1.25,
            },
          },
          "subtotalSection": {
            "_base": {
              "backgroundColor": "hsl(0, 0%, 96%)",
            },
          },
          "summaryCouponApplyButton": {
            "_base": {
              "fontFamily": "Poppins, sans-serif",
              "fontSize": "2.0rem",
              "fontWeight": 600,
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
          },
          "summaryCouponSection": {
            "_base": {
              "backgroundColor": "hsl(0, 0%, 100%)",
              "borderColor": "hsl(0, 0%, 80%)",
              "color": "rgba(48,48,48,0.75)",
              "fontFamily": "Montserrat, sans-serif",
              "fontSize": "1.6rem",
              "fontWeight": 400,
              "lineHeight": 1.5,
            },
          },
          "tableBody": {
            "default": {
              "initial": {
                "borderColor": "transparent",
              },
              "interact": {
                "borderColor": "hsl(0, 0%, 80%)",
              },
            },
          },
          "tableHead": {
            "_base": {
              "backgroundColor": "hsl(0, 0%, 96%)",
              "color": "hsl(0, 0%, 19%)",
              "fontFamily": "Montserrat, sans-serif",
              "fontSize": "1.6rem",
              "fontWeight": 700,
              "lineHeight": 1.5,
              "textTransform": "uppercase",
            },
          },
          "tableProductCategory": {
            "_base": {
              "fontSize": "1.4rem",
              "lineHeight": 1.4285714285714286,
              "textTransform": "uppercase",
            },
          },
          "tableProductName": {
            "_base": {
              "fontFamily": "Poppins, sans-serif",
              "fontSize": "2.0rem",
              "fontWeight": 600,
              "lineHeight": 1.5,
            },
          },
          "tableProductPrice": {
            "_base": {
              "fontFamily": "Poppins, sans-serif",
              "fontSize": "2.0rem",
              "fontWeight": 600,
              "lineHeight": 1.5,
            },
          },
          "tableProductQuantityButton": {
            "default": {
              "disabled": {
                "color": "hsl(0, 0%, 70%)",
              },
              "initial": {
                "color": "hsl(0, 0%, 19%)",
              },
              "interact": {
                "color": "hsl(7, 100%, 65%)",
              },
            },
          },
          "tableProductQuantityInput": {
            "_base": {
              "backgroundColor": "hsl(0, 0%, 96%)",
              "color": "hsl(0, 0%, 19%)",
              "fontFamily": "Montserrat, sans-serif",
              "fontSize": "1.6rem",
              "fontWeight": 700,
              "lineHeight": 1.5,
            },
          },
          "tableProductThumbnail": {
            "_base": {
              "backgroundColor": "hsl(0, 0%, 82%)",
            },
          },
          "tableProductVariantDetails": {
            "_base": {
              "fontSize": "1.6rem",
              "fontWeight": 400,
              "lineHeight": 1.5,
            },
          },
          "tableProductVariantLabel": {
            "_base": {
              "fontSize": "1.6rem",
              "fontWeight": 700,
              "lineHeight": 1.5,
            },
          },
        }
      `);
    });
  });

  describe('Component Button theme config', () => {
    it('should have the correct structure and types', () => {
      const { iconButton } = component;

      expect(iconButton).toEqual({
        root: {
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
          'size-small': {
            initial: {
              width: '4rem',
              height: '4rem',
            },
          },
          'size-medium': {
            initial: {
              width: '5rem',
              height: '5rem',
            },
          },
          'size-large': {
            initial: {
              width: '6.4rem',
              height: '6.4rem',
            },
          },
        },
      });
    });

    it('should match the specified values', () => {
      const { iconButton } = component;

      expect(iconButton).toMatchInlineSnapshot(`
        {
          "root": {
            "size-large": {
              "initial": {
                "height": "6.4rem",
                "width": "6.4rem",
              },
            },
            "size-medium": {
              "initial": {
                "height": "5rem",
                "width": "5rem",
              },
            },
            "size-small": {
              "initial": {
                "height": "4rem",
                "width": "4rem",
              },
            },
            "variant-outline-primary": {
              "disabled": {
                "backgroundColor": "hsl(0, 0%, 100%)",
                "borderColor": "hsl(0, 0%, 80%)",
                "color": "hsl(0, 0%, 80%)",
              },
              "initial": {
                "backgroundColor": "hsl(0, 0%, 100%)",
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
                "backgroundColor": "hsl(0, 0%, 100%)",
                "borderColor": "hsl(0, 0%, 80%)",
                "color": "hsl(0, 0%, 80%)",
              },
              "initial": {
                "backgroundColor": "hsl(0, 0%, 100%)",
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

  describe('Component Gallery theme config', () => {
    it('should have the correct structure and types', () => {
      const { gallery } = component;

      expect(gallery).toEqual({
        buttonListBackdrop: {
          _base: {
            borderColor: expect.any(String),
            backgroundColor: expect.any(String),
          },
        },
      });
    });

    it('should match the specified values', () => {
      const { gallery } = component;

      expect(gallery).toMatchInlineSnapshot(`
        {
          "buttonListBackdrop": {
            "_base": {
              "backgroundColor": "rgba(255,255,255,0.25)",
              "borderColor": "hsl(0, 0%, 80%)",
            },
          },
        }
      `);
    });
  });

  describe('Component Heading theme config', () => {
    it('should have the correct structure and types', () => {
      const { heading } = component;

      expect(heading).toEqual({
        root: {
          _base: {
            color: expect.any(String),
          },
          'level-1': {
            initial: {
              fontSize: expect.any(String),
              fontWeight: expect.any(Number),
              fontFamily: expect.any(String),
              lineHeight: expect.any(Number),
            },
          },
          'level-2': {
            initial: {
              fontSize: expect.any(String),
              fontWeight: expect.any(Number),
              fontFamily: expect.any(String),
              lineHeight: expect.any(Number),
            },
          },
          'level-3': {
            initial: {
              fontSize: expect.any(String),
              fontWeight: expect.any(Number),
              fontFamily: expect.any(String),
              lineHeight: expect.any(Number),
            },
          },
          'level-4': {
            initial: {
              fontSize: expect.any(String),
              fontWeight: expect.any(Number),
              fontFamily: expect.any(String),
              lineHeight: expect.any(Number),
            },
          },
          'level-5': {
            initial: {
              fontSize: expect.any(String),
              fontWeight: expect.any(Number),
              fontFamily: expect.any(String),
              lineHeight: expect.any(Number),
            },
          },
          'level-6': {
            initial: {
              fontSize: expect.any(String),
              fontWeight: expect.any(Number),
              fontFamily: expect.any(String),
              lineHeight: expect.any(Number),
            },
          },
          'level-7': {
            initial: {
              fontSize: expect.any(String),
              fontWeight: expect.any(Number),
              fontFamily: expect.any(String),
              lineHeight: expect.any(Number),
            },
          },
          'level-8': {
            initial: {
              fontSize: expect.any(String),
              fontWeight: expect.any(Number),
              fontFamily: expect.any(String),
              lineHeight: expect.any(Number),
            },
          },
        },
      });
    });

    it('should match the specified values', () => {
      const { heading } = component;

      expect(heading).toMatchInlineSnapshot(`
        {
          "root": {
            "_base": {
              "color": "hsl(0, 0%, 19%)",
            },
            "level-1": {
              "initial": {
                "fontFamily": "Poppins, sans-serif",
                "fontSize": "5.6rem",
                "fontWeight": 700,
                "lineHeight": 1.2142857142857142,
              },
            },
            "level-2": {
              "initial": {
                "fontFamily": "Poppins, sans-serif",
                "fontSize": "3.6rem",
                "fontWeight": 600,
                "lineHeight": 1.2777777777777777,
              },
            },
            "level-3": {
              "initial": {
                "fontFamily": "Poppins, sans-serif",
                "fontSize": "2.4rem",
                "fontWeight": 600,
                "lineHeight": 1.25,
              },
            },
            "level-4": {
              "initial": {
                "fontFamily": "Poppins, sans-serif",
                "fontSize": "2.0rem",
                "fontWeight": 600,
                "lineHeight": 1.5,
              },
            },
            "level-5": {
              "initial": {
                "fontFamily": "Montserrat, sans-serif",
                "fontSize": "2.0rem",
                "fontWeight": 700,
                "lineHeight": 1.5,
              },
            },
            "level-6": {
              "initial": {
                "fontFamily": "Montserrat, sans-serif",
                "fontSize": "1.6rem",
                "fontWeight": 700,
                "lineHeight": 1.5,
              },
            },
            "level-7": {
              "initial": {
                "fontFamily": "Montserrat, sans-serif",
                "fontSize": "1.6rem",
                "fontWeight": 400,
                "lineHeight": 1.5,
              },
            },
            "level-8": {
              "initial": {
                "fontFamily": "Montserrat, sans-serif",
                "fontSize": "1.4rem",
                "fontWeight": 400,
                "lineHeight": 1.4285714285714286,
              },
            },
          },
        }
      `);
    });
  });
});
