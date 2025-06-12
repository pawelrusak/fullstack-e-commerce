export type Address = {
  address: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
};

/**
 * A Mongoose-compatible version of {@link Address}.
 */
export type AddressSchema = Address;
