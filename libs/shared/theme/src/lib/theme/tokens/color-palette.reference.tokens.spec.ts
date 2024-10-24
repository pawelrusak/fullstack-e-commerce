import { colorPalette } from './color-palette.reference.tokens';

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
      secondary: {
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
      tertiary: {
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
      neutral: {
        0: expect.any(String),
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
        1000: expect.any(String),
      },
    });
  });

  it('should match the specified values', () => {
    expect(colorPalette).toMatchInlineSnapshot(`
      {
        "neutral": {
          "0": "hsl(0, 0%, 100%)",
          "100": "hsl(0, 0%, 92%)",
          "1000": "hsl(0, 0%, 0%)",
          "200": "hsl(0, 0%, 88%)",
          "300": "hsl(0, 0%, 80%)",
          "400": "hsl(0, 0%, 70%)",
          "50": "hsl(0, 0%, 96%)",
          "500": "hsl(0, 0%, 59%)",
          "600": "hsl(0, 0%, 42%)",
          "700": "hsl(0, 0%, 30%)",
          "800": "hsl(0, 0%, 19%)",
          "900": "hsl(0, 0%, 9%)",
        },
        "primary": {
          "100": "hsl(7, 100%, 91%)",
          "200": "hsl(7, 100%, 86%)",
          "300": "hsl(7, 100%, 81%)",
          "400": "hsl(7, 100%, 73%)",
          "50": "hsl(7, 100%, 96%)",
          "500": "hsl(7, 100%, 65%)",
          "600": "hsl(7, 100%, 59%)",
          "700": "hsl(7, 100%, 53%)",
          "800": "hsl(7, 100%, 47%)",
          "900": "hsl(7, 100%, 41%)",
          "950": "hsl(7, 100%, 35%)",
        },
        "secondary": {
          "100": "hsl(0, 0%, 72%)",
          "200": "hsl(0, 0%, 64%)",
          "300": "hsl(0, 0%, 55%)",
          "400": "hsl(0, 0%, 37%)",
          "50": "hsl(0, 0%, 80%)",
          "500": "hsl(0, 0%, 19%)",
          "600": "hsl(0, 0%, 16%)",
          "700": "hsl(0, 0%, 14%)",
          "800": "hsl(0, 0%, 12%)",
          "900": "hsl(0, 0%, 9%)",
          "950": "hsl(0, 0%, 6%)",
        },
        "tertiary": {
          "100": "hsl(47, 100%, 89%)",
          "200": "hsl(48, 98%, 77%)",
          "300": "hsl(46, 99%, 65%)",
          "400": "hsl(43, 98%, 56%)",
          "50": "hsl(48, 100%, 96%)",
          "500": "hsl(38, 94%, 50%)",
          "600": "hsl(32, 96%, 44%)",
          "700": "hsl(26, 93%, 37%)",
          "800": "hsl(23, 84%, 31%)",
          "900": "hsl(22, 79%, 26%)",
          "950": "hsl(21, 94%, 14%)",
        },
      }
    `);
  });
});
