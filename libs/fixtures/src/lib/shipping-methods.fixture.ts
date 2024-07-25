import type { ShippingMethod } from '@e-shop/types';

export default [
  {
    _id: '60f35a900dda3b7b4ba97c19',
    name: 'FedEx',
    cost: 15.5,
    image: '/assets/images/shipping-methods/fedex-logo.png',
    createdAt: '2024-07-23T21:36:13.000Z',
    updatedAt: '2024-07-23T21:36:13.000Z',
  },
  {
    _id: 'cbddfa15f2b00e34878c53ca',
    name: 'UPS',
    cost: 12.75,
    image: '/assets/images/shipping-methods/ups-logo.svg',
    createdAt: '2024-07-22T21:36:13.000Z',
    updatedAt: '2024-07-23T21:36:13.000Z',
  },
  {
    _id: '53d4fd8b2049808e86247818',
    name: 'DHL',
    cost: 10.0,
    image: '/assets/images/shipping-methods/dhl-logo.png',
    createdAt: '2024-07-21T21:36:13.000Z',
    updatedAt: '2024-07-23T21:36:13.000Z',
  },
  {
    _id: 'd601f64292971f8e62283401',
    name: 'TNT',
    cost: 18.9,
    image: '/assets/images/shipping-methods/tnt-logo.svg',
    createdAt: '2024-07-19T21:36:13.000Z',
    updatedAt: '2024-07-23T21:36:13.000Z',
  },
  {
    _id: '84212abb21249d5c4a10dbca',
    name: 'Aramex',
    cost: 17.5,
    image: '/assets/images/shipping-methods/aramex-logo.png',
    createdAt: '2024-07-18T21:36:13.000Z',
    updatedAt: '2024-07-23T21:36:13.000Z',
  },
] satisfies ShippingMethod[];
