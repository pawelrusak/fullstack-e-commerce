import type { Order } from '../order';
import type { Prettify } from '../utils';

export type OrderPostRequestBody = Prettify<
  Pick<
    Order,
    | 'customer'
    | 'contact'
    | 'products'
    | 'shippingAddress'
    | 'paymentMethod'
    | 'shippingMethod'
    | 'customerNote'
  >
>;
