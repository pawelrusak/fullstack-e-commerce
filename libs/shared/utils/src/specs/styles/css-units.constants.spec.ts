import { CSS_UNITS } from '../../lib/styles/css-units.constants';

describe('CSS Units Constants', () => {
  it('should match the snapshot', () => {
    expect(CSS_UNITS).toMatchInlineSnapshot(`
      [
        "px",
        "em",
        "rem",
        "%",
        "vh",
        "vw",
        "vmin",
        "vmax",
        "cm",
        "mm",
        "in",
        "pt",
        "pc",
        "ex",
        "ch",
        "lh",
        "rlh",
        "deg",
        "rad",
        "grad",
        "turn",
        "s",
        "ms",
        "Hz",
        "kHz",
        "dpi",
        "dpcm",
        "dppx",
      ]
    `);
  });
});
