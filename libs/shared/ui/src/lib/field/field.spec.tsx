import { render, screen } from '@e-shop/test-utils';

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
      </Field>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should not render control icons container', () => {
    render(
      <Field>
        <Field.ControlInput />
      </Field>
    );
    expect(queryIconLeft()).not.toBeInTheDocument();
    expect(queryIconRight()).not.toBeInTheDocument();
  });

  it('should render control icons container', () => {
    render(
      <Field>
        <Field.ControlInput iconLeft={<span />} iconRight={<span />} />
      </Field>
    );
    expect(queryIconLeft()).toBeInTheDocument();
    expect(queryIconRight()).toBeInTheDocument();
  });

  // TODO write tests for the valid and contentId props of Field component
});
