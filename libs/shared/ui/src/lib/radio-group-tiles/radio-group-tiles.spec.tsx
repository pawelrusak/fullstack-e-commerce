import { render, screen } from '@e-shop/test-utils';

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

  it('should render input with type radio', () => {
    const inputTestId = 'radio-input';

    render(
      <RadioGroupTiles>
        <RadioGroupTiles.Tile>
          <RadioGroupTiles.TileRadioInput data-testid={inputTestId} />
        </RadioGroupTiles.Tile>
      </RadioGroupTiles>,
    );

    const inputElement = screen.getByTestId(inputTestId);

    expect(inputElement).toHaveAttribute('type', 'radio');
  });

  it('each tile radio buttons should have a unique id', () => {
    const inputTestId = 'radio-input';

    const { debug } = render(
      <RadioGroupTiles>
        <RadioGroupTiles.Tile>
          <RadioGroupTiles.TileRadioInput data-testid={inputTestId} />
        </RadioGroupTiles.Tile>
        <RadioGroupTiles.Tile>
          <RadioGroupTiles.TileRadioInput data-testid={inputTestId} />
        </RadioGroupTiles.Tile>
      </RadioGroupTiles>,
    );

    debug();

    const tileElements = screen.getAllByTestId(inputTestId);

    const [firstRadioInput, secondRadioInput] = tileElements;

    expect(firstRadioInput).toHaveAttribute('id');
    expect(secondRadioInput).toHaveAttribute('id');

    expect(firstRadioInput).not.toBe(secondRadioInput);
  });
});
