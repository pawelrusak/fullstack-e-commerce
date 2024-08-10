import { render, screen } from '@e-shop/test-utils';
import { faker } from '@faker-js/faker';

import Field from './field.component';

const queryIconLeft = () => screen.queryByTestId('input-icon-left');
const queryIconRight = () => screen.queryByTestId('input-icon-right');
const getByTextboxRole = () => screen.getByRole('textbox');

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

  it('should associate the label with the correct input element', () => {
    const label = faker.word.noun();
    const placeholder = faker.word.noun();
    const inputTestId = 'input-element';

    render(
      <Field>
        <Field.Label>{label}</Field.Label>
        <Field.Input data-testid={inputTestId} placeholder={placeholder} />
      </Field>,
    );

    const labelElement = screen.getByText(label, { selector: 'label' });
    const inputElement = screen.getByRole('textbox');

    expect(labelElement).toHaveAttribute('for');
    expect(inputElement).toHaveAttribute('id');

    expect(labelElement.getAttribute('for')).toBe(inputElement.id);
  });

  it('should set default value of type attribute in Field.Input as "text"', () => {
    const inputTestId = 'input-element';

    const { rerender } = render(
      <Field>
        <Field.Input data-testid={inputTestId} />
      </Field>,
    );

    const inputElement = screen.getByTestId(inputTestId);

    expect(inputElement).toHaveAttribute('type', 'text');

    const overrideType: React.HTMLInputTypeAttribute = 'email';

    rerender(
      <Field>
        <Field.Input as="input" data-testid={inputTestId} />
      </Field>,
    );

    expect(getByTextboxRole()).toHaveAttribute('type', 'text');

    rerender(
      <Field>
        <Field.Input type={overrideType} data-testid={inputTestId} />
      </Field>,
    );

    const updatedInputElement = screen.getByTestId(inputTestId);

    expect(updatedInputElement).toHaveAttribute('type', overrideType);
  });

  it('should omit type attribute if Field.Input renders as a non-input element', () => {
    render(
      <Field>
        {/* TODO remove these comments later*/}
        {/* eslint-disable-next-line */}
        {/* @ts-ignore */}
        <Field.Input as="textarea" />
      </Field>,
    );

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).not.toHaveAttribute('type');
  });

  it('should remove type attribute from Field.Input if value is "undefined"', () => {
    const { rerender } = render(
      <Field>
        <Field.Input type={undefined} />
      </Field>,
    );

    expect(getByTextboxRole()).not.toHaveAttribute('type');

    rerender(
      <Field>
        <Field.Input as="input" type={undefined} />
      </Field>,
    );

    expect(getByTextboxRole()).not.toHaveAttribute('type');
  });

  it.todo('should display an error message when the valid prop is false');
});
