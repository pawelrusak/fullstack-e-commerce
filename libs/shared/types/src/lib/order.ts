import type { Types } from 'mongoose';
import type { Id, Timestamp } from './shared';
import type { Prettify, Modify } from './utils';
import type {
  User,
  UserSchema,
  UserName,
  UserContactPhone,
  UserContactEmail,
} from './user';
import type { Product } from './product';
import type { Address, AddressSchema } from './address';
import type { ShippingMethod } from './shipping-method';

/**
 * A snapshot of a product line in an order, including quantity and price at checkout.
 *
 * `productsTotalPrice` = `quantity * currentProductPrice`.
 */
export type OrderProduct = {
  /**
   * The product as it existed when the customer checked out.
   */
  product: Product;
  quantity: number;
  /**
   * The price of the product at the time of the order. This property will be useful when the discounted price functionality is implemented.
   */
  currentProductPrice: number;
  productsTotalPrice: number;
};

/**
 * Represents the possible statuses of an order in the system.
 *
 * - `'pending'`: Order received but not yet processed.
 * - `'on-hold'`: Awaiting payment confirmation or manual review.
 * - `'failed'`: Payment failed or order was declined.
 * - `'processing'`: Payment received and order is being prepared.
 * - `'cancelled'`: Order was cancelled by the customer or admin.
 * - `'completed'`: Order has been fulfilled and shipped/delivered.
 * - `'refunded'`: Payment was refunded to the customer.
 */
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

/**
 * Required customer name, phone, and email.
 */
export type OrderContact = Required<
  UserName & UserContactPhone & UserContactEmail
>;

/**
 * Represents the available payment methods that a customer can choose
 * when placing an order.
 *
 * - `'paypal'`: Payment processed via PayPal.
 * - `'stripe'`: Payment processed via Stripe.
 * - `'cash'`: Payment made with cash, typically on delivery.
 */
export type PaymentMethod = 'paypal' | 'stripe' | 'cash';

/**
 * Represents an optional note provided by the customer during checkout.
 */
export type OrderCustomerNote = {
  customerNote?: string;
};

/**
 * Represents the monetary cost of a particular {@link ShippingMethod}.
 */
export type OrderShippingMethodCost = ShippingMethod['cost'];

/**
 * Shipping option snapshot saved with the order.
 */
export type OrderShippingMethod = {
  method: ShippingMethod;
  costAtTimeOfOrder: OrderShippingMethodCost;
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
  shippingMethod: OrderShippingMethod;
  // TODO: Add productsTotalPrice
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

/**
 * A Mongoose-compatible version of {@link OrderProduct}.
 */
export type OrderProductSchema = Prettify<
  Modify<
    OrderProduct,
    {
      product: Types.ObjectId;
    }
  >
>;

/**
 * A Mongoose-compatible version of {@link OrderShippingMethod}.
 */
export type OrderShippingMethodSchema = Prettify<
  Modify<
    OrderShippingMethod,
    {
      method?: Types.ObjectId;
    }
  >
>;

/**
 * A Mongoose-compatible version of {@link Order}.
 */
export type OrderSchema = Prettify<
  Modify<
    Order,
    {
      _id: Types.ObjectId;
      customer?: Types.Subdocument<UserSchema>;
      products: OrderProductSchema[];
      shippingAddress: AddressSchema;
      shippingMethod?: OrderShippingMethodSchema;
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
