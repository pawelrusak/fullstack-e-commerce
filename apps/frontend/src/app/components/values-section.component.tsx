'use client';

import {
  ValuesSection as ValuesInfo,
  SecurityIcon,
  HeadphoneIcon,
  DeliveryIcon,
  ReturnIcon,
} from '@e-shop/ui';
import { EN } from '@e-shop/i18n';

const OUR_VALUES = [
  {
    icon: <HeadphoneIcon />,
    title: EN.VALUES.RESPONSIVE.TITLE,
    description: EN.VALUES.RESPONSIVE.DESCRIPTION,
  },
  {
    icon: <SecurityIcon />,
    title: EN.VALUES.SECURE.TITLE,
    description: EN.VALUES.SECURE.DESCRIPTION,
  },
  {
    icon: <DeliveryIcon />,
    title: EN.VALUES.SHIPPING.TITLE,
    description: EN.VALUES.SHIPPING.DESCRIPTION,
  },
  {
    icon: <ReturnIcon />,
    title: EN.VALUES.TRANSPARENT.TITLE,
    description: EN.VALUES.TRANSPARENT.DESCRIPTION,
  },
];

export default function HomepageValuesSection() {
  return (
    <ValuesInfo>
      {OUR_VALUES.map((value) => (
        <ValuesInfo.Item key={value.title}>
          <ValuesInfo.ItemIcon icon={value.icon} />
          <ValuesInfo.ItemTitle>{value.title}</ValuesInfo.ItemTitle>
          <ValuesInfo.ItemDescription>
            {value.description}
          </ValuesInfo.ItemDescription>
        </ValuesInfo.Item>
      ))}
    </ValuesInfo>
  );
}
