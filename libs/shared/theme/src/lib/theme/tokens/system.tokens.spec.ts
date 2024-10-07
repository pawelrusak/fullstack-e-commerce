import {
  color,
  fontFamily,
  lineHeights,
  fontWeight,
  fontSizes,
  space,
  screens,
} from './system.tokens';

describe('Base Theme', () => {
  describe('Base Theme structure', () => {
    it('should have the correct color structure and types', () => {
      expect(color).toEqual({
        primary: expect.any(String),
        onPrimary: expect.any(String),
        primaryBorder: expect.any(String),
        primaryInteract: expect.any(String),
        primaryBorderInteract: expect.any(String),
        onPrimaryDisabled: expect.any(String),
        primaryDisabled: expect.any(String),
        primaryBorderDisabled: expect.any(String),

        primaryOutline: expect.any(String),
        onPrimaryOutline: expect.any(String),
        primaryOutlineBorder: expect.any(String),
        onPrimaryOutlineInteract: expect.any(String),
        primaryOutlineInteract: expect.any(String),
        primaryOutlineBorderInteract: expect.any(String),
        primaryOutlineDisabled: expect.any(String),
        onPrimaryOutlineDisabled: expect.any(String),
        primaryOutlineBorderDisabled: expect.any(String),

        primaryContainer: expect.any(String),
        onPrimaryContainer: expect.any(String),

        secondary: expect.any(String),
        onSecondary: expect.any(String),
        secondaryBorder: expect.any(String),
        secondaryInteract: expect.any(String),
        secondaryBorderInteract: expect.any(String),
        onSecondaryDisabled: expect.any(String),
        secondaryDisabled: expect.any(String),
        secondaryBorderDisabled: expect.any(String),

        secondaryOutline: expect.any(String),
        onSecondaryOutline: expect.any(String),
        secondaryOutlineBorder: expect.any(String),
        onSecondaryOutlineInteract: expect.any(String),
        secondaryOutlineInteract: expect.any(String),
        secondaryOutlineBorderInteract: expect.any(String),
        secondaryOutlineDisabled: expect.any(String),
        onSecondaryOutlineDisabled: expect.any(String),
        secondaryOutlineBorderDisabled: expect.any(String),

        tertiary: expect.any(String),

        surface: expect.any(String),
        onSurface: expect.any(String),
        onSurfaceVariant: expect.any(String),
        onSurfaceInteract: expect.any(String),
        surfacePlaceholder: expect.any(String),

        secondarySurface: expect.any(String),
        onSecondarySurface: expect.any(String),
        onSecondarySurfaceVariant: expect.any(String),

        background: expect.any(String),
        onBackground: expect.any(String),
        onBackgroundLink: expect.any(String),
        onBackgroundInteract: expect.any(String),
        onBackgroundLinkInteract: expect.any(String),

        border: expect.any(String),
        error: expect.any(String),
        secondBackground: expect.any(String),
        text: expect.any(String),
      });
    });

    it('should have the correct font family structure and types', () => {
      expect(fontFamily).toEqual({
        poppins: expect.any(String),
        montserrat: expect.any(String),
        primary: expect.any(String),
        secondary: expect.any(String),
      });
    });

    it('should have the correct font weight structure and types', () => {
      expect(fontWeight).toEqual({
        regular: expect.any(Number),
        semiBold: expect.any(Number),
        bold: expect.any(Number),
      });
    });

    it('should have the correct font sizes structure and types', () => {
      expect(fontSizes).toEqual({
        h1: expect.any(String),
        h2: expect.any(String),
        h3: expect.any(String),
        h4: expect.any(String),
        h5: expect.any(String),
        h6: expect.any(String),
        h7: expect.any(String),
        h8: expect.any(String),
        body: expect.any(String),
      });
    });

    it('should have the correct line heights structure and types', () => {
      expect(lineHeights).toEqual({
        h1: expect.any(Number),
        h2: expect.any(Number),
        h3: expect.any(Number),
        h4: expect.any(Number),
        h5: expect.any(Number),
        h6: expect.any(Number),
        h7: expect.any(Number),
        h8: expect.any(Number),
        body: expect.any(Number),
      });
    });

    it('should have the correct space structure and types', () => {
      expect(space).toEqual({
        0: expect.any(String),
        1: expect.any(String),
        2: expect.any(String),
        3: expect.any(String),
        4: expect.any(String),
        5: expect.any(String),
        6: expect.any(String),
        7: expect.any(String),
        8: expect.any(String),
        9: expect.any(String),
        10: expect.any(String),
        11: expect.any(String),
      });
    });

    it('should have the correct screens structure and types', () => {
      expect(screens).toEqual({
        sm: expect.any(String),
        md: expect.any(String),
        lg: expect.any(String),
        xl: expect.any(String),
        xxl: expect.any(String),
      });
    });
  });

  describe('Base Theme Values', () => {
    it('should match the specified color values', () => {
      expect(color).toMatchInlineSnapshot(`
        {
          "background": "hsl(0, 0%, 100%)",
          "border": "hsl(0, 0%, 96%)",
          "error": "hsl(348, 83%, 47%)",
          "onBackground": "hsl(0, 0%, 19%)",
          "onBackgroundInteract": "hsl(7, 100%, 65%)",
          "onBackgroundLink": "hsl(7, 100%, 65%)",
          "onBackgroundLinkInteract": "hsl(7, 100%, 59%)",
          "onPrimary": "hsl(0, 0%, 100%)",
          "onPrimaryContainer": "hsl(7, 100%, 65%)",
          "onPrimaryDisabled": "hsl(0, 0%, 100%)",
          "onPrimaryOutline": "hsl(7, 100%, 65%)",
          "onPrimaryOutlineDisabled": "hsl(0, 0%, 80%)",
          "onPrimaryOutlineInteract": "hsl(0, 0%, 100%)",
          "onSecondary": "hsl(0, 0%, 100%)",
          "onSecondaryDisabled": "hsl(0, 0%, 100%)",
          "onSecondaryOutline": "hsl(0, 0%, 19%)",
          "onSecondaryOutlineDisabled": "hsl(0, 0%, 80%)",
          "onSecondaryOutlineInteract": "hsl(0, 0%, 100%)",
          "onSecondarySurface": "hsl(0, 0%, 19%)",
          "onSecondarySurfaceVariant": "hsl(7, 100%, 65%)",
          "onSurface": "hsl(0, 0%, 19%)",
          "onSurfaceInteract": "hsl(7, 100%, 65%)",
          "onSurfaceVariant": "hsl(7, 100%, 65%)",
          "primary": "hsl(7, 100%, 65%)",
          "primaryBorder": "hsl(7, 100%, 65%)",
          "primaryBorderDisabled": "hsl(7, 100%, 81%)",
          "primaryBorderInteract": "hsl(7, 100%, 59%)",
          "primaryContainer": "hsl(7, 100%, 96%)",
          "primaryDisabled": "hsl(7, 100%, 81%)",
          "primaryInteract": "hsl(7, 100%, 59%)",
          "primaryOutline": "transparent",
          "primaryOutlineBorder": "hsl(7, 100%, 65%)",
          "primaryOutlineBorderDisabled": "hsl(0, 0%, 80%)",
          "primaryOutlineBorderInteract": "hsl(7, 100%, 59%)",
          "primaryOutlineDisabled": "transparent",
          "primaryOutlineInteract": "hsl(7, 100%, 59%)",
          "secondBackground": "hsl(0, 0%, 96%)",
          "secondary": "hsl(0, 0%, 19%)",
          "secondaryBorder": "hsl(0, 0%, 19%)",
          "secondaryBorderDisabled": "hsl(0, 0%, 80%)",
          "secondaryBorderInteract": "hsl(0, 0%, 16%)",
          "secondaryDisabled": "hsl(0, 0%, 80%)",
          "secondaryInteract": "hsl(0, 0%, 16%)",
          "secondaryOutline": "transparent",
          "secondaryOutlineBorder": "hsl(0, 0%, 19%)",
          "secondaryOutlineBorderDisabled": "hsl(0, 0%, 80%)",
          "secondaryOutlineBorderInteract": "hsl(0, 0%, 16%)",
          "secondaryOutlineDisabled": "transparent",
          "secondaryOutlineInteract": "hsl(0, 0%, 16%)",
          "secondarySurface": "hsl(0, 0%, 96%)",
          "surface": "hsl(0, 0%, 100%)",
          "surfacePlaceholder": "hsl(0, 0%, 82%)",
          "tertiary": "hsl(46, 99%, 65%)",
          "text": "hsl(0, 0%, 19%)",
        }
      `);
    });

    it('should match the font family specified values', () => {
      expect(fontFamily).toMatchInlineSnapshot(`
        {
          "montserrat": "Montserrat, sans-serif",
          "poppins": "Poppins, sans-serif",
          "primary": "Montserrat, sans-serif",
          "secondary": "Poppins, sans-serif",
        }
      `);
    });

    it('should match the font weight specified values', () => {
      expect(fontWeight).toMatchInlineSnapshot(`
        {
          "bold": 700,
          "regular": 400,
          "semiBold": 600,
        }
      `);
    });

    it('should match the font sizes specified values', () => {
      expect(fontSizes).toMatchInlineSnapshot(`
        {
          "body": "2.0rem",
          "h1": "5.6rem",
          "h2": "3.6rem",
          "h3": "2.4rem",
          "h4": "2.0rem",
          "h5": "2.0rem",
          "h6": "1.6rem",
          "h7": "1.6rem",
          "h8": "1.4rem",
        }
      `);
    });

    it('should match the line heights specified values', () => {
      expect(lineHeights).toMatchInlineSnapshot(`
        {
          "body": 1.5,
          "h1": 1.2142857142857142,
          "h2": 1.2777777777777777,
          "h3": 1.25,
          "h4": 1.5,
          "h5": 1.5,
          "h6": 1.5,
          "h7": 1.5,
          "h8": 1.4285714285714286,
        }
      `);
    });

    it('should match the space specified values', () => {
      expect(space).toMatchInlineSnapshot(`
        {
          "0": "0",
          "1": "0.4rem",
          "10": "8rem",
          "11": "10rem",
          "2": "0.8rem",
          "3": "1.6rem",
          "4": "2rem",
          "5": "2.4rem",
          "6": "3.2rem",
          "7": "4rem",
          "8": "4.8rem",
          "9": "6.4rem",
        }
      `);
    });

    it('should match the screen specified values', () => {
      expect(screens).toMatchInlineSnapshot(`
        {
          "lg": "1024px",
          "md": "768px",
          "sm": "640px",
          "xl": "1280px",
          "xxl": "1536px",
        }
      `);
    });
  });
});
