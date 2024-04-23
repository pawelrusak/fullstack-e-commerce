import type { Meta, StoryObj } from '@storybook/react';
import { ValuesSection } from './values-section.component';
import { EN } from '@e-shop/i18n';
import {
  HeadphoneIcon,
  SecurityIcon,
  DeliveryIcon,
  ReturnIcon,
} from '../icons';

export default {
  component: ValuesSection,
  title: 'ValuesSection',
  render: (args) => (
    <ValuesSection {...args}>
      <ValuesSection.Item>
        <ValuesSection.ItemIcon icon={<HeadphoneIcon />} />
        <ValuesSection.ItemTitle>
          {EN.VALUES.RESPONSIVE.TITLE}
        </ValuesSection.ItemTitle>
        <ValuesSection.ItemDescription>
          {EN.VALUES.RESPONSIVE.DESCRIPTION}
        </ValuesSection.ItemDescription>
      </ValuesSection.Item>

      <ValuesSection.Item>
        <ValuesSection.ItemIcon icon={<SecurityIcon />} />
        <ValuesSection.ItemTitle>
          {EN.VALUES.SECURE.TITLE}
        </ValuesSection.ItemTitle>
        <ValuesSection.ItemDescription>
          {EN.VALUES.SECURE.DESCRIPTION}
        </ValuesSection.ItemDescription>
      </ValuesSection.Item>

      <ValuesSection.Item>
        <ValuesSection.ItemIcon icon={<DeliveryIcon />} />
        <ValuesSection.ItemTitle>
          {EN.VALUES.SHIPPING.TITLE}
        </ValuesSection.ItemTitle>
        <ValuesSection.ItemDescription>
          {EN.VALUES.SHIPPING.DESCRIPTION}
        </ValuesSection.ItemDescription>
      </ValuesSection.Item>

      <ValuesSection.Item>
        <ValuesSection.ItemIcon icon={<ReturnIcon />} />
        <ValuesSection.ItemTitle>
          {EN.VALUES.TRANSPARENT.TITLE}
        </ValuesSection.ItemTitle>
        <ValuesSection.ItemDescription>
          {EN.VALUES.TRANSPARENT.DESCRIPTION}
        </ValuesSection.ItemDescription>
      </ValuesSection.Item>
    </ValuesSection>
  ),
} satisfies Meta<typeof ValuesSection>;

type Story = StoryObj<typeof ValuesSection>;

export const Complete: Story = {
  args: {},
};
