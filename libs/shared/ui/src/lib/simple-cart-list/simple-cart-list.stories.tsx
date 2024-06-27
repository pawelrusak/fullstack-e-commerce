import styled from 'styled-components';

import type { Meta, StoryObj } from '@storybook/react';
import { SimpleCartList } from './simple-cart-list.component';
import { getCurrencyFormat } from '@e-shop/utils';
import { StripeInner } from '../../.././.storybook/utils-components';

const StoryWrapper = styled(StripeInner)`
  display: block;
  width: 59.5rem;
  padding: 4rem;
  font-size: inherit;
  height: auto;
`;

type SimplyCartItem = {
  id: number;
  description: string;
  quantity: number;
  price: number;
};

const exampleCartItems: SimplyCartItem[] = [
  {
    id: 1,
    description: '2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD',
    quantity: 1,
    price: 1_659.0,
  },
  {
    id: 2,
    description: 'Mobile Watch A Series GPS 7/144 45 mm Red Rubber Band',
    quantity: 1,
    price: 999.0,
  },
  {
    id: 3,
    description: 'LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color USB HQ',
    quantity: 2,
    price: 4_598.0,
  },
  {
    id: 4,
    description: 'Console Game Stick HD Wireless Bluetooth Connect',
    quantity: 2,
    price: 218.0,
  },
  {
    id: 5,
    description: 'Mini Tablet Pro 16 inch HD Pencil 128 GB System RAM 28 GB',
    quantity: 1,
    price: 259.0,
  },
];

export default {
  component: SimpleCartList,
  title: 'SimpleCartList',
  render: () => (
    <StoryWrapper>
      <SimpleCartList>
        {exampleCartItems.map((item) => (
          <SimpleCartList.Item key={item.id}>
            <SimpleCartList.ItemName>
              {item.description}
            </SimpleCartList.ItemName>
            <SimpleCartList.ItemQuantity>
              {item.quantity}
            </SimpleCartList.ItemQuantity>
            <SimpleCartList.ItemPrice>
              {getCurrencyFormat(item.price)}
            </SimpleCartList.ItemPrice>
          </SimpleCartList.Item>
        ))}
        <SimpleCartList.Item>
          <SimpleCartList.ItemName>Shipping Fee</SimpleCartList.ItemName>
          <SimpleCartList.ItemPrice>
            {getCurrencyFormat(10.0)}
          </SimpleCartList.ItemPrice>
        </SimpleCartList.Item>
      </SimpleCartList>
    </StoryWrapper>
  ),
} satisfies Meta<typeof SimpleCartList>;

type Story = StoryObj<typeof SimpleCartList>;

export const Complete: Story = {
  args: {},
};
