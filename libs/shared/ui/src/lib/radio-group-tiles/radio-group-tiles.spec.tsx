import { render } from '@e-shop/test-utils';

import RadioGroupTiles from './radio-group-tiles.component';

describe('RadioGroupTiles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <RadioGroupTiles>
        <RadioGroupTiles.Tile>
          <RadioGroupTiles.TileRadioInput />
          <RadioGroupTiles.TileLabel />
          <RadioGroupTiles.TileImage src="https://via.placeholder.com/120" />
          <RadioGroupTiles.TileAdditionalText />
        </RadioGroupTiles.Tile>
      </RadioGroupTiles>,
    );
    expect(baseElement).toBeTruthy();
  });
});
