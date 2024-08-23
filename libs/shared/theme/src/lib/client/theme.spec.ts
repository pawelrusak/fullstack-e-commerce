import theme from './theme';

describe('Theme config', () => {
  it('should have the correct structure and types', () => {
    expect(theme).toEqual({
      color: {
        primary: expect.any(String),
        onPrimary: expect.any(String),
        primaryBorder: expect.any(String),
        primaryInteract: expect.any(String),
        primaryBorderInteract: expect.any(String),

        secondary: expect.any(String),

        surface: expect.any(String),
        onSurface: expect.any(String),
        onSurfaceVariant: expect.any(String),
        onSurfaceInteract: expect.any(String),

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
      },
      fontFamily: {
        poppins: expect.any(String),
        montserrat: expect.any(String),
        primary: expect.any(String),
        secondary: expect.any(String),
      },
      fontWeight: {
        regular: expect.any(Number),
        semiBold: expect.any(Number),
        bold: expect.any(Number),
      },
      space: expect.arrayContaining([expect.any(Number)]),
      screens: {
        sm: expect.any(String),
        md: expect.any(String),
        lg: expect.any(String),
        xl: expect.any(String),
        xxl: expect.any(String),
      },
    });
  });

  it('should match the specified values', () => {
    expect(theme).toMatchInlineSnapshot(`
      {
        "color": {
          "background": "hsl(0, 0%, 100%)",
          "border": "hsl(0, 0%, 96%)",
          "error": "hsl(348, 83%, 47%)",
          "onBackground": "hsl(0, 0%, 19%)",
          "onBackgroundInteract": "hsl(7, 100%, 65%)",
          "onBackgroundLink": "hsl(7, 100%, 65%)",
          "onBackgroundLinkInteract": "hsl(7, 86%, 51%)",
          "onPrimary": "hsl(0, 0%, 100%)",
          "onSecondarySurface": "hsl(0, 0%, 19%)",
          "onSecondarySurfaceVariant": "hsl(7, 100%, 65%)",
          "onSurface": "hsl(0, 0%, 19%);",
          "onSurfaceInteract": "hsl(7, 100%, 65%)",
          "onSurfaceVariant": "hsl(7, 100%, 65%)",
          "primary": "hsl(7, 100%, 65%)",
          "primaryBorder": "hsl(7, 100%, 65%)",
          "primaryBorderInteract": "hsl(7, 86%, 51%)",
          "primaryInteract": "hsl(7, 86%, 51%)",
          "secondBackground": "hsl(0, 0%, 96%)",
          "secondary": "hsl(46, 99%, 65%)",
          "secondarySurface": "hsl(0, 0%, 96%)",
          "surface": "hsl(0, 0%, 100%)",
          "text": "hsl(0, 0%, 19%)",
        },
        "fontFamily": {
          "montserrat": "Montserrat, sans-serif",
          "poppins": "Poppins, sans-serif",
          "primary": "Montserrat, sans-serif",
          "secondary": "Poppins, sans-serif",
        },
        "fontWeight": {
          "bold": 700,
          "regular": 400,
          "semiBold": 600,
        },
        "screens": {
          "lg": "1024px",
          "md": "768px",
          "sm": "640px",
          "xl": "1280px",
          "xxl": "1536px",
        },
        "space": [
          0,
          0.2,
          0.4,
          0.8,
          1.6,
          2.4,
          3.2,
        ],
      }
    `);
  });
});
