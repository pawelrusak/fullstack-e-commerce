import * as React from 'react';
import * as Styled from './field.styled';
import { FieldProvider, useField } from './field.context';
import type { FieldContextParams } from './field.context';
import type { StyledLabelProps, StyledFieldProps } from './field.styled';

export type FieldProps = React.ComponentPropsWithRef<'div'> &
  FieldContextParams &
  StyledFieldProps;

export function Field({ controlId, valid = true, ...props }: FieldProps) {
  return (
    <FieldProvider valid={valid} controlId={controlId}>
      <Styled.Container hasErrorColor={!valid} {...props} />
    </FieldProvider>
  );
}

export type FieldLabelProps = React.ComponentPropsWithRef<'label'> &
  StyledLabelProps;

export function FieldLabel(props: FieldLabelProps) {
  const { controlId } = useField();

  return <Styled.Label htmlFor={controlId} {...props} />;
}

export type FieldInputProps<Element extends React.ElementType> =
  React.ComponentPropsWithRef<Element> & {
    as?: Element;
  };

const FieldInput = React.forwardRef<HTMLInputElement, FieldInputProps<'input'>>(
  function <Element extends React.ElementType = 'input'>(
    { as = 'input', ...props }: FieldInputProps<Element>,
    // TODO improve this type, should depends of the tag passed to as prop {@see https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/}
    // https://codesandbox.io/s/polymorphic-react-components-forwardref-9dxyq?file=/src/PolymorphicComponent.tsx
    ref: React.Ref<HTMLInputElement>,
  ) {
    const { controlId } = useField();
    const type: React.HTMLInputTypeAttribute | undefined =
      as === 'input' ? 'text' : undefined;

    return (
      <Styled.Input
        ref={ref}
        as={as}
        id={controlId}
        type={type}
        aria-describedby={controlId ? `${controlId}-field-error` : undefined}
        {...props}
      />
    );
  },
);

export type FieldControlInputProps<
  Element extends React.ElementType = 'input',
> = FieldInputProps<Element> & {
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
};

const FieldControlInput = React.forwardRef<
  HTMLInputElement,
  FieldControlInputProps
>(function (
  { iconLeft, iconRight, ...params }: FieldControlInputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <Styled.Control
      hasLeftIcon={Boolean(iconLeft)}
      hasRightIcon={Boolean(iconRight)}
    >
      <FieldInput {...params} ref={ref} />
      {iconLeft && (
        <Styled.ControlIcon isLeft data-testid="input-icon-left">
          {iconLeft}
        </Styled.ControlIcon>
      )}
      {iconRight && (
        <Styled.ControlIcon isRight data-testid="input-icon-right">
          {iconRight}
        </Styled.ControlIcon>
      )}
    </Styled.Control>
  );
});

export type FieldErrorProps = React.ComponentPropsWithRef<'strong'>;

function FieldError({ children, ...props }: FieldErrorProps) {
  const { controlId, valid } = useField();
  return (
    <Styled.Error
      id={`${controlId}-field-error`}
      data-testid="field-error"
      aria-live="polite"
      aria-atomic="true"
      role="alert"
      mt={valid ? 0 : undefined}
      {...props}
    >
      {!valid && children}
    </Styled.Error>
  );
}

Field.ControlInput = FieldControlInput;
Field.ControlIcon = Styled.ControlIcon;
Field.Label = FieldLabel;
Field.Help = Styled.Help;
Field.Control = Styled.Control;
Field.Input = FieldInput;
Field.Error = FieldError;

export default Field;
