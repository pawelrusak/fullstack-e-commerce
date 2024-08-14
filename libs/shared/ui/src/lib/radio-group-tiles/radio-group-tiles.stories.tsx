import { RadioGroupTiles } from './radio-group-tiles.component';
import { getCurrencyFormat } from '@e-shop/utils';
import { storyShippingMethods } from './radio-group-tiles.data-stories';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  component: RadioGroupTiles,
  title: 'RadioGroupTiles',
  render: () => (
    <RadioGroupTiles radioGroupName="shipping">
      {storyShippingMethods.map((method) => (
        <RadioGroupTiles.Tile key={method._id}>
          <RadioGroupTiles.TileRadioInput value={method._id} />
          <RadioGroupTiles.TileLabel>{method.name}</RadioGroupTiles.TileLabel>
          <RadioGroupTiles.TileImage src={method.image} />
          <RadioGroupTiles.TileAdditionalText>
            {getCurrencyFormat(method.cost)}
          </RadioGroupTiles.TileAdditionalText>
        </RadioGroupTiles.Tile>
      ))}
    </RadioGroupTiles>
  ),
} satisfies Meta<typeof RadioGroupTiles>;

type Story = StoryObj<typeof RadioGroupTiles>;

export const Complete: Story = {
  args: {},
};

export const Invalid: Story = {
  args: {
    valid: false,
  },
  render: (args) => (
    <RadioGroupTiles radioGroupName="shipping" required {...args}>
      {storyShippingMethods.map((method) => (
        <RadioGroupTiles.Tile key={method._id}>
          <RadioGroupTiles.TileRadioInput value={method._id} />
          <RadioGroupTiles.TileLabel>{method.name}</RadioGroupTiles.TileLabel>
          <RadioGroupTiles.TileImage src={method.image} />
          <RadioGroupTiles.TileAdditionalText>
            {getCurrencyFormat(method.cost)}
          </RadioGroupTiles.TileAdditionalText>
        </RadioGroupTiles.Tile>
      ))}
    </RadioGroupTiles>
  ),
};
