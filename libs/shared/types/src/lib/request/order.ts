import { Order } from '../order';
import { Prettify } from '../utils';

export type OrderPostRequestBody = Prettify<
  Pick<
    Order,
    | 'customer'
    | 'contact'
    | 'products'
    | 'shippingAddress'
    | 'paymentMethod'
    | 'customerNote'
  >
>;
