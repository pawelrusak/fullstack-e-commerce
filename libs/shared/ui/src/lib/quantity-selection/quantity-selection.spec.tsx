import { render, screen } from '@e-shop/test-utils';
import { faker } from '@faker-js/faker';

import QuantitySelection from './quantity-selection.component';

import { DATA_TEST_ID } from './quantity-selection.component';

const getInput = () => screen.getByTestId(DATA_TEST_ID.INPUT);
const findInput = () => screen.queryByTestId(DATA_TEST_ID.INPUT);
const getIncreaseButton = () => screen.getByTestId(DATA_TEST_ID.INCREASE);
const getDecreaseButton = () => screen.getByTestId(DATA_TEST_ID.DECREASE);

describe('QuantitySelection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuantitySelection />);
    expect(baseElement).toBeTruthy();
  });

  it('initial input should be 0', () => {
    render(<QuantitySelection />);

    const input = getInput();

    expect(input).toHaveValue(0);
  });

  it('should have specified initial value if it has been passed', () => {
    const initialQuantity = faker.number.int({ max: 100 });

    render(<QuantitySelection initialQuantity={initialQuantity} />);

    expect(getInput()).toHaveValue(initialQuantity);
  });

  it.skip('if initialQuantity is grater then display maxQuantity if it has been passed', () => {
    const initialQuantity = faker.number.int({ min: 100, max: 200 });
    const maxQuantity = faker.number.int({ min: 0, max: 100 });

    render(
      <QuantitySelection
        initialQuantity={initialQuantity}
        maxQuantity={maxQuantity}
      />
    );

    expect(getInput()).toHaveValue(maxQuantity);
  });

  it('should decrease quantity by 1', async () => {
    const initialQuantity = faker.number.int({ min: 10, max: 100 });

    render(<QuantitySelection initialQuantity={initialQuantity} />);

    const decreaseButton = getDecreaseButton();

    expect(await findInput()).toHaveValue(initialQuantity);

    decreaseButton.click();

    expect(await findInput()).toHaveValue(initialQuantity - 1);

    decreaseButton.click();

    expect(await findInput()).toHaveValue(initialQuantity - 2);
  });

  it('should not decrease quantity below 0', async () => {
    const initialQuantityEqualToOne = 1;
    render(<QuantitySelection initialQuantity={initialQuantityEqualToOne} />);

    expect(initialQuantityEqualToOne).toBe(1);

    const decreaseButton = getDecreaseButton();

    expect(await findInput()).toHaveValue(initialQuantityEqualToOne);

    decreaseButton.click();

    expect(await findInput()).toHaveValue(initialQuantityEqualToOne - 1);

    decreaseButton.click();

    expect(await findInput()).toHaveValue(0);
  });

  it('should increase quantity by 1', async () => {
    const initialQuantity = faker.number.int({ min: 0, max: 100 });

    render(<QuantitySelection initialQuantity={initialQuantity} />);

    const increaseButton = getIncreaseButton();

    expect(await findInput()).toHaveValue(initialQuantity);

    increaseButton.click();

    expect(await findInput()).toHaveValue(initialQuantity + 1);

    increaseButton.click();

    expect(await findInput()).toHaveValue(initialQuantity + 2);
  });

  it('should not increase quantity above maxQuantity if it has been passed', async () => {
    const initialQuantity = faker.number.int({ min: 0, max: 100 });
    const maxQuantity = initialQuantity + 1;

    render(
      <QuantitySelection
        initialQuantity={initialQuantity}
        maxQuantity={maxQuantity}
      />
    );

    const increaseButton = getIncreaseButton();

    expect(await findInput()).toHaveValue(initialQuantity);

    increaseButton.click();

    expect(await findInput()).toHaveValue(maxQuantity);

    increaseButton.click();

    expect(await findInput()).toHaveValue(maxQuantity);
  });

  it('should call onChangeQuantity with new quantity when click increase button', async () => {
    const initialQuantity = faker.number.int({ min: 0, max: 100 });
    const onChangeQuantity = jest.fn();

    render(
      <QuantitySelection
        initialQuantity={initialQuantity}
        onChangeQuantity={onChangeQuantity}
      />
    );

    const increaseButton = getIncreaseButton();

    increaseButton.click();

    expect(onChangeQuantity).toHaveBeenCalledWith(initialQuantity + 1);
  });

  it('should call onChangeQuantity with new quantity when click decrease button', async () => {
    const initialQuantity = faker.number.int({ min: 10, max: 100 });
    const onChangeQuantity = jest.fn();

    render(
      <QuantitySelection
        initialQuantity={initialQuantity}
        onChangeQuantity={onChangeQuantity}
      />
    );

    const decreaseButton = getDecreaseButton();

    decreaseButton.click();

    expect(onChangeQuantity).toHaveBeenCalledWith(initialQuantity - 1);
  });

  it.todo('should disabled decrease button if quantity is 0');

  it.todo(
    'should disabled increase button if quantity is equal to maxQuantity'
  );

  // Write some test for onChange of input
});
