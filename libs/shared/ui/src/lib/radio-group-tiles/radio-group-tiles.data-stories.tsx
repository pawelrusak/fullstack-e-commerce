import fedexLogo from './storybook-assets/fedex-logo.png';
import upsLogo from './storybook-assets/ups-logo.svg';
import dhlLogo from './storybook-assets/dhl-logo.png';
import tntLogo from './storybook-assets/tnt-logo.svg';
import aramexLogo from './storybook-assets/aramex-logo.png';

import type { ShippingMethod } from '@e-shop/types';

type BaseShippingMethod = Omit<ShippingMethod, 'createdAt' | 'updatedAt'>;

export const storyShippingMethods: BaseShippingMethod[] = [
  {
    _id: '60f35a900dda3b7b4ba97c19',
    name: 'FedEx',
    cost: 15.5,
    image: fedexLogo,
  },
  {
    _id: 'cbddfa15f2b00e34878c53ca',
    name: 'UPS',
    cost: 12.75,
    image: upsLogo,
  },
  {
    _id: '53d4fd8b2049808e86247818',
    name: 'DHL',
    cost: 10.0,
    image: dhlLogo,
  },
  {
    _id: 'd601f64292971f8e62283401',
    name: 'TNT',
    cost: 18.9,
    image: tntLogo,
  },
  {
    _id: '84212abb21249d5c4a10dbca',
    name: 'Aramex',
    cost: 17.5,
    image: aramexLogo,
  },
];
