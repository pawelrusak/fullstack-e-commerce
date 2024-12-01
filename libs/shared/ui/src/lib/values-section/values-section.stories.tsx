import type { Meta, StoryObj } from '@storybook/react';
import { ValuesSection } from './values-section.component';
import {
  HeadphoneIcon,
  SecurityIcon,
  DeliveryIcon,
  ReturnIcon,
} from '@e-shop/icons';

export default {
  component: ValuesSection,
  title: 'ValuesSection',
  render: (args) => (
    <ValuesSection {...args}>
      <ValuesSection.Item>
        <ValuesSection.ItemIcon icon={<HeadphoneIcon />} />
        <ValuesSection.ItemTitle>Responsive</ValuesSection.ItemTitle>
        <ValuesSection.ItemDescription>
          Customer service available 24/7
        </ValuesSection.ItemDescription>
      </ValuesSection.Item>

      <ValuesSection.Item>
        <ValuesSection.ItemIcon icon={<SecurityIcon />} />
        <ValuesSection.ItemTitle>Secure</ValuesSection.ItemTitle>
        <ValuesSection.ItemDescription>
          Certified marketplace since 2017
        </ValuesSection.ItemDescription>
      </ValuesSection.Item>

      <ValuesSection.Item>
        <ValuesSection.ItemIcon icon={<DeliveryIcon />} />
        <ValuesSection.ItemTitle>Shipping</ValuesSection.ItemTitle>
        <ValuesSection.ItemDescription>
          Free, fast and reliable worldwide
        </ValuesSection.ItemDescription>
      </ValuesSection.Item>

      <ValuesSection.Item>
        <ValuesSection.ItemIcon icon={<ReturnIcon />} />
        <ValuesSection.ItemTitle>Transparent</ValuesSection.ItemTitle>
        <ValuesSection.ItemDescription>
          Hassle-free return policy
        </ValuesSection.ItemDescription>
      </ValuesSection.Item>
    </ValuesSection>
  ),
} satisfies Meta<typeof ValuesSection>;

type Story = StoryObj<typeof ValuesSection>;

export const Complete: Story = {
  args: {},
};
