'use client';

import styled from 'styled-components';
import { ValuesSection as ValuesInfo } from '@e-shop/ui';
import { SecurityIcon, DeliveryIcon, ReturnIcon } from '@e-shop/icons';
import { EN } from '@e-shop/i18n';

const VALUES = [
  {
    icon: <DeliveryIcon />,
    title: EN.PRODUCT_DETAIL.VALUES.SHIPPING.TITLE,
    description: EN.PRODUCT_DETAIL.VALUES.SHIPPING.DESCRIPTION,
  },
  {
    icon: <SecurityIcon />,
    title: EN.PRODUCT_DETAIL.VALUES.SECURE.TITLE,
    description: EN.PRODUCT_DETAIL.VALUES.SECURE.DESCRIPTION,
  },
  {
    icon: <ReturnIcon />,
    title: EN.PRODUCT_DETAIL.VALUES.TRANSPARENT.TITLE,
    description: EN.PRODUCT_DETAIL.VALUES.TRANSPARENT.DESCRIPTION,
  },
];

const DetailsValuesInfo = styled(ValuesInfo)`
  margin-bottom: 0;

  & li:first-of-type {
    margin-left: 0;
  }
  & li:last-of-type {
    margin-right: 0;
  }
`;

export default function ProductDetailsValuesSection() {
  return (
    <DetailsValuesInfo screenReaderLabel={EN.PRODUCT_DETAIL.VALUES.TITLE}>
      {VALUES.map((value) => (
        <ValuesInfo.Item key={value.title}>
          <ValuesInfo.ItemIcon icon={value.icon} />
          <ValuesInfo.ItemTitle>{value.title}</ValuesInfo.ItemTitle>
          <ValuesInfo.ItemDescription>
            {value.description}
          </ValuesInfo.ItemDescription>
        </ValuesInfo.Item>
      ))}
    </DetailsValuesInfo>
  );
}
