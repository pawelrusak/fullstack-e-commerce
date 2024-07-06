import {
  OrderContact,
  OrderCustomerNote,
  Address,
  Prettify,
} from '@e-shop/types';

export type CheckoutInformation = Prettify<
  OrderContact & Address & OrderCustomerNote
>;
