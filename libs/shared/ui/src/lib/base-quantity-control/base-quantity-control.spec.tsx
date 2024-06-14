import { render, screen, waitFor } from '@e-shop/test-utils';
import { faker } from '@faker-js/faker';

import BaseQuantityControl, {
  BaseQuantityControlProps,
} from './base-quantity-control.component';

export const DATA_TEST_ID = {
  DECREASE: 'base-quantity-control-decrease',
  INCREASE: 'base-quantity-control-increase',
  INPUT: 'base-quantity-control-input',
};

const getInput = () => screen.getByTestId(DATA_TEST_ID.INPUT);
const findInput = () => screen.queryByTestId(DATA_TEST_ID.INPUT);
const getIncreaseButton = () => screen.getByTestId(DATA_TEST_ID.INCREASE);
const getDecreaseButton = () => screen.getByTestId(DATA_TEST_ID.DECREASE);

const renderBaseQuantityControl = (
  args?: Omit<BaseQuantityControlProps, 'children'>,
) =>
  render(
    <BaseQuantityControl {...args}>
      <BaseQuantityControl.IncreaseButton data-testid={DATA_TEST_ID.INCREASE} />
      <BaseQuantityControl.Input data-testid={DATA_TEST_ID.INPUT} />
      <BaseQuantityControl.DecreaseButton data-testid={DATA_TEST_ID.DECREASE} />
    </BaseQuantityControl>,
  );

// TODO fix warning: "An update to QuantityProvider inside a test was not wrapped in act(...)."
describe('BaseQuantityControl', () => {
  it('should render successfully', () => {
    const { baseElement } = renderBaseQuantityControl();
    expect(baseElement).toBeTruthy();
  });

  it('initial input should be 0', () => {
    renderBaseQuantityControl();

    const input = getInput();

    expect(input).toHaveValue(0);
  });

  it('should have specified initial value if it has been passed', () => {
    const initialQuantity = faker.number.int({ max: 100 });

    renderBaseQuantityControl({ initialQuantity });

    expect(getInput()).toHaveValue(initialQuantity);
  });

  it.skip('if initialQuantity is grater then display maxQuantity if it has been passed', () => {
    const initialQuantity = faker.number.int({ min: 100, max: 200 });
    const maxQuantity = faker.number.int({ min: 0, max: 100 });

    renderBaseQuantityControl({ initialQuantity, maxQuantity });

    expect(getInput()).toHaveValue(maxQuantity);
  });

  it('should decrease quantity by 1', async () => {
    const initialQuantity = faker.number.int({ min: 10, max: 100 });

    renderBaseQuantityControl({ initialQuantity });

    const decreaseButton = getDecreaseButton();

    expect(await findInput()).toHaveValue(initialQuantity);

    decreaseButton.click();

    expect(await findInput()).toHaveValue(initialQuantity - 1);

    decreaseButton.click();

    expect(await findInput()).toHaveValue(initialQuantity - 2);
  });

  it('should not decrease quantity below 0', async () => {
    const initialQuantityEqualToOne = 1;
    renderBaseQuantityControl({ initialQuantity: initialQuantityEqualToOne });

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

    renderBaseQuantityControl({ initialQuantity });

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

    renderBaseQuantityControl({
      initialQuantity,
      maxQuantity,
    });

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

    renderBaseQuantityControl({
      initialQuantity,
      onChangeQuantity,
    });

    const increaseButton = getIncreaseButton();

    increaseButton.click();

    expect(onChangeQuantity).toHaveBeenCalledWith(initialQuantity + 1);
  });

  it('should call onChangeQuantity with new quantity when click decrease button', async () => {
    const initialQuantity = faker.number.int({ min: 10, max: 100 });
    const onChangeQuantity = jest.fn();

    renderBaseQuantityControl({
      initialQuantity,
      onChangeQuantity,
    });

    const decreaseButton = getDecreaseButton();

    decreaseButton.click();

    expect(onChangeQuantity).toHaveBeenCalledWith(initialQuantity - 1);
  });

  it('should disabled decrease button if quantity is 0 and enable his when is more than 0', async () => {
    renderBaseQuantityControl({ initialQuantity: 0 });

    const decreaseButton = getDecreaseButton();
    const increaseButton = getIncreaseButton();

    expect(decreaseButton).toBeDisabled();

    await waitFor(() => increaseButton.click());

    expect(decreaseButton).toBeEnabled();
  });

  it('should disabled increase button if quantity is equal to maxQuantity', async () => {
    const maxQuantity = faker.number.int({ min: 2, max: 5 });

    renderBaseQuantityControl({ initialQuantity: 0, maxQuantity });

    const increaseButton = getIncreaseButton();

    expect(increaseButton).toBeEnabled();

    for (let i = 0; i < maxQuantity - 1; i++) {
      await waitFor(() => increaseButton.click());
    }

    expect(increaseButton).toBeEnabled();

    await waitFor(() => increaseButton.click());

    expect(increaseButton).toBeDisabled();
  });

  // TODO Write some test for onChange of input
});
