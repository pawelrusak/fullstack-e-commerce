import { render, screen } from '@e-shop/test-utils';
import { faker } from '@faker-js/faker';
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

  it('should render additional text correctly associated with its radio input', () => {
    const additionalTextTestId = 'additional-text';
    const inputTestId = 'radio-input';

    render(
      <RadioGroupTiles>
        <RadioGroupTiles.Tile>
          <RadioGroupTiles.TileRadioInput data-testid={inputTestId} />
          <RadioGroupTiles.TileAdditionalText
            data-testid={additionalTextTestId}
          />
        </RadioGroupTiles.Tile>
      </RadioGroupTiles>,
    );

    const additionalTextElement = screen.getByTestId(additionalTextTestId);
    const inputElement = screen.getByTestId(inputTestId);

    expect(additionalTextElement).toHaveAttribute('aria-details');
    expect(inputElement).toHaveAttribute('id');
    expect(additionalTextElement.getAttribute('aria-details')).toBe(
      inputElement.id,
    );
  });

  it('should set the [name] attribute on TileRadioInput when "radioGroupName" prop is provided', () => {
    const radioGroupName = faker.word.noun();

    render(
      <RadioGroupTiles radioGroupName={radioGroupName}>
        <RadioGroupTiles.Tile>
          <RadioGroupTiles.TileRadioInput />
        </RadioGroupTiles.Tile>

        <RadioGroupTiles.Tile>
          <RadioGroupTiles.TileRadioInput />
        </RadioGroupTiles.Tile>

        <RadioGroupTiles.Tile>
          <RadioGroupTiles.TileRadioInput />
        </RadioGroupTiles.Tile>
      </RadioGroupTiles>,
    );

    const radioElements = screen.getAllByRole('radio');

    expect(radioElements).toHaveLength(3);

    const [firstRadioElement, secondRadioElement, thirdRadioElement] =
      radioElements;

    expect(firstRadioElement).toHaveAttribute('name', radioGroupName);
    expect(secondRadioElement).toHaveAttribute('name', radioGroupName);
    expect(thirdRadioElement).toHaveAttribute('name', radioGroupName);
  });

  it('should not set [aria-invalid] attribute on fieldset when [valid] prop is not provided', () => {
    const fieldsetDataTestId = 'fieldset';

    render(
      <RadioGroupTiles data-testid={fieldsetDataTestId}>
        <RadioGroupTiles.Tile>
          <RadioGroupTiles.TileRadioInput />
        </RadioGroupTiles.Tile>
      </RadioGroupTiles>,
    );

    const fieldsetElement = screen.getByTestId(fieldsetDataTestId);
    expect(fieldsetElement).not.toHaveAttribute('aria-invalid');
  });

  it('should set [aria-invalid="true"] when [valid={false}] prop is provided', () => {
    const fieldsetDataTestId = 'fieldset';

    render(
      <RadioGroupTiles data-testid={fieldsetDataTestId} valid={false}>
        <RadioGroupTiles.Tile>
          <RadioGroupTiles.TileRadioInput />
        </RadioGroupTiles.Tile>
      </RadioGroupTiles>,
    );

    const fieldsetElement = screen.getByTestId(fieldsetDataTestId);
    expect(fieldsetElement).toHaveAttribute('aria-invalid', 'true');
  });

  it('should set [aria-required="true"] and [role="radiogroup"] when [required={true}] prop is provided', () => {
    const fieldsetDataTestId = 'fieldset';

    const { rerender } = render(
      <RadioGroupTiles data-testid={fieldsetDataTestId}>
        <RadioGroupTiles.Tile>
          <RadioGroupTiles.TileRadioInput />
        </RadioGroupTiles.Tile>
      </RadioGroupTiles>,
    );

    const fieldsetElement = screen.getByTestId(fieldsetDataTestId);
    expect(fieldsetElement).not.toHaveAttribute('aria-required');
    expect(fieldsetElement).not.toHaveAttribute('role', 'radiogroup');

    rerender(
      <RadioGroupTiles data-testid={fieldsetDataTestId} required>
        <RadioGroupTiles.Tile>
          <RadioGroupTiles.TileRadioInput />
        </RadioGroupTiles.Tile>
      </RadioGroupTiles>,
    );

    const updatedFieldsetElement = screen.getByTestId(fieldsetDataTestId);
    expect(updatedFieldsetElement).toHaveAttribute('aria-required', 'true');
    expect(updatedFieldsetElement).toHaveAttribute('role', 'radiogroup');
  });
});
