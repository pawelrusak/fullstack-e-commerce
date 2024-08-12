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

  it('should render the input element with type="radio"', () => {
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

  it('should assign a unique ID to each TileRadioInput', () => {
    const inputTestId = 'radio-input';

    render(
      <RadioGroupTiles>
        <RadioGroupTiles.Tile>
          <RadioGroupTiles.TileRadioInput data-testid={inputTestId} />
        </RadioGroupTiles.Tile>
        <RadioGroupTiles.Tile>
          <RadioGroupTiles.TileRadioInput data-testid={inputTestId} />
        </RadioGroupTiles.Tile>
      </RadioGroupTiles>,
    );

    const tileElements = screen.getAllByTestId(inputTestId);
    const [firstRadioInput, secondRadioInput] = tileElements;

    expect(firstRadioInput).toHaveAttribute('id');
    expect(secondRadioInput).toHaveAttribute('id');
    expect(firstRadioInput.id).not.toBe(secondRadioInput.id);
  });

  it('should use controlId prop to set the ID of TileRadioInput', () => {
    const firstTestId = 'first-radio-input';
    const firstControlId = 'first-control-id';

    const secondTestId = 'second-radio-input';
    const secondControlId = 'second-control-id';

    render(
      <RadioGroupTiles>
        <RadioGroupTiles.Tile controlId={firstControlId}>
          <RadioGroupTiles.TileRadioInput data-testid={firstTestId} />
        </RadioGroupTiles.Tile>

        <RadioGroupTiles.Tile controlId={secondControlId}>
          <RadioGroupTiles.TileRadioInput data-testid={secondTestId} />
        </RadioGroupTiles.Tile>
      </RadioGroupTiles>,
    );

    const firstRadioElement = screen.getByTestId(firstTestId);
    expect(firstRadioElement).toHaveAttribute('id', firstControlId);

    const secondRadioElement = screen.getByTestId(secondTestId);
    expect(secondRadioElement).toHaveAttribute('id', secondControlId);
  });

  it('should render a label correctly associated with its radio input', () => {
    const labelTestId = 'radio-label';
    const inputTestId = 'radio-input';

    render(
      <RadioGroupTiles>
        <RadioGroupTiles.Tile>
          <RadioGroupTiles.TileRadioInput data-testid={inputTestId} />
          <RadioGroupTiles.TileLabel data-testid={labelTestId} />
        </RadioGroupTiles.Tile>
      </RadioGroupTiles>,
    );

    const labelElement = screen.getByTestId(labelTestId);
    const inputElement = screen.getByTestId(inputTestId);

    expect(labelElement).toHaveAttribute('for');
    expect(inputElement).toHaveAttribute('id');
    expect(labelElement.getAttribute('for')).toBe(inputElement.id);
  });
});
