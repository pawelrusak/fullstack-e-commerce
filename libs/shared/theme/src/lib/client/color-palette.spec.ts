import { colorPalette } from './color-palette';

describe('Color palette', () => {
  it('should have the correct structure and types', () => {
    expect(colorPalette).toEqual({
      primary: {
        50: expect.any(String),
        100: expect.any(String),
        200: expect.any(String),
        300: expect.any(String),
        400: expect.any(String),
        500: expect.any(String),
        600: expect.any(String),
        700: expect.any(String),
        800: expect.any(String),
        900: expect.any(String),
        950: expect.any(String),
      },
    });
  });

  it('should match the specified values', () => {
    expect(colorPalette).toMatchInlineSnapshot(`
      {
        "primary": {
          "100": "hsl(7, 100%, 94%)",
          "200": "hsl(7, 100%, 89%)",
          "300": "hsl(7, 100%, 81%)",
          "400": "hsl(7, 100%, 70%)",
          "50": "hsl(9, 100%, 97%)",
          "500": "hsl(7, 100%, 65%)",
          "600": "hsl(7, 86%, 51%)",
          "700": "hsl(7, 88%, 42%)",
          "800": "hsl(7, 83%, 35%)",
          "900": "hsl(7, 74%, 31%)",
          "950": "hsl(7, 90%, 15%)",
        },
      }
    `);
  });
});
