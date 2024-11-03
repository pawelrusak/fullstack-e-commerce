import * as EN from './en.json';

describe('English Translation', () => {
  it('should match the specified global translation values', () => {
    expect(EN.GLOBAL).toMatchInlineSnapshot(`
      {
        "BRAND_NAME": "e-shop",
        "CONTACT": {
          "EMAIL": "information@eshop.com.pl",
          "PHONE": "+1 (555) 123-4567",
        },
        "LOCATION": {
          "CITY": "Anytown",
          "COUNTRY": "USA",
          "STREET": "123 Main Street",
          "SUITE": "Suite 105",
        },
      }
    `);
  });

  it('should match the specified values', () => {
    expect(EN).toMatchSnapshot();
  });
});
