import { Types } from 'mongoose';
import { Id, Timestamp } from './shared';
import { Prettify, Modify } from './utils';
import { User, UserSchema } from './user';
import { Product } from './product';
import { Address, AddressSchema } from './address';

export type OrderProduct = {
  product: Product;
  quantity: number;
  /**
   * The price of the product at the time of the order. This property will be useful when the discounted price functionality is implemented.
   */
  currentProductPrice: number;
  productsTotalPrice: number;
};

export type OrderStatus =
  | 'pending'
  | 'on-hold'
  | 'failed'
  | 'processing'
  | 'cancelled'
  | 'completed'
  | 'refunded';

/**
 * Use object instead of enum. See video {@link https://youtu.be/jjMbPt_H3RQ | "Enums considered harmful"} by Matt Pocock.
 */
export const ORDER_STATUS_CODE = Object.freeze({
  processing: 0,
  'on-hold': 1,
  pending: 2,
  failed: 3,
  cancelled: 4,
  completed: 5,
  refunded: 6,
});

/**
 * Use to achieve specific sorting directly from the database
 */
export type OrderStatusCode = (typeof ORDER_STATUS_CODE)[OrderStatus];

export type OrderContact = Required<
  Pick<User, 'email' | 'phone' | 'firstName' | 'lastName'>
>;

/**
 * @deprecated use OrderContact instead
 */
export type CustomerContact = OrderContact;

export type PaymentMethod = 'paypal' | 'stripe' | 'cash';

export type OrderCustomerNote = {
  customerNote?: string;
};

export type Order = Id & {
  /**
   * This will be set when the order is created by the registered user.
   */
  customer?: User;
  contact: OrderContact;
  products: OrderProduct[];
  status: OrderStatus;
  productsCount: number;
  productsKindCount: number;
  statusCode: OrderStatusCode;
  shippingAddress: Address;
  // TODO: Add shipping method
  totalPrice: number;
  /**
   * This will be set after a successful payment and status change to "On Hold".
   */
  paymentAt?: string;
  cancelledAt?: string;
  refundedAt?: string;
  completedAt?: string;
  processingAt?: string;
  failedAt?: string;
  /**
   * This will be set during the order creation.
   */
  pendingAt?: string;
  paymentMethod: PaymentMethod;
} & OrderCustomerNote &
  Timestamp;

export type OrderSchema = Prettify<
  Modify<
    Order,
    {
      _id: Types.ObjectId;
      customer?: Types.Subdocument<UserSchema>;
      shippingAddress: AddressSchema;
      /**
       * @deprecated use shippingAddress instead
       */
      address: AddressSchema;
      paymentAt?: Date;
      cancelledAt?: Date;
      refundedAt?: Date;
      completedAt?: Date;
      processingAt?: Date;
      failedAt?: Date;
      pendingAt?: Date;
    }
  >
>;
