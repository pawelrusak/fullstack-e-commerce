import { render, screen } from '@e-shop/test-utils';
import { faker } from '@faker-js/faker';

import Field from './field.component';

const queryIconLeft = () => screen.queryByTestId('input-icon-left');
const queryIconRight = () => screen.queryByTestId('input-icon-right');

describe('Field', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Field>
        <Field.Input />
        <Field.ControlInput />
        <Field.Help />
      </Field>,
    );

    expect(baseElement).toBeTruthy();
  });

  it('should not render control icons container', () => {
    render(
      <Field>
        <Field.ControlInput />
      </Field>,
    );

    expect(queryIconLeft()).not.toBeInTheDocument();
    expect(queryIconRight()).not.toBeInTheDocument();
  });

  it('should render control icons container', () => {
    render(
      <Field>
        <Field.ControlInput iconLeft={<span />} iconRight={<span />} />
      </Field>,
    );

    expect(queryIconLeft()).toBeInTheDocument();
    expect(queryIconRight()).toBeInTheDocument();
  });

  it('should pass the value of controlId to the Label and Input components', () => {
    const controlId = faker.word.noun();
    const label = faker.word.noun();
    const placeholder = faker.word.noun();

    // NOTE: that Field.ControlInput has a nested component Field.Input
    render(
      <Field controlId={controlId}>
        <Field.Label>{label}</Field.Label>
        <Field.Input placeholder={placeholder} />
      </Field>,
    );

    const labelElement = screen.getByText(label, { selector: 'label' });
    expect(labelElement).toHaveAttribute('for', controlId);

    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toHaveAttribute('id', controlId);

    expect(inputElement).toHaveAccessibleName(label);
  });

  it('should override value of controlId if htmlFor attribute is passed to Label component', () => {
    const controlId = faker.word.noun();
    const label = faker.word.noun();

    const { rerender } = render(
      <Field controlId={controlId}>
        <Field.Label>{label}</Field.Label>
      </Field>,
    );

    const labelElement = screen.getByText(label, { selector: 'label' });
    expect(labelElement).toHaveAttribute('for', controlId);

    const htmlFor = faker.word.noun();

    rerender(
      <Field controlId={controlId}>
        <Field.Label htmlFor={htmlFor}>{label}</Field.Label>
      </Field>,
    );

    const updatedLabelElement = screen.getByText(label, { selector: 'label' });
    expect(updatedLabelElement).toHaveAttribute('for', htmlFor);
  });

  it('should override value of controlId if id attribute is passed to Input component', () => {
    const controlId = faker.word.noun();
    const placeholder = faker.word.noun();

    const { rerender } = render(
      <Field controlId={controlId}>
        <Field.Input placeholder={placeholder} />
      </Field>,
    );

    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toHaveAttribute('id', controlId);

    const id = faker.word.noun();

    rerender(
      <Field controlId={controlId}>
        <Field.Input id={id} placeholder={placeholder} />
      </Field>,
    );

    const updatedInputElement = screen.getByPlaceholderText(placeholder);
    expect(updatedInputElement).toHaveAttribute('id', id);
  });

  it.todo('should display an error message when the valid prop is false');
});
